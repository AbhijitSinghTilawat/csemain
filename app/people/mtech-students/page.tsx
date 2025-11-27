"use client";
import React from "react";
import Link from "next/link";

const mtechBatches = [{ year: "2025" }, { year: "2024" }];

export default function MTechMainPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">M.Tech Students</h1>
      <p className="text-lg text-gray-700 mb-6">Please select a batch (year) to view the list of M.Tech students.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mtechBatches.map((batch) => (
          <Link
            key={batch.year}
            href={`/people/mtech-students/${batch.year}`}
            className="block p-4 bg-blue-100 text-blue-800 font-semibold rounded-lg text-center hover:bg-blue-200 transition-colors"
          >
            Batch of {batch.year}
          </Link>
        ))}
      </div>
    </div>
  );
}