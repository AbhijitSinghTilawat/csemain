"use client";

import React from 'react';
import Image from 'next/image';
import { allStudentsData } from '@/lib/studentData';

export default async function BTechYearPage(props: { params: Promise<{ year: string }> }) {
    const { year } = await props.params;
    const yearKey = year as keyof typeof allStudentsData;
    const students = allStudentsData[yearKey] || [];

    return (
        // Full-screen, no padding, no max-width container
        <div className="w-full min-h-screen py-12 bg-gray-50">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10 text-center">
                {year} BTech Students
            </h1>

            {students.length > 0 ? (
                <div
                    className="
                        grid
                        grid-cols-2
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-6
                        xl:grid-cols-7
                        2xl:grid-cols-8
                        gap-4 sm:gap-6 lg:gap-8
                        px-2 sm:px-4
                    "
                >
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden
                                       border border-gray-200 transform transition-transform duration-300 hover:scale-105
                                       w-full max-w-[200px] mx-auto"
                        >
                            {/* IMAGE */}
                            <div className="flex flex-col items-center justify-center pt-6 pb-4 bg-white">
                                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue-200 shadow-md">
                                    <Image
                                        src={student.imageUrl}
                                        alt={`Photo of ${student.name}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* TEXT */}
                            <div className="bg-blue-900 text-white px-3 py-3 text-center
                                            flex flex-col justify-center gap-1 min-h-[90px]">
                                <h3 className="font-bold text-sm sm:text-[0.9rem] uppercase tracking-wide leading-tight">
                                    {student.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-blue-200 font-mono">
                                    {student.id}
                                </p>
                            </div>

                            <div className="h-3 bg-white" />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-lg text-gray-700 text-center mt-10">
                    Student data for the batch of {year} is not yet available.
                </p>
            )}
        </div>
    );
}
