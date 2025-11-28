

import React from 'react';


const fellowshipsData = [
    {
        title: "Efficient Solution of Linear Systems arising in Non-Parametric Model Reduction of Second Order Systems.",
        pi: "Dr. Kapil Ahuja",
        agency: "IIT-TU9 Faculty Exchange Program of DAAD (German Academic Exchange Service).",
        duration: "Visit to TU Braunschweig for month of June 2014 (Approved on 19th March 2014).",
        funding: "2200 Euros"
    },
    {
        title: "Reducing parametrized complexities of determinant and permanents",
        pi: "Dr. Ranveer Singh",
        agency: "DST",
        duration: "December 2020 - December 2025",
        funding: "INR 3500000"
    }
];

export default function FellowshipsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Fellowships
            </h1>


            <div className="space-y-8">
                {fellowshipsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                    >

                        <div className="flex items-start">
                           
                            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex-1">
                                {project.title}
                            </h2>
                        </div>


                        <div className="pl-10 space-y-2">
                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Project Investigator:
                                </strong> {project.pi}
                            </p>

                            {project.agency && (
                                <p className="text-xl text-gray-700">
                                    <strong className="text-xl font-medium text-gray-900">
                                        Sponsoring Agency:
                                    </strong> {project.agency}
                                </p>
                            )}

                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Duration:
                                </strong>

                                <span dangerouslySetInnerHTML={{ __html: project.duration }} />
                            </p>

                            {project.funding && (
                                <p className="text-xl text-gray-700">
                                    <strong className="text-xl font-medium text-gray-900">
                                        Funding Amount:
                                    </strong> {project.funding}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}