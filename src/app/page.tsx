import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1 className="sr-only">Horror Psycho 100</h1>
            <Image
                src="/images/pattern/image.png"
                alt="background_HP100"
                width={500}
                height={500}
            />
            <Link href="/game">
                <button>Click to start</button>
            </Link>
        </div>
    );
}
