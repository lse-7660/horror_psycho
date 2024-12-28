import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="h-screen ">
            <div>
                <h1>
                    <span className="sr-only">
                        Horror Psycho 100
                    </span>
                    <span>모브사이코 100 팬게임</span>
                </h1>

                <Link href="/game">
                    <button>Click to start</button>
                </Link>
            </div>
            <img
                src="/images/pattern/image.png"
                alt="Background pattern"
                className="absolute -z-50 inset-0 w-full h-full object-cover"
            />
        </div>
    );
}
