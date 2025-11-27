"use client";

import React from "react";
import Link from "next/link";

export default function PhDProgramPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center border-b-4 border-blue-300 pb-4 mb-10">
                    Doctor of Philosophy (PhD) Program
                </h1>

                <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">

                    <p>
                        The Department of Computer Science and Engineering, IIT Indore, offers a
                        Doctor of Philosophy (PhD) program in almost all current research areas of
                        Computer Science. The department invites <strong>highly motivated and dedicated
                            research scholars</strong> to pursue advanced research.
                    </p>

                    <p>
                        Applications for admission are generally invited in
                        <strong> March/April for the Autumn semester</strong> and
                        <strong> September/October for the Spring semester</strong>.
                    </p>

                    <p>
                        Selected students typically undergo coursework during the first two semesters
                        before starting their individual doctoral research. This period allows students
                        to explore faculty research areas and select a suitable research supervisor.
                    </p>

                    <div>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                            Areas of Research
                        </h2>
                        <p>
                            Faculty members in the Department of Computer Science and Engineering work
                            across a diverse range of cutting-edge research domains.
                            <Link href="#" className="text-blue-600 font-medium hover:underline ml-1">
                                Complete list of areas can be found here.
                            </Link>
                            <Link href="/people/faculty" className="text-blue-600 font-medium hover:underline ml-1">
                                Information about faculty members here.
                            </Link>
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                            Admission Procedure
                        </h2>
                        <p>
                            The selection process includes a <strong>written test followed by an interview</strong>.
                            The written test syllabus broadly follows the GATE syllabus for Computer Science and IT.
                            Final selection is based on performance in both stages.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                            Applications
                        </h2>
                        <p>
                            IIT Indore invites applications for admission to its Regular PhD Program
                            multiple times throughout the year.
                            <Link href="https://academic.iiti.ac.in:8443/nregistration.jsp" className="text-blue-600 font-medium hover:underline ml-1">
                                For more details, click here.
                            </Link>
                        </p>
                    </div>

                </div>

            </section>
        </main>
    );
}
