import React from 'react';
import Image from 'next/image';

const reachOptions = [
    {
        title: "From Indore Railway Station",
        distance: "Approximately 24.4 km",
        time: "Around 50 minutes",
        options: [
            "Book Taxi/Auto (fare approx. INR 350–400) up to IIT Indore, Simrol Campus"
        ],
        note: "Ask the driver to follow the route via Tejaji Nagar, which is the shortest route to IIT Indore from Indore Railway Station.",
        mapImage: "/maps/railway_map.png",
        mapLink: "https://tinyurl.com/Rail-station-to-IIT-Indore"
    },
    {
        title: "From Indore Airport",
        distance: "Approximately 35.3 km",
        time: "Around 1 hour 6 minutes",
        options: [
            "Book Taxi/Auto (fare approx. INR 500–600) up to IIT Indore, Simrol Campus"
        ],
        note: "Ask the driver to use the Tejaji Nagar route, the shortest path from the airport to IIT Indore.",
        mapImage: "/maps/airport_map.png",
        mapLink: "http://tinyurl.com/Airport-to-IIT-Indore"
    },
    {
        title: "From Indore Bus Stand",
        distance: "Approximately 24.4 km",
        time: "Around 50 minutes",
        options: [
            "Book Taxi/Auto (fare approx. INR 350–400) up to IIT Indore, Simrol Campus"
        ],
        note: "Ask the driver to follow the route via Tejaji Nagar, which is the shortest route to IIT Indore from Indore Railway Station.",
        mapImage: "/maps/railway_map.png",
        mapLink: "https://tinyurl.com/Rail-station-to-IIT-Indore"
    },
    {
        title: "From Chartered Bus via Bhopal",
        distance: "Approximately 200 km",
        time: "Around 3 hours 30 minutes",
        options: [
            "Book Bus/Shared Taxi (fare approx. INR 350–400) from Chartered Bus Point, Bhopal"
        ],
        note: "Ask the driver to follow the Tejaji Nagar route to reach IIT Indore, Simrol from AICTSL Main Office, opposite MGM College, Indore.",
        mapImage: "/maps/bhopal_map.png",
        mapLink: "https://tinyurl.com/y7k9wpes"
    }
];

export default function HowToReachPage() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="w-full px-4 sm:px-6 lg:px-8">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center">
                    How To Reach?
                </h1>

                {/* Responsive grid: 1 col (xs), 2 cols (sm), 3 cols (md), 4 cols (lg+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">

                    {reachOptions.map((option, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            aria-labelledby={`reach-${index}-title`}
                        >
                            {/* Header */}
                            <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-5">
                                <h2 id={`reach-${index}-title`} className="text-lg sm:text-xl font-bold text-center leading-tight">
                                    {option.title}
                                </h2>
                            </header>

                            {/* Body Content */}
                            <div className="p-5 sm:p-6 space-y-4 flex-grow flex flex-col text-sm sm:text-base text-gray-700">
                                <p>
                                    <strong className="font-semibold text-gray-900">Distance:</strong> {option.distance}
                                    <br className="hidden sm:block" />
                                    <span className="sm:hidden mx-2">•</span>
                                    <strong className="font-semibold text-gray-900">Time:</strong> {option.time}
                                </p>

                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    {option.options.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <p className="mt-2">
                                    <strong className="font-semibold text-gray-900">Note:</strong> {option.note}
                                </p>

                                {/* Spacer to push map to bottom */}
                                <div className="mt-auto" />
                            </div>

                            {/* Map Image Section */}
                            <div className="p-4 bg-gray-50 border-t border-gray-100">
                                <a
                                    href={option.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open map for ${option.title}`}
                                    className="block group"
                                >
                                    {/* FIX: Changed aspect ratio to 'aspect-[4/3]' (taller box) 
                                        to allow the map to be bigger.
                                        
                                        Using 'object-cover' ensures it fills the box completely.
                                        Because the box is now taller, less vertical cropping will occur.
                                    */}
                                    <div className="w-full relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-gray-100 group-hover:border-blue-400 transition-colors">
                                        <Image
                                            src={option.mapImage}
                                            alt={`Map for ${option.title}`}
                                            fill
                                            // Using cover now that the container is taller
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                        
                                        {/* Optional: 'Click to open' overlay on hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                            <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm transition-opacity duration-300">
                                                Open Map
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </div>
    );
}