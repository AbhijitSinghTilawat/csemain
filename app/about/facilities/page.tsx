"use client";

import React from "react";

const facilitiesData = [
    "Design and Analysis of Algorithms Lab",
    "Logic Design Lab",
    "Software Engineering Lab",
    "Computer Graphics and Visualization Lab",
    "Computational Intelligence Lab",
    "Computer Networks Lab",
    "Compiler Techniques Lab",
    "Machine Learning Lab",
    "Advanced Algorithms Lab",
    "Cryptography and Network Security Lab",
    "Computer Vision Lab",
    "Natural Language Processing Lab",
    "Advanced Computer Networks Lab",
    "Artificial Intelligence Laboratory",
];

export default function FacilitiesPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center pb-4 mb-12 border-b-4 border-blue-300">
                    Research Facilities
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                    Various research and teaching laboratories in the CSE department are:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilitiesData.map((labName, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex items-center space-x-4"
                        >
                            <span className="h-10 w-10 flex items-center justify-center bg-blue-100 rounded-full">
                                <span className="h-3 w-3 bg-blue-600 rounded-full"></span>
                            </span>

                            <h2 className="text-lg font-medium text-gray-800">{labName}</h2>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
