'use client';
import { useState } from 'react';
import { endingData } from '../../data/endingData';

export default function ResultPage() {
    const [showCollection, setShowCollection] =
        useState(false);

    const results =
        typeof window !== 'undefined'
            ? JSON.parse(
                  localStorage.getItem('gameEnding') || '[]'
              )
            : [];

    const handleCollectionToggle = () => {
        setShowCollection((prev) => !prev);
    };

    const handleRestart = () => {
        window.location.href = '/game'; // start 페이지로 리디렉션
    };

    return (
        <div>
            <h1>Your Results</h1>
            <button onClick={handleCollectionToggle}>
                {showCollection
                    ? 'Hide Collection'
                    : 'Show Collection'}
            </button>
            <button onClick={handleRestart}>Restart</button>

            {showCollection && (
                <div>
                    <h2>Collection</h2>
                    <ul>
                        {results.map(
                            (
                                result: string,
                                index: number
                            ) => (
                                <li key={index}>
                                    <div>
                                        <img
                                            src={
                                                endingData[
                                                    result
                                                ]?.image
                                            }
                                            alt={result}
                                            style={{
                                                width: '200px',
                                            }}
                                        />
                                        <p>
                                            {
                                                endingData[
                                                    result
                                                ]
                                                    ?.description
                                            }
                                        </p>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
