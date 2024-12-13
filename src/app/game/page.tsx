'use client';
import { useState } from 'react';
import { gameData } from '../../data/gameData';

export default function GamePage() {
    const [current, setCurrent] = useState('start');
    const [results, setResults] = useState<string[]>(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('gameResults') || '[]');
        }
        return [];
    });

    const currentData = gameData[current];

    const handleChoice = (next: string) => {
        setResults((prev) => {
            const updated = [...prev, next];
            localStorage.setItem('gameResults', JSON.stringify(updated));
            return updated;
        });
        setCurrent(next);
    };

    if (!currentData) return <div>Game data not found!</div>;

    return (
        <div>
            <p>{currentData.description}</p>
            <img src={currentData.image} alt="Game scene" style={{ maxWidth: '100%' }} />
            <div>
                {currentData.choices.map((choice, index) => (
                    <button key={index} onClick={() => handleChoice(choice.next)}>
                        {choice.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
