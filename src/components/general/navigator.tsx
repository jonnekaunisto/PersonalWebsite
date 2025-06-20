import Link from 'next/link';

export const Navigator = () => (
    <div className="flex mx-30 items-center justify-center text-black gap-4 text-2xl font-bold font-alumni">
        <Link href="/" className="flex justify-center items-center mt-10 px-5 h-15 rounded-lg bg-white hover:bg-green-50">
            <h1>Home</h1>
        </Link>
        <Link href="/achievements" className="flex justify-center items-center mt-10 px-5 h-15 rounded-lg bg-white hover:bg-red-50">
            <h1>Achievements</h1>
        </Link>
        <Link href="/projects" className="flex justify-center items-center mt-10 px-5 h-15 rounded-lg bg-white hover:bg-yellow-50">
            <h1>Projects</h1>
        </Link>
    </div>
);
