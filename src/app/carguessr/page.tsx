"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Input from "@/component/Input";
// import ZoomableImage from "@/component/ZoomableImage";

/* 
    From 59 car brands
    Pull images from Google Drive
    Folder Structure:
        Car Images Folder
            Car Brand Name Folders
                Model Folders
                    Trim.Year jpeg

    Example:
        Car Images
            Toyota
                86
                    2017.jpeg
            Dodge
                Charger
                    Scatpack.2022.jpeg
*/

const carImages = [
    "/toyota-86-2016.png",
    "/shelby427Cobra-1966.png",
    "/HONDA-CIVIC-TYPE-R-CAR.png",
];

const CarGuessr: React.FC = () => {
    const [make, setMake] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const [year, setYear] = useState<string>("");

    const [error, setError] = useState<string | null>(null);

    const [carImage, setCarImage] = useState<string>(carImages[0]);

    const getRandomCar = () => {
        setCarImage(carImages[Math.floor(Math.random() * carImages.length)]);
    };

    const handleMakeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMake(e.target.value);
    };
    const handleModelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setModel(e.target.value);
    };
    const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    };

    // Validate form inputs before proceeding
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!make || !model || !year || isNaN(Number(year))) {
            setError("Please provide valid values for all fields.");
            return;
        }
        setError(null); // Clear error if inputs are valid
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full gap-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Car Guessr
            </h1>
            {/* Processed Image with Hidden Logos */}
            <div className="overflow-hidden">
                <Image
                    className="w-[900px] h-[600px] items-center justify-center object-contain"
                    src={carImage}
                    alt="Car"
                    width={900}
                    height={600}
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <form className="w-full flex gap-4 items-center justify-center">
                    <Input
                        labelClassName="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2"
                        inputClassName="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        label="Make"
                        value={make}
                        name="make"
                        error={!!error}
                        onChange={handleMakeChange}
                        placeholder="Shelby"
                    />
                    <Input
                        labelClassName="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2"
                        inputClassName="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        label="Model"
                        value={model}
                        name="model"
                        error={!!error}
                        onChange={handleModelChange}
                        placeholder="427 Cobra"
                    />

                    <Input
                        labelClassName="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2"
                        inputClassName="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        label="Year"
                        value={year}
                        name="year"
                        error={!!error}
                        onChange={handleYearChange}
                        placeholder="1966"
                    />
                </form>
                <footer className="">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        type="submit"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={getRandomCar}>
                        New Car
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default CarGuessr;
