import React from 'react';
import Link from 'next/link';

// आप इस लिस्ट को अपने Navbar के हिसाब से रख सकते हैं
const btechBatches = [
    { year: '2025' },
    { year: '2024' },
    { year: '2023' },
    { year: '2022' },
    { year: '2021' },
    { year: '2020' },
    { year: '2019' },
    { year: '2018' },
    { year: '2017' },
    { year: '2016' },
];

export default function BTechMainPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-8">
                B.Tech Students
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Please select a batch (year) to view the list of students.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {btechBatches.map((batch) => (
                    <Link
                        key={batch.year}
                        href={`/people/btech-students/${batch.year}`}
                        className="block p-4 bg-blue-100 text-blue-800 font-semibold rounded-lg text-center hover:bg-blue-200 transition-colors"
                    >
                        Batch of {batch.year}
                    </Link>
                ))}
            </div>
        </div>
    );
}