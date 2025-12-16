import React from 'react';

const placementsData = [
    {
        title: "Placement Season 2024-2025 (Ongoing)",
        batch: "B.Tech & M.Tech",
        highestPackage: "INR 64 LPA",
        averagePackage: "INR 32.5 LPA",
        placementPercentage: "85% (Till Dec 2024)",
        topRecruiters: "Google, Microsoft, DE Shaw, Arcesium, Oracle"
    },
    {
        title: "Placement Season 2023-2024",
        batch: "B.Tech CSE",
        highestPackage: "INR 58 LPA",
        averagePackage: "INR 28.4 LPA",
        placementPercentage: "98.5%",
        topRecruiters: "Amazon, Flipkart, Goldman Sachs, MathWorks, Qualcomm"
    },
    {
        title: "Placement Season 2023-2024",
        batch: "M.Tech CSE",
        highestPackage: "INR 35 LPA",
        averagePackage: "INR 18.2 LPA",
        placementPercentage: "92%",
        topRecruiters: "Intel, AMD, Nvidia, TCS Research, Samsung R&D"
    },
    {
        title: "Placement Season 2022-2023",
        batch: "B.Tech CSE",
        highestPackage: "INR 52 LPA",
        averagePackage: "INR 26.8 LPA",
        placementPercentage: "100%",
        topRecruiters: "Salesforce, Walmart, PhonePe, Rakuten, Zomato"
    },
    {
        title: "Placement Season 2022-2023",
        batch: "MS (Research)",
        highestPackage: "INR 28 LPA",
        averagePackage: "INR 16.5 LPA",
        placementPercentage: "100%",
        topRecruiters: "IBM Research, Bosch, Mercedes Benz, JPMC"
    },
    {
        title: "Internship Season 2024",
        batch: "Pre-Final Year Students",
        highestPackage: "INR 1.5 Lakhs/Month (Stipend)",
        averagePackage: "INR 65,000/Month (Stipend)",
        placementPercentage: "",
        topRecruiters: "Google, Uber, Atlassian, Adobe, Media.net"
    }
];

export default function PlacementDetailsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Placement & Internship Highlights
            </h1>

            <div className="space-y-8">
                {placementsData.map((data, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                    >
                        <div className="flex items-start">
                            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex-1">
                                {data.title}
                            </h2>
                        </div>

                        <div className="pl-10 space-y-2">
                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Program/Batch:
                                </strong> {data.batch}
                            </p>

                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Highest Package:
                                </strong> {data.highestPackage}
                            </p>

                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Average Package:
                                </strong> {data.averagePackage}
                            </p>

                            {data.placementPercentage && (
                                <p className="text-xl text-gray-700">
                                    <strong className="text-xl font-medium text-gray-900">
                                        Placement Rate:
                                    </strong> {data.placementPercentage}
                                </p>
                            )}

                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Top Recruiters:
                                </strong> {data.topRecruiters}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}