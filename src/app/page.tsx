import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to the Text Adventure Game</h1>
            <Link href="/game">
                <button>Start Game</button>
            </Link>
        </div>
    );
}
