"use client";

import React from "react";

export default function MSProgramPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">

            {/* Container Full Responsive */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
                    text-center border-b-4 border-blue-300 pb-4 mb-10">
                    MS Program
                </h1>

                {/* Content */}
                <div className="text-base sm:text-lg md:text-xl text-gray-700 space-y-7 leading-relaxed">

                    <p>
                        The MS Research program of the Department of Computer Science & Engineering
                        is a <strong>two-year research-oriented Master's program</strong>. The first two semesters
                        include course work, while the last two semesters are fully devoted to thesis work.
                    </p>

                    <p>
                        Candidates having a BTech/BE degree in CSE or IT with a
                        <strong> valid GATE score in CSE/IT</strong> are eligible to apply.
                        IIT graduates with a <strong>CGPA of 8.0+</strong> are exempted from GATE.
                    </p>

                    {/* Highlight Box */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <p className="font-semibold text-blue-900">
                            Applications for the MS Research program are generally invited
                            in <strong>March / April</strong>. Notifications are posted on the CSE Department website
                            and the Academic page of IIT Indore.
                        </p>
                    </div>

                    <p>
                        For more details, candidates may contact:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Program Coordinator (MS Research) –
                            <a href="mailto:pc-mscse@iiti.ac.in" className="text-blue-700 hover:underline">
                                pc-mscse@iiti.ac.in
                            </a>
                        </li>
                        <li>
                            Head, Department of CSE –
                            <a href="mailto:hodcse@iiti.ac.in" className="text-blue-700 hover:underline">
                                hodcse@iiti.ac.in
                            </a>
                        </li>
                    </ul>

                </div>
            </section>
        </main>
    );
}
