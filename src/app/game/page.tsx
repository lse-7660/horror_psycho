'use client';
import { useState, useEffect } from 'react';
import { gameData } from '../../data/gameData';
import { useRouter } from 'next/navigation';
import { endingData } from '@/data/endingData';
import Link from 'next/link';

export default function GamePage() {
    const [current, setCurrent] = useState('start');
    const [result, setResult] = useState<string[]>(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(
                localStorage.getItem('gameResults') || '[]'
            );
        }
        return [];
    });
    const [nextChoice, setNextChoice] = useState<
        string | null
    >(null);
    const [hasLookAround, setHasLookAround] =
        useState(false); // look_around 여부 상태
    const router = useRouter();

    const currentData = gameData[current];

    // Check for "look_around" in gameResults
    useEffect(() => {
        const savedResults = JSON.parse(
            localStorage.getItem('gameResults') || '[]'
        );
        if (savedResults.includes('look_around')) {
            setHasLookAround(true);
        }
    }, []);

    useEffect(() => {
        if (nextChoice && nextChoice in endingData) {
            localStorage.setItem(
                'gameEnding',
                JSON.stringify([nextChoice])
            );
            router.push('/endings');
        }
    }, [nextChoice, router]);

    const handleChoice = (next: string) => {
        setResult((prev) => {
            const updated = [...prev, next];
            localStorage.setItem(
                'gameResults',
                JSON.stringify(updated)
            );

            if (!(next in endingData)) {
                setCurrent(next);
            } else {
                setNextChoice(next);
            }

            return updated;
        });
    };

    if (!currentData)
        return <div>Game data not found!</div>;

    // Filter choices based on `required` field
    const filteredChoices = (() => {
        // Check if there is any `required: true` choice
        const hasRequiredChoices = currentData.choices.some(
            (choice) => choice.required
        );

        if (hasRequiredChoices) {
            // If there are required choices, show them only if `look_around` is true
            if (hasLookAround) {
                return currentData.choices; // Show all choices if look_around is true
            } else {
                // Filter out `required: true` choices if `look_around` is not in localStorage
                return currentData.choices.filter(
                    (choice) => !choice.required
                );
            }
        } else {
            // If no required choices, show all choices
            return currentData.choices;
        }
    })();

    return (
        <div className="flex flex-col inner w-full h-screen">
            <h1 className="mb-4">
                <Link href="/" className="font-bold">
                    LOGO
                </Link>
            </h1>
            <p
                className={`${
                    currentData.description
                        ? 'mb-[30px]'
                        : 'hidden'
                }`}
            >
                {currentData.description}
            </p>
            <div
                className={`${
                    currentData.script
                        ? 'flex max-w-[80%]'
                        : 'hidden'
                }`}
            >
                <p className="text-3xl">"</p>
                <div className="flex place-items-end">
                    <p className="px-2 py-5 break-keep">
                        {currentData.script}
                    </p>
                    <p className="text-3xl text-right">"</p>
                </div>
            </div>

            <img
                src="/images/pattern/image.png"
                alt="Background pattern"
                className="absolute -z-50 inset-0 w-full h-full object-cover"
            />
            <div className="flex flex-col justicy-center absolute bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[350px] font-bold">
                {filteredChoices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleChoice(choice.next)
                        }
                        className="py-[20px]"
                    >
                        {choice.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
