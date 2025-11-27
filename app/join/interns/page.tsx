"use client";

import React from "react";
import Link from "next/link";

export default function InternsPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center pb-4 mb-12 border-b-4 border-blue-300">
                    Internship @ CSE-IITI
                </h1>

                <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">

                    <p>
                        The Department of Computer Science and Engineering hosts a significant
                        number of interns every summer and winter. The department also offers
                        semester-long internships for undergraduate and graduate students.
                    </p>

                    <p>
                        Interns at IIT Indore get the opportunity to work on
                        <strong> cutting-edge research problems</strong>. Many interns publish their
                        work in reputed international conferences and journals during or after
                        their internship.
                    </p>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                            Application Procedure
                        </h2>

                        <p>
                            Interns are selected directly by individual faculty members.
                            Interested applicants should explore the research profiles of faculty
                            members and <strong>contact them directly</strong> regarding available
                            internship openings in their research groups.
                        </p>

                        <div className="mt-4">
                            <Link
                                href="/people/faculty"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Click here to view faculty profiles
                            </Link>
                        </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm mt-8">
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                            Accommodation
                        </h2>
                        <p>
                            Hostel accommodation for interns is available on campus
                            (subject to availability) on a paid basis.
                            Accommodation can be arranged upon recommendation by the supervising
                            faculty member.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}
