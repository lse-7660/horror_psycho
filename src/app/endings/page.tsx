'use client';
import { useEffect, useState } from 'react';
import { Ending, endingData } from '@/data/endingData';

export default function EndingsPage() {
    const [ending, setEnding] = useState<Ending | null>(
        null
    );

    useEffect(() => {
        const savedEnding = JSON.parse(
            localStorage.getItem('gameEnding') || '[]'
        );

        if (savedEnding.length > 0) {
            const endingKey = savedEnding[0]; // 첫 번째 엔딩 키 가져오기
            const foundEnding = endingData[endingKey];
            if (foundEnding) {
                setEnding(foundEnding); // 해당 엔딩 데이터 설정
            }
        }
    }, []);

    if (!ending) return <div>No ending found!</div>;

    const handleRestart = () => {
        window.location.href = '/game'; // start 페이지로 리디렉션
    };

    return (
        <div>
            <h1>Ending</h1>
            <div>
                <img
                    src={ending.image}
                    alt="Ending Image"
                />
                <p>{ending.description}</p>
            </div>
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}
