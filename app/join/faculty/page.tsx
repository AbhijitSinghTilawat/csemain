"use client";

import React from "react";
import { Star, CheckCircle, Send } from "lucide-react";

export default function ProspectiveFacultyPage() {
    const attractions = [
        "Computer Science and Engineering attracts some of the most highly ranked JEE candidates to its undergraduate programme",
        "The department has a strong thrust towards the involvement of undergraduate students in its research programmes",
        "Faculty members have complete freedom to tailor courses as and how they deem appropriate",
        "The department embraces the Open Sources movement and its laboratories conform to the use of Open Source Technologies for most applications",
        "The department houses some of the most advanced computing facilities including the best",
        "Faculty members in the discipline come with research experience behind them from the best institutions in India and abroad",
        "The department is proud of a very strong programming culture amongst its students that is in ample display in various hackathons, and prestigious programming contests like the ACM-ICPC",
        "The camaraderie between faculty members in the discipline is very positive and informal and makes for a great experience",
    ];

    const benefits = [
        "Attractive start-up grants with no upper limit restrictions.",
        "Seperate budget for procuring high end research.",
        "Faculty excellence award for exceptional teaching, research, institute service and outreach.",
        "Research funded post doctoral fellow for research production.",
    ];

    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 text-center pb-4 mb-12 border-b-4 border-blue-300">
                    Faculty Recruitment @ CSE-IITI
                </h1>

                <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                    <p>
                        The Department of Computer Science and Engineering, IIT Indore solicits
                        applications from <strong>highly motivated and competent candidates</strong> for
                        faculty positions at various levels. The department adopts a modern approach
                        to teaching wherein students are rendered adequate academic freedom to innovate
                        and learn in the process.
                    </p>

                    <p>
                        State of the art facilities including the latest software and advanced hardware
                        are available in various laboratories for both teaching and research. This
                        enables effective implementation of major B.Tech projects and verification &
                        validation of research results.
                    </p>

                    <p>
                        Being a part of an emerging and relatively new institute equipped with a strong
                        research environment, the Department of Computer Science and Engineering at IIT
                        Indore provides a <strong>unique platform</strong> for faculty members and students to
                        explore both fundamental and applied research.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-6 flex items-center">
                            <Star className="h-7 w-7 text-yellow-500 mr-3" />
                            Attractions
                        </h2>

                        <ul className="space-y-4">
                            {attractions.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-6 flex items-center">
                            <CheckCircle className="h-7 w-7 text-green-600 mr-3" />
                            Benefits
                        </h2>

                        <ul className="space-y-4">
                            {benefits.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
                        Application Procedure
                    </h2>

                    <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-lg text-center">
                        <p className="text-lg text-gray-800 mb-4">
                            For any other queries or to apply, please send your mail/updated CV to:
                        </p>

                        <a
                            href="mailto:hodcse@iiti.ac.in"
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300"
                        >
                            <Send className="h-5 w-5 mr-3" />
                            hodcse@iiti.ac.in
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
