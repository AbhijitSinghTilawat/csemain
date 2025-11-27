"use client";

import React from "react";
import { Trophy } from "lucide-react";
import Link from "next/link";

const achievementsData = [
    "Huge congratulations to Niyati Totala (CE), Neel Kalpesh kumar Parikh (CSE) and Bhoomil Gohel (CSE) for winning the gold medal at the Global Best M-GOV Awards 2023 during the World Government Summit. They created Blockbill, a blockchain-based receipt generation app providing users digital receipts.",
    "Ms. Preeti Jha, Ph.D. Student of CSE, secured the inaugural VPP Menon Gold Medal for the best Ph.D. dissertation work by a female student.",
    "Graduating student, Mr. Shah Miten Haresh, of CSE will receive The Institute Silver Medal in the 10th Convocation of IIT Indore.",
    "Graduating students Mr. Akshay Prakash and Mr. Gaurav Kumar of CSE will receive The Best BTech Project (BTP) Award in the 10th Convocation.",
    "Graduating student, Mr. Kasturi Ajit Sharma, receives The Institute Silver Medal in the 2021 Convocation.",
    "THE World University Rankings 2022: IIT Indore ranked 201–250 globally and 2nd in India in Computer Science.",
    "Dr. Aruna Tiwari represented India as an AI expert in the Internationalist Podcast series on the impact of the digital revolution on higher education, organized by the Association of Commonwealth Universities, UK.",
    "THE World University Rankings 2021: IIT Indore ranked 251–300 globally and 2nd in India in Computer Science.",
    "Team ByteBandits secured 1st place in India and 8th globally in CSAW CTF 2020 (Finals).",
    "Mr. Saptarshi Ghosh received The President of India Gold Medal in the 2020 Convocation.",
    "Ms. Arushi Jain received The Institute Silver Medal in the 2020 Convocation.",
    "Team FenmentTree of CSE made it to the World Finals of ICPC 2020.",
    "Team ByteBandits secured 1st place in India and 9th globally in CSAW CTF 2019.",
    "Mr. Rahul Choudhary received The President of India Gold Medal in the 2019 Convocation.",
    "Ms. Apoorva Joshi received The Institute Silver Medal in the 2019 Convocation.",
    "Mr. Vinit Haresh Shah received The Institute Silver Medal in the 2019 Convocation.",
    "Mr. E Ranjith Kumar and Mr. Prajwal Chandra Nalla received The Best BTech Project (BTP) Award in 2019.",
    "THE World University Rankings 2020: IIT Indore ranked 251–300 in Computer Science.",
    "Mr. Vedaanta Agarwalla received The President of India Gold Medal in the 6th Convocation.",
    "Mr. Varun Vinayak Joglekar received the Silver Medal in the 6th Convocation.",
    "IIT Indore's ByteBandits secured 2nd in India and 16th globally at CSAW CTF 2018.",
    "Mr. Aishwary Gagrani received the Silver Medal in the 5th Convocation.",
    "Mr. Chaware Ketan Uday received The President of India Gold Medal in the 5th Convocation."
];

export default function AchievementsPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center pb-4 mb-12 border-b-4 border-blue-300">
                    CSE Achievements
                </h1>

                <div className="space-y-8">
                    {achievementsData.map((achievement, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 
              transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="flex items-start space-x-4">
                                <Trophy className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                                    {achievement}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
}
