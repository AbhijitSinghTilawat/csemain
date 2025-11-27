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
            <div className="w-full px-2 sm:px-4">

                <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-12 text-center">
                    How To Reach?
                </h1>

                {/* Responsive grid: 1 column on xs, 2 on sm, 3 on md, 4 on lg+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">

                    {reachOptions.map((option, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-transform transform hover:-translate-y-1"
                            aria-labelledby={`reach-${index}-title`}
                        >

                            <header className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-6">
                                <h2 id={`reach-${index}-title`} className="text-xl sm:text-2xl font-extrabold text-center leading-tight">
                                    {option.title}
                                </h2>
                            </header>


                            <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col">
                                <p className="text-gray-700 text-sm sm:text-base">
                                    <strong className="font-semibold text-gray-900">Distance:</strong> {option.distance} <span className="mx-2">•</span> <strong className="font-semibold text-gray-900">Travel time:</strong> {option.time}
                                </p>

                                <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                                    {option.options.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                                    <strong className="font-semibold text-gray-900">Note:</strong> {option.note}
                                </p>

                                {/* Push map section to bottom so content flows and cards have consistent height */}
                                <div className="mt-auto" />
                            </div>


                            <div className="p-4 bg-gray-50 border-t border-gray-100">
                                <a
                                    href={option.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open map for ${option.title}`}
                                >
                                    {/* Next/Image - make image responsive and cropped to a consistent height */}
                                    <div className="w-full h-48 relative rounded-md overflow-hidden">
                                        <Image
                                            src={option.mapImage}
                                            alt={`Map for ${option.title}`}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                            className="block"
                                        />
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
