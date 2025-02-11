"use client";
import React, { useState } from "react";

interface SingleJoke {
    type: "single";
    joke: string;
}

interface TwoPartJoke {
    type: "twopart";
    setup: string;
    delivery: string;
}

type Joke = SingleJoke | TwoPartJoke;

const JokeGenerator: React.FC = () => {
    const [joke, setJoke] = useState<Joke | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchJoke = async () => {
        setIsLoading(true);
        try {
            //https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit
            //https://v2.jokeapi.dev/joke/Any
            const response = await fetch("https://v2.jokeapi.dev/joke/Any");
            const data: Joke = await response.json();
            setJoke(data);
        } catch (error) {
            console.error("Error fetching joke:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="h-screen w-screen flex justify-center items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] "
            style={{
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            {/* Glass morphism */}
            <div className="h-[400px] w-[400px] flex flex-col justify-between items-center border-solid border-[2px] border-[#b2a293] p-12 backdrop-blur-[20px] bg-slate-600 bg-opacity-30 ">
                <div className="text-center min-h-[80px] min-w-[80px]">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : joke ? (
                        joke.type === "twopart" ? (
                            <>
                                <div>{joke.setup}</div>
                                <div>{joke.delivery}</div>
                            </>
                        ) : (
                            <div>{joke.joke}</div>
                        )
                    ) : null}
                </div>
                {/* Button stays centered and retains normal size */}
                <button
                    onClick={fetchJoke}
                    className="font-bold relative rounded border-2 border-black bg-gray-200 py-1 text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                    Click Me!
                </button>
            </div>
        </div>
    );
};

export default JokeGenerator;
