'use client';

export default function ResultsPage() {
  const results = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('gameResults') || '[]')
    : [];

  return (
    <div>
      <h1>Your Results</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

