'use client';
import { useState, useEffect } from 'react';
import { gameData } from '../../data/gameData';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // useRouter를 사용하여 리디렉션
import { endingData } from '@/data/endingData';

export default function GamePage() {
    const [current, setCurrent] = useState('start');
    const [ending, setEnding] = useState<string[]>(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(
                localStorage.getItem('gameResults') || '[]'
            );
        }
        return [];
    });
    const [nextChoice, setNextChoice] = useState<
        string | null
    >(null); // nextChoice 상태 추가
    const router = useRouter(); // useRouter 훅 사용

    const currentData = gameData[current];

    // useEffect로 리디렉션 처리
    useEffect(() => {
        if (nextChoice && nextChoice in endingData) {
            localStorage.setItem(
                'gameEnding',
                JSON.stringify([nextChoice])
            );
            router.push('/endings'); // useRouter로 엔딩 페이지로 리디렉션
        }
    }, [nextChoice, router]); // nextChoice가 변경될 때마다 실행

    const handleChoice = (next: string) => {
        setEnding((prev) => {
            const updated = [...prev, next];
            localStorage.setItem(
                'gameResults',
                JSON.stringify(updated)
            );

            if (!(next in endingData)) {
                setCurrent(next); // 엔딩이 아닌 경우에는 다음 노드로 이동
            } else {
                setNextChoice(next); // 엔딩인 경우 nextChoice를 설정
            }

            return updated;
        });
    };

    if (!currentData)
        return <div>Game data not found!</div>;

    return (
        <div>
            <h1>
                <Link href="/">logo</Link>
            </h1>
            <p>{currentData.description}</p>

            <img
                src={currentData.image}
                alt="Game scene"
                className="w-full"
            />
            <div>
                <p>{currentData.script}</p>
                {currentData.choices.map(
                    (choice, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                handleChoice(choice.next)
                            }
                        >
                            {choice.text}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
