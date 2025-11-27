"use client";

import React from "react";

export default function ProspectiveMSPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center pb-4 mb-12 border-b-4 border-blue-300">
                    MS Program Admissions
                </h1>

                <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">

                    <p>
                        MS Research program of the Department of Computer Science &
                        Engineering is a <strong>two-year research-oriented Master's program</strong>.
                        The first two semesters include coursework, while the last two semesters
                        are fully devoted to thesis work.
                    </p>

                    <p>
                        Candidates with a BTech/BE degree in Computer Science and Engineering (CSE)
                        or Information Technology (IT) and having a
                        <strong> valid GATE score in CSE/IT</strong> are eligible to apply.
                        IIT graduates with <strong>8.0 or higher CPI/CGPA</strong> are exempted from the GATE requirement.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                        <p className="font-semibold text-blue-900 text-lg">
                            Applications for the MS Research program are generally invited in
                            <strong> March/April</strong>. Details are published on the CSE Department website
                            and the Academic webpage of IIT Indore.
                        </p>
                    </div>

                    <p>
                        For more details, candidates may contact:
                        <br />
                        Program Coordinator, MS Research, CSE — <strong>mscse@iiti.ac.in</strong>
                        <br />
                        Head, Department of CSE — <strong>hodcse@iiti.ac.in</strong>
                    </p>
                </div>

            </section>
        </main>
    );
}
