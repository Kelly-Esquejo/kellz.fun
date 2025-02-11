/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
import InfiniteCarousel from "@/component/InfiniteCarousel";

const logos = [
    {
        src: "/logo-car-guessr.png",
        url: "/carguessr",
        alt: "Car logo",
        className: "coming-soon",
    },
    {
        src: "/logo-joke.png",
        url: "/joke",
        alt: "Joke",
        className: "coming-soon",
    },
    {
        src: "/logo-guesslogo.png",
        url: "/guessthelogo",
        alt: "Guess Logo",
        className: "coming-soon",
    },
    {
        src: "/logo-food-guessr.png",
        url: "/foodle",
        alt: "Food Guessr Logo",
        className: "coming-soon",
    },
    {
        src: "/logo-reaction.png",
        url: "/reactiontraining",
        alt: "Reaction Training Logo",
        className: "coming-soon",
    },
];

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header>
                <h1 className="">kellz.land</h1>
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {/* button for links */}
                <InfiniteCarousel items={logos} width="100px" height="100px" />
                <ul className="max-w-md space-y-1 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2 ">
                        Explore a variety of fun and interactive web games,
                        inspired by NEAL.FUN, featuring the things I enjoy and
                        love.
                    </li>
                    <li className="mb-2 ">
                        <a
                            className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold"
                            href="https://neal.fun/">
                            https://neal.fun/
                        </a>
                    </li>
                </ul>
            </main>
            <footer className="flex row-start-3 gap-6 flex-wrap items-center justify-center">
                <h3>I&apos;m Kelly. </h3>
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://www.linkedin.com/in/kelly-esquejo/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src="/window.svg"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        LinkedIn
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://github.com/Kelly-Esquejo/kellz.fun"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src="/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Go to GitHub →
                    </a>
                </footer>
            </footer>
        </div>
    );
}
