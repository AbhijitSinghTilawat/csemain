"use client";

import React from "react";
import Link from "next/link";

export default function MTechProgramPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center border-b-4 border-blue-300 pb-4 mb-10">
          M.Tech. Program
        </h1>

        <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">

          <p>
            The M.Tech. (Master of Technology) program in Computer Science and Engineering (CSE)
            offers an in-depth exploration of advanced topics in computer science, blending
            theoretical knowledge with practical skills.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Curriculum Highlights:
            </h2>
            <p className="mb-4">
              Students engage in a rigorous curriculum that includes both coursework and thesis projects,
              covering key areas such as:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Algorithms</li>
              <li>Software Development</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Cybersecurity</li>
              <li>Networking</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Program Objectives:
            </h2>
            <p className="mb-4">This program is designed to:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Prepare graduates to tackle complex challenges in industrial environments.</li>
              <li>Foster further academic pursuits and research opportunities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Learning Approach:
            </h2>
            <p>
              By emphasizing both rigorous theoretical foundations and hands-on experience,
              the M.Tech. program equips students to excel in diverse roles within industry
              or academia. The integration of emerging technologies ensures that graduates
              are well-prepared for the evolving landscape of computer science.
            </p>
          </div>

          <div className="text-center pt-8">
            <Link
              href="https://academic.iiti.ac.in:8443/nregistrationmtech.jsp"
              className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold 
              rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300"
            >
              Click here for more details
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}
