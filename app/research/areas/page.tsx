"use client";

import React from "react";

const researchGroups = [
    {
        title: "Algorithms and Theoretical Computer Science",
        members: [
            {
                areas:
                    "Applied Machine Learning, Bioinformatics, Health Informatics, Economics of Networks, Computational Optimization, Numerical Linear Algebra.",
                name: "Prof. Kapil Ahuja",
            },
            {
                areas:
                    "Algorithmic Graph Theory, Computational Complexity, Determinant vs. Permanent, Expanders and Ramanujan Graphs.",
                name: "Dr. Ranveer Singh",
            },
            {
                areas: "Services Computing, AI, ML, Logic and Automated Reasoning",
                name: "Dr. Soumi Chattopadhyay",
            },
            {
                areas: "Logic and Theoretical Computer Science",
                name: "Dr. Sasank Mouli",
            },
            {
                areas:
                    "Parameterized/Approximation/Exact Algorithms, Graph Theory and Algorithms, Kernelization",
                name: "Dr. Lawqueen Kanesh",
            },
        ],
    },
    {
        title: "Big Data Analytics and Generative AI",
        members: [
            {
                areas: "ML, DL, Soft-computing, Big Data, Data Mining",
                name: "Prof. Aruna Tiwari",
            },
            {
                areas:
                    "NLP, Social Network Analysis, DL, Data Mining, Large Language Models (LLMs)",
                name: "Dr. Nagendra Kumar",
            },
            {
                areas: "NLP, Text Mining, ML, DL, Data Mining",
                name: "Dr. Chandresh Kumar Maurya",
            },
            {
                areas: "Machine learning, Deep learning, Big Data",
                name: "Prof. Surya Prakash",
            },
        ],
    },
    {
        title: "Cyber Physical Systems and Embedded Systems",
        members: [
            {
                areas: "Service-Oriented Systems, Dynamic Systems, Digital Chip",
                name: "Prof. Abhishek Srivastava",
            },
            {
                areas:
                    "CAD-VLSI, EDA, High Level Synthesis, IP core Security, Hardware Trojan",
                name: "Prof. Anirban Sengupta",
            },
            {
                areas: "Embedded Systems (Cyber-physical systems, IoT)",
                name: "Dr. Gourinath Banda",
            },
            {
                areas: "Computer Networks, Network Security, System Security",
                name: "Prof. Neminath Hubballi",
            },
            {
                areas:
                    "Hardware Security, Side-channel Analysis, Cryptography, Digital VLSI Design",
                name: "Dr. Bodhisatwa Mazumdar",
            },
        ],
    },
    {
        title: "Hardware Security and Trust",
        members: [
            {
                areas:
                    "CAD-VLSI, EDA, High Level Synthesis, IP core Security, Hardware Trojan, Fault Security, Digital Watermark in Digital Chip.",
                name: "Prof. Anirban Sengupta",
            },
            {
                areas:
                    "Embedded Systems (Cyber-physical systems, IoT, Program Transformation and Generation.",
                name: "Dr. Gourinath Banda",
            },
            {
                areas:
                    "Hardware Security, Side-channel Analysis, Cryptography, Digital VLSI Design",
                name: "Dr. Bodhisatwa Mazumdar",
            },
        ],
    },
    {
        title: "Systems and Networking",
        members: [
            {
                areas: "Computer Networks, Network Security, System Security",
                name: "Prof. Neminath Hubballi",
            },
            {
                areas: "Computer Networks, Network Security, System Security.",
                name: "Dr. Ayan Mondal",
            },
            {
                areas:
                    "Hardware Security, Side-channel Analysis, Cryptography, Digital VLSI Design",
                name: "Dr. Bodhisatwa Mazumdar",
            },
            {
                areas:
                    "Software Defined Networking, Network Programmability, Datacentre Networks",
                name: "Dr. Aniruddha S. Kushwaha",
            },
            {
                areas:
                    "Blockchain, Data privacy and security, Distributed Systems Security",
                name: "Dr. Shubhra Mazumdar",
            },
        ],
    },
    {
        title: "Image Processing and Computer Vision",
        members: [
            {
                areas: "Pattern Recognition, Image Processing",
                name: "Prof. Surya Prakash",
            },
            {
                areas:
                    "Computer Vision, DL, Image Processing, Medical Imaging and its analysis, Hyperspectral Image analysis, Audio Processing, NLP",
                name: "Dr. Puneet Gupta",
            },
            {
                areas: "Service-Oriented Systems, Dynamic Systems, Digital Chip",
                name: "Prof. Abhishek Srivastava",
            },
            {
                areas:
                    "Human Computer Interaction, Computer Graphics, Image Processing",
                name: "Prof. Somnath Dey",
            },
            {
                areas: "Services Computing, AI, ML",
                name: "Dr. Soumi Chattopadhyay",
            },
        ],
    },
    {
        title: "Artificial Intelligence and Machine Learning",
        members: [
            {
                areas: "Service-Oriented Systems, Dynamic Systems, Digital Chip",
                name: "Prof. Abhishek Srivastava",
            },
            {
                areas: "ML, DL, Soft-computing, Big Data, Data Mining",
                name: "Prof. Aruna Tiwari",
            },
            {
                areas:
                    "Machine learning, Deep learning, Pattern Recognition, Big Data, Image Processing",
                name: "Prof. Surya Prakash",
            },
            {
                areas:
                    "Human Computer Interaction, Computer Graphics, Image Processing",
                name: "Prof. Somnath Dey",
            },
            {
                areas: "AI, ML, Soft Computing",
                name: "Prof. Kapil Ahuja",
            },
            {
                areas: "Computer Vision, DL, Image Processing",
                name: "Dr. Puneet Gupta",
            },
            {
                areas:
                    "NLP, Social Network Analysis, DL, Data Mining",
                name: "Dr. Nagendra Kumar",
            },
            {
                areas:
                    "NLP, Text Mining, ML, DL, Data Mining",
                name: "Dr. Chandresh Kumar Maurya",
            },
        ],
    },
];

export default function ResearchAreasPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 text-center pb-4 mb-12 border-b-4 border-blue-300">
                    Research Areas
                </h1>

                <div className="space-y-16">
                    {researchGroups.map((group) => (
                        <div key={group.title}>
                            <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                                {group.title}
                            </h2>

                            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-blue-900">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-lg font-bold text-white uppercase tracking-wider">
                                                Research Areas
                                            </th>
                                            <th className="px-6 py-4 text-left text-lg font-bold text-white uppercase tracking-wider">
                                                Faculty Members
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {group.members.map((member) => (
                                            <tr
                                                key={member.name}
                                                className="hover:bg-blue-50 transition-colors"
                                            >
                                                <td className="px-6 py-4 text-xl text-gray-700">
                                                    {member.areas}
                                                </td>
                                                <td className="px-6 py-4 text-xl font-medium text-gray-900 whitespace-nowrap">
                                                    {member.name}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
