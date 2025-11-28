

import React from 'react';


const patentsData = [
    "Anirban Sengupta, \"Proteogenomic Biomarker based HLS Watermark for Hardware IP Security\", Patent Application No. 202521019673, 2025, Granted by Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \"A Hardware IP Protection against IP Piracy based on IP vendor’s Genomic Microsatellites µ-sat/Short-Tandem Repeat (STR) for Forensic Hardware Watermark\", Patent Application No. 202521019675, 2025, Granted by Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \"A Behavioral Synthesis based Hardware IP Protection using Microscopic Fingerprint Datum Lines and Star-Burst of IP Vendor augmented with Encoded Hash as Embedded Forensic Digital Evidence\", Patent Application No. 202521019674, 2025, Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \"Secure Hardware of GLRT Cascade using Color Interval Graph based Embedded Fingerprint for ECG Detector\", Patent No 557485, 2025, Granted by Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \"A hardware security method to design secure hardware accelerators for cardiac pacemaker\", Patent No 202321036317, 2023,Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \" Design Space Exploration of An Optimized Hardware Trojan Detectable/Secured Datapath During High Level Synthesis\", Patent No 430067, 2023, Granted by Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \" Design Space Exploration of Optimal Kc-Cycle Transient Fault Secured Datapath System with Intelligent Cut Insertion\", Patent No : 432435, 2023, Granted by Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \" Design Space Exploration of Optimal k-Cycle Transient Fault Tolerant Datapath Based on Multi-Objective Power-Performance Tradeoff\", Patent No. 392356, 2022, Granted by Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \" Design Space Exploration System and Method Thereof Using a Bacterial Foraging Optimization Mechanism\", Patent No. 366323, 2021, Granted by Indian Patent Office (IPO), Govt. of India.",
    "Anirban Sengupta, \" Embedding Watermark based on Multi-Variable Signature Encoding at Behaviour Level for Reusable IP Core Protection\", Patent 4466/MUM/2015, July 11, 2017.",
    "Anirban Sengupta, \" Method and System for Automatic Fault Recovery and True Output Extraction during High Level Synthesis\", Patent No. 2478/MUM/2014, 2015.",
    "Anirban Sengupta, \" \"Improved Schedule Delay Estimation Process for Datapath during High Level Synthesis\", Patent No. 2482/MUM/2014, 2015, (Status: Published).",
    "Anirban Sengupta, \"Embedding Watermark based on Multi-Variable Signature Encoding at Behaviour Level for Reusable IP Core Protection\", Indian Patent Office (IPO),4466/MUM/2015, Nov 27,2015.",
    "Dr. Gourinath Banda, “System And Method For Electrical Energy Conservation”, Filing Date: 28th of October, 2015, Application No.: 4092/MUM/2015.",
    "Aruna Tiwari, Ashok Pencily Poothiyat, Kunal Chaudhary, \"System And Method For Sign Language Gesture Recognition\", 1988/MUM/2015 , 2015.",
    "Anirban Sengupta (co-inventor: Reza Sedaghat), \" System and Method for Development of System Architecture\", US Patent by United Sates Patent and Trademark Office (USPTO), Patent no. US 8,826,199 B2, Sep 2014, Granted by USPTO",
    "Anirban Sengupta (co-inventor: Reza Sedaghat), \" System and methodology for development of a system architecture using optimization parameters\", US Patent by United Sates Patent and Trademark Office (USPTO), Patent no. US 8,397,204, March 12, 2013, Granted by USPTO."
];

export default function PatentsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Patents
            </h1>


            <div className="space-y-6">
                {patentsData.map((patent, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
                    >
                        <div className="flex items-start">


                            <p
                                className="px-6 py-4 text-xl text-gray-700 leading-relaxed flex-1"

                                dangerouslySetInnerHTML={{ __html: patent }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}