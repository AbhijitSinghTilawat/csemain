import React from 'react';


const projectsData = [
    {
        title: "Cyber-Attack Detection and Impact Study in Energy Management System.",
        pi: "Prof. Neminath Hubballi",
        agency: "SERB",
        duration: "2023-2025",
        funding: ""
    },
    {
        title: "Development of novel design methodologies for secured reusable hardware accelerators using steganography and multi-modal biometrics for DSP and image processing applications.",
        pi: "Prof. Anirban Sengupta",
        agency: "Council of Scientific and Industrial Research (CSIR)",
        duration: "2023 - 2026",
        funding: "INR 2000000"
    },

    {
        title: "Detection of Communities in Networks",
        pi: "Dr. Nagendra Kumar & Dr. Ranveer Singh",
        agency: "Young Faculty Research",
        duration: "2023-2025",
        funding: "INR 30,00,000"
    },
    {
        title: "Service Recommendation over a Distributed Platform with Different Network Loads by Accurate Quality Assessment",
        pi: "Dr. Soumi Chattopadhyay",
        agency: "IITI Young Faculty Research Seed Grant (YFRSG)",
        duration: "2023-2025",
        funding: "INR 10,00,000"
    },
    {
        title: "Latency Optimization for Reliable Edge Compute Service Delivery using Reinforcement Learning",
        pi: "Dr. Soumi Chattopadhyay",
        agency: "Science & Engineering Research Board (SERB)",
        duration: "2023-2026",
        funding: "INR 32,18,864"
    },
    {
        title: "Enabling Inclusive, Energy-Aware, and Formally Correct Computing: A Holistic Approach to Responsible System Development",
        pi: "Dr. Gourinath Banda",
        agency: "",
        duration: "2024-2025",
        funding: ""
    },
    {
        title: "Translation of medical reports and support systems for underprivileged",
        pi: "Dr. Chandresh Kumar Maurya",
        agency: "Department of Science and Technology",
        duration: "2024-2025",
        funding: "INR 12,00,000"
    },
    {
        title: "Safety Prediction of Motorized Two Wheelers",
        pi: "Dr. Chandresh Kumar Maurya",
        agency: "YFRCG",
        duration: "2024-2025",
        funding: "INR 40,00,000"
    },
    {
        title: "Development of Real-Time Smart Traffic Management System for Urban, Rural, and Highways of Indore.",
        pi: "Dr. Ayan Mondal",
        agency: "IIT Indore",
        duration: "2020-2023",
        funding: "INR 2,00,000"
    },
    {
        title: "An IoT protocol suite towards a Secured and Trustworthy Edge Computing.",
        pi: "Dr. Gourinath Banda",
        agency: "TIH-IoT CHANAKYA Group",
        duration: "2024-2026",
        funding: ""
    },
    {
        title: "Developing a Network Digital Twin of a Self-Optimized Virtualized Network for 5G and Beyond.",
        pi: "Dr. Sidharth Sharma",
        agency: "Science & Engineering Research Board (SERB)",
        duration: "2024-2026",
        funding: "INR 17,06,580"
    },
    {
        title: "Cross Domain Multi-modal Product Recommendation Using Deep Learning",
        pi: "Dr. Soumi Chattopadhyay",
        agency: "IITI Young Faculty Research Seed Grant (YFRSG)",
        duration: "2024-2026",
        funding: "INR 5,00,000"
    },
    {
        title: "Countering Timing Games in Blockchain Protocols.",
        pi: "Dr. Subhra Mazumdar",
        agency: "IITI Young Faculty Research Seed Grant (YFRSG)",
        duration: "2024-2026",
        funding: "INR 9,98,004"
    },
    {
        title: "Development of an Intelligent Traffic Sign Detection and Recognition Model for Indian Roads.",
        pi: "Prof. Somnath Dey",
        agency: "Science & Engineering Research Board (SERB)",
        duration: "2024-2027",
        funding: "INR 23,46,509"
    },
    {
        title: "SmartNICs Based Programmable Network Security Framework for a Server to Achieve High Throughput.",
        pi: "Dr. Aniruddha Singh Kushwaha",
        agency: "Board of Research in Nuclear Sciences (BRNS), Department of Atomic Energy (DAE)",
        duration: "2024-2027",
        funding: "INR 39,39,700"
    },
    {
        title: "Proactive and Generalized Deepfake Defense Mechanisms to Reinforce Cyberspace.",
        pi: "Dr. Soumi Chattopadhyay",
        agency: "IHUB NTIHAC Foundation, IIT Kanpur",
        duration: "2024-2027",
        funding: "INR 33,32,000"
    },
    {
        title: "Consortium Project on AgriHub: Innovation Hub for Agriculture.",
        pi: "Prof. Aruna Tiwari",
        agency: "The Ministry of Electronics and Information Technology (MeitY), Union Government of the Republic of India",
        duration: "2024-2029",
        funding: "INR 15,00,00,000"
    },
    {
        title: "Intent and Entity Extraction from Spoken Command.",
        pi: "Dr. Chandresh Kumar Maurya",
        agency: "Bosch Inc",
        duration: "2025-2025",
        funding: "INR 5,00,000"
    },
    {
        title: "iHealth: IoT-Enabled Ancillary Support for Rural Health-Center.",
        pi: "Dr. Ayan Mondal, Co-PI- Prof. Somnath Dey",
        agency: "IITI DRISHTI CPS Foundation",
        duration: "2025-2026",
        funding: "INR 10,00,000"
    },
    {
        title: "Design and Development of an IoT-Enabled Artificial Intelligence-based Smart Financial Framework for Automatic Medical Insurance Risk Assessment.",
        pi: "Prof. Somnath Dey & Dr. Ayan Mondal (Co-Principal Investigator)",
        agency: "Promotion and Acceleration of Young and Aspiring Technology entrepreneurs (PRAYAS) Scheme, IIT Bhilai Innovation and Technology Foundation",
        duration: "2025-2027",
        funding: "INR 1,31,00,000"
    },
    {
        title: "Creating an Immersive Metaverse Experience of Maladevi Temple (Vidisha) with Explainable Artificial Intelligence (XAI) and Mixed Reality for Virtual Heritage Preservation and Presentation (in collaboration with VIT Bhopal)",
        pi: "Prof. Surya Prakash",
        agency: "DST, Govt. of India",
        duration: "2025-2028",
        funding: "INR 43,66,000"
    }
];



export default function SponsoredProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Sponsored Research Projects
            </h1>


            <div className="space-y-8">
                {projectsData.map((project, index) => (
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
                                </strong> {project.duration}
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