"use client";

import React from "react";
import Link from "next/link";

export default function ProspectivePhDPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center pb-4 mb-12 border-b-4 border-blue-300">
                    PhD Program Admissions
                </h1>

                <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">

                    <p>
                        The Department of Computer Science and Engineering, IIT Indore offers a
                        Doctor of Philosophy (PhD) program in almost all major areas of Computer Science.
                        The department invites <strong>highly motivated and dedicated research scholars</strong>
                        to apply for this program.
                    </p>

                    <p>
                        Applications are usually invited in <strong>March/April for the Autumn semester</strong> and
                        <strong> September/October for the Spring semester</strong>.
                    </p>

                    <p>
                        Selected PhD scholars must complete coursework during the first two semesters.
                        During this period, scholars get an opportunity to explore ongoing research within
                        the department and choose a suitable supervisor aligned with their research interests.
                    </p>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                            Areas of Research
                        </h2>
                        <p>
                            Faculty members of the Department of Computer Science and Engineering work in
                            a variety of cutting-edge research areas.
                            <Link href="/research/areas" className="text-blue-600 font-medium hover:underline ml-1">
                                View full list of research areas.
                            </Link>
                            <Link href="/people/faculty" className="text-blue-600 font-medium hover:underline ml-1">
                                View faculty profiles here.
                            </Link>
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                            Admission Procedure
                        </h2>
                        <p>
                            The selection process consists of a <strong>written test</strong> followed by an
                            <strong> interview</strong>. The written test syllabus broadly aligns with the GATE
                            syllabus for Computer Science & Information Technology. Final selection is based on
                            performance in both stages.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                            Applications
                        </h2>
                        <p>
                            IIT Indore invites applications for its PhD program multiple times a year.
                            <Link href="#" className="text-blue-600 font-medium hover:underline ml-1">
                                Click here for detailed instructions and announcements.
                            </Link>
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}
