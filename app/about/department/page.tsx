"use client";

import React from "react";
import Link from "next/link";

export default function DepartmentPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center pb-4 mb-12 border-b-4 border-blue-300">
                    Department of CSE
                </h1>

                <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">

                    <p>
                        The Department of Computer Science and Engineering (CSE) was established in
                        <strong> July 2009</strong>. The department offers Bachelor of Technology (B.Tech),
                        Master of Science (M.S.) by Research, and Doctor of Philosophy (Ph.D.) programs.
                        Since <strong>2023</strong>, the department also offers a Master of Technology (M.Tech) program.
                    </p>

                    <p>
                        The department follows a modern teaching approach with ample academic freedom
                        that encourages students to innovate and learn.
                        <strong> State-of-the-art software and hardware facilities</strong> support both teaching
                        and research, enabling students to complete high-quality B.Tech, M.S., and Ph.D.
                        research projects.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                        <p className="font-medium text-blue-900">
                            The department benefits greatly from its location in Indore, a rapidly growing
                            <strong> IT hub</strong> in central India. Companies such as CSC and Impetus have a strong
                            presence here, while major firms including TCS, Infosys, and others have also
                            established operations in the city.
                        </p>
                    </div>

                    <p>
                        This creates excellent opportunities for industry–academia collaboration.
                        <Link
                            href="/research/areas"
                            className="text-blue-600 font-medium hover:underline ml-1"
                        >
                            Explore research areas here.
                        </Link>
                        <Link
                            href="/people/faculty"
                            className="text-blue-600 font-medium hover:underline ml-1"
                        >
                            Faculty details can be found here.
                        </Link>
                    </p>

                </div>
            </section>
        </main>
    );
}
