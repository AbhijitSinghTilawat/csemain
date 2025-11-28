

import React from 'react';

const bookChaptersData = [
    "Anirban Sengupta, Aditya Anshul \" HLS Based Fingerprinting\", IET Book \"High-Level Synthesis based Methodologies for Hardware Security,Trust and IP Protection\", To appear, 2024",
    "Anirban Sengupta, Rahul Chaurasia \" Hardware Obfuscation - Algorithmic Transformation based Obfuscation for Secure Floorplan Driven High Level Synthesis\", IET Book \"High-Level Synthesis based Methodologies for Hardware Security, Trust and IP Protection\", To appear, 2024",
    "Anirban Sengupta, Mahendra Rathor \" Hardware Trojans- Detective Countermeasure against HLS based Hardware Trojan Attack\", IET Book \"High-Level Synthesis based Methodologies for Hardware Security, Trust and IP Protection\", To appear, 2024",
    "Anirban Sengupta, Mahendra Rathor\" Fundamentals on HLS based Hardware Trojan\", IET Book \"High-Level Synthesis based Methodologies for Hardware Security, Trust and IP Protection\", To appear, 2024",
    "Anirban Sengupta, Aditya Anshul\" High Level Synthesis based Watermarking using Crypto-Chain Signature Framework\", IET Book \"High-Level Synthesis based Methodologies for Hardware Security, Trust and IP Protection\", To appear, 2024",
    "Anirban Sengupta, Rahul Chaurasia \" Methodology for Exploration of Security-Design Cost Tradeoff for Signature-based Security Algorithms\", IET Book \"Physical Biometics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023, Book DOI: 10.1049/PBCS080E",
    "Anirban Sengupta, Rahul Chaurasia \"Secured Convolutional Layer Hardware Co-processor in Convolutional Neural Network (CNN) using Facial Biometric\", IET Book \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023",
    "Anirban Sengupta, Rahul Chaurasia \"Handling Symmetrical IP Core Protection and IP Protection (IPP) of Trojan Secured Designs in HLS using Physical Biometrics\", IET Book \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023",
    "Anirban Sengupta, Aditya Anshul \"Palmprint Biometrics Vs. Fingerprint Biometrics Vs. Digital Signature using Encrypted Hash: Qualitative and Quantitative Comparison for Security of DSP coprocessors\", IET Book \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023",
    "Anirban Sengupta, Rahul Chaurasia \"Facial Signature based Biometrics for Hardware Security and IP Core protection \", IET Book \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023",
    "Aditya Anshul, Anirban Sengupta \"Secured Design Flow using Palmprint Biometrics, Steganography and PSO for DSP coprocessors\", IET Book \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023",
    "Anirban Sengupta, Rahul Chaurasia \"Integrated Defense using Structural obfuscation and Encrypted DNA based Biometric for Hardware Security\", IET Book \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023",
    "Anirban Sengupta, Aditya Anshul \"Taxonomy of Hardware Security Methodologies: IP Core Protection and Obfuscation\", IET Book \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023",
    "Anirban Sengupta, Mahendra Rathor \"Introduction: Secured Co-processors for Machine Learning and DSP Applications using Biometrics\", IET Book \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", 2023",
    "Aditya Anshul, Rahul Chaurasia,Anirban Sengupta \"Securing Hardware Coprocessors against Piracy using Biometrics for Secured IoT systems\", IET Book \"Artificial Intelligence for Biometrics and Cybersecurity\", 2023, Invited Book Chapter",
    "Aditya Anshul,Anirban Sengupta \"Role of Consumer Technology and Connected Electronic Devices on SCM: A Discussion on its Usages, Impact, and Challenges\", UTHM Book \"Evolution of Information, Communication and Computing System\", 2023, Invited Book Chapter",
    "Mahendra Rathor, Anirban Sengupta \"Particle Swarm Optimization driven DSE based Low Cost Hardware Security for Securing DSP IP Cores\", Springer Book \"Advances in Nature-inspired Cyber Security and Resilience\", 2022, Invited Book Chapter, pp 29?54, Print ISBN: 978-3-030-90707-5 978-3-030-90707-5",
    "Anirban Sengupta \"Introduction: Secured and optimized hardware accelerators for DSP and image processing applications\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta \"Cryptography driven IP steganography for DSP Hardware Accelerators\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta \"Double Line of Defence to Secure JPEG Codec Hardware for Medical Imaging Systems\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta \"Multimodal Hardware Accelerators for Image Processing Filters\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta \"Integrating Multi-key based Structural Obfuscation and Low-level Watermarking for Double Line of Defence of DSP Hardware Accelerators\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta \"Fingerprint Biometric for Securing Hardware Accelerators\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta \"Key-triggered Hash-chaining based Encoded Hardware Steganography for Securing DSP Hardware Accelerators\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta \"Designing Secured N-point DFT Hardware Accelerator using Obfuscation and Steganography\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta, Mahendra Rathor \"Structural transformation and obfuscation frameworks for Data-intensive IPs\", IET Book \"Secured Hardware Accelerators for DSP and Image processing applications\", 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta, Rahul Chaurasia \"Hardware IP Cores for Image Processing Functions\", IOP Book \"Advances in Image and Data Processing using VLSI Design\", 2022, Invited Book Chapter, pp. 7.1 - 7.14, doi:10.1088/978-0-7503-3919-3ch7",
    "Anirban Sengupta, Rahul Chaurasia, Prasad Pradeeprao \"Secured Integrated Circuit (IC/IP) Design Flow\", CRC Book \"Nanoelectronics for Next-generation Integrated Circuits\", 2021, Invited Book Chapter",
    "Anirban Sengupta \"Forensic Detective Control using Digital Signature based Watermark for IP Core Protection\", IET Book \"Frontiers in Securing Hardware IP Cores: Forensic detective control and obfuscation techniques\", 2020, ISBN: 978-1-83953-031-9/978-1-83953-032-6",
    "Anirban Sengupta \"Multi-phase Obfuscation for Fault-secured DSP circuits\", IET Book \"Frontiers in Securing Hardware IP Cores: Forensic detective control and obfuscation techniques\", 2020, ISBN: 978-1-83953-031-9/978-1-83953-032-6",
    "Anirban Sengupta \"Protection of Fault Secured IP Core using Digital Signature based Watermark\", IET Book \"Frontiers in Securing Hardware IP Cores: Forensic detective control and obfuscation techniques\", 2020, ISBN: 978-1-83953-031-9/978-1-83953-032-6",
    "Anirban Sengupta \"Protecting Right of an IP Buyer using Cryptosystem based Multi-variable Fingerprinting\", IET Book \"Frontiers in Securing Hardware IP Cores: Forensic detective control and obfuscation techniques\", 2020, ISBN: 978-1-83953-031-9/978-1-83953-032-6",
    "Anirban Sengupta \"Multi-Level Watermark for IP Protection\", IET Book \"Frontiers in Securing Hardware IP Cores: Forensic detective control and obfuscation techniques\" , 2020, ISBN: 978-1-83953-031-9/978-1-83953-032-6",
    "Anirban Sengupta, Mahendra Rathor \"Security of Functionally Obfuscated DSP cores\", IET Book \"Frontiers in Securing Hardware IP Cores: Forensic detective control and obfuscation techniques\", 2020, ISBN: 978-1-83953-031-9/978-1-83953-032-6",
    "Anirban Sengupta, Mahendra Rathor \"Hologram based Structural Obfuscation for DSP Cores\", IET Book \"Frontiers in Securing Hardware IP Cores: Forensic detective control and obfuscation techniques\", 2020, ISBN: 978-1-83953-031-9/978-1-83953-032-6",
    "Anirban Sengupta \"Introduction to Hardware (IP) Security: Forensic Detective Control and Obfuscation of DSP cores\", IET Book \"Frontiers in Securing Hardware IP Cores: Forensic detective control and obfuscation techniques\", 2020, ISBN: 978-1-83953-031-9/978-1-83953-032-6",
    "Anirban Sengupta, Mahendra Rathor \"Hardware (IP) Watermarking during Behavioural Synthesis\", Springer Book \"Behavioral Synthesis for Hardware Security\", 2020, Invited Chapter (Eds.Srinivas Katkoori, Sheikh Ariful Islam)",
    "Anirban Sengupta, Dipanjan Roy \"Securing dedicated DSP Coprocessors (Hardware IP) using Structural Obfuscation for IoT-oriented platforms\", CRC Book, Taylor & Francis \"Security of Internet of Things Nodes Challenges, Attacks, and Countermeasures\", 2020, Invited Chapter (Eds.Chinmay Chakrabarty, Sree Ranjani Rajendran, Rajat Subhra Chakraborty, Muhammad Habib ur Rehman)",
    "Anirban Sengupta, Saraju Mohanty, \"Introduction to IP Core Protection and Hardware-Assisted Security of Consumer Electronics\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"Introduction to IP Core Protection and Hardware-Assisted Security of Consumer Electronics\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Saraju Mohanty, Anirban Sengupta \"Security in Consumer Electronics and Internet of Things (IoT)\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"Trojan Security Aware DSP IP Core and Integrated Circuits\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"IP Core and Integrated Circuit Protection using Robust Watermarking\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"Symmetrical Protection of DSP IP Core and Integrated Circuits using Fingerprinting and Watermarking\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"Computational Forensic Engineering for Resolving Ownership Conflict of DSP IP Core\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"Structural Obfuscation of DSP Cores used in CE Devices\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"Functional Obfuscation of DSP Cores used in CE Devices\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"Obfuscation of JPEG CODEC IP Core for CE Devices\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Saraju Mohanty, \"Advanced Encryption Standard (AES) and its Hardware Watermarking for Ownership Protection\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta \"HAAR Computation Reduction Functions\", The Institution of Engineering and Technology (IET), 2019, pp. 447 - 457, ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta \"Transfer functions and control data flow graph of DSP cores\", The Institution of Engineering and Technology (IET), 2019, pp. 484 - 491, ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta \"Controller design details for JPEG codec IP core\", The Institution of Engineering and Technology (IET), 2019, pp. 459 - 483, ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Saraju Mohanty, Anirban Sengupta, \"Hardware Approaches for Media and Information Protection and Authentication\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Saraju Mohanty, Anirban Sengupta, \"Physical Unclonable Functions (PUFs)\", The Institution of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0.",
    "Anirban Sengupta, Deepak Kachave, \"Transient Fault-Tolerant Datapath during High Level Synthesis for DSP Cores: Data Intensive Applications\", IET Book: VLSI and Post-CMOS Devices, Circuits and Modelling, Invited Book Chapter, 2018.",
    "Anirban Sengupta, Dipanjan Roy \"Low Cost Dual-Phase Watermark for Protecting CE Devices in IoT Framework\", Springer Book: Security and Fault Tolerance in Internet of Things, Invited Book Chapter, March 2018.",
    "Anirban Sengupta, Saraju P.Mohanty \"High-Level Synthesis of Digital Circuits in the Nanoscale, Mobile Electronics Era\", IET Book: Nano-CMOS and Post-CMOS Electronics: Circuits and Design, Invited Book Chapter, e-ISBN: 9781785610004, pp: 219 - 261, June 2016.",
    "Surya Prakash, Kamlesh Tiwari and Phalguni Gupta, \"Biometrics Using Scale Invariant Feature Transform\", Wiley Encyclopedia of Electrical and Electronics Engineering, 2015.",
    "Surya Prakash, Phalguni Gupta and Raghunath Tiwari, \"Algorithms and their Design in Decision Sciences: Theory and Practice (Chapter 16)\", CRC Press, Taylor & Francis Group, 2015",
    "Neminath Hubballi and Deepanshu Goyal, \"Discovering Periodicity in Network Flows for Security Monitoring\" Handbook of Research on Modern Cryptographic Solutions for Computer and Cyber Security 2015 (Accepted) Total Pages 20, IGI Global",
    "Anirban Sengupta, Saraju P. Mohanty \"High-Level Synthesis of Digital Circuits in the Nanoscale, Mobile Electronics Era\", Book Volume: Nano-CMOS and Post-CMOS Electronics: Circuits and Design, IET, March-2015 , In Press Total Pages: 49",
    "Patel, O., Tiwari A., \"Quantum Based Learning with Binary Neural Network\", L. C. Jain, Springer-Verlag Berlin Heidelberg, 978-81-322-2208-8, 19-21 Dec 2014.",
    "Patel O., Tiwari A., \"Liver Disease Diagnosis using Quantum based Binary Neural Network Learning Algorithm\", K. N. Das , Springer-Verlag Berlin Heidelberg, 978-81-322-2220-0, 27-29 Dec 2014.",
    "Anirban Sengupta \"Design Space Exploration of Datapath (Architecture) in High Level Synthesis for Computation Intensive Applications\", Springer Book volume: Application of Evolutionary Algorithms for Multi-Objective Optimization in VLSI and Embedded Systems, Aug 2014, Print ISBN: 978-81-322-1957-6, pp. 93 - 111.",
    "Anirban Sengupta \"Design Flow from Algorithm To RTL using Evolutionary Exploration Approach\" , Springer Book volume: Application of Evolutionary Algorithms for Multi-Objective Optimization in VLSI and Embedded Systems, Aug 2014, Print ISBN: 978-81-322-1957-6, pp. 113 - 123.",
    "Neha Bharill, Aruna Tiwari, \"Handling Big Data with Fuzzy Based Classification Approach\", e-book: Studies in Fuzziness and Soft Computing, Mo Jamshidi moj@wacong.org (2) Vladik Kreinovich vladik@utep.edu (3) Janusz Kacprzyk , Springer International Publishing Switzerland, ISBN 978-3-319-03673-1, 16-18 Dec 2013.",
    "Arpit Bhardwaj and Aruna Tiwari, \"A Novel Genetic Programming Based Classifier Design Using a New Constructive Crossover Operator with a Local Search Technique\", De-Shuang Huang, Vitoantonio Bevilacqua, Juan Carlos Figueroa, Prashan Premaratne, Springer-Verlag Berlin Heidelberg, 978-3-642-39479-9, 28-31 July2013."
];


export default function BookChaptersPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Book Chapters
            </h1>

            <div className="space-y-6">
                {bookChaptersData.map((chapter, index) => {


                    const firstQuoteIndex = chapter.indexOf('"');
                    const secondQuoteIndex = chapter.indexOf('"', firstQuoteIndex + 1);

                    let authors = '';
                    let title = '';
                    let source = '';

                    if (firstQuoteIndex !== -1 && secondQuoteIndex !== -1) {
                        authors = chapter.substring(0, firstQuoteIndex);
                        title = chapter.substring(firstQuoteIndex + 1, secondQuoteIndex);
                        source = chapter.substring(secondQuoteIndex + 1);
                    } else {

                        authors = chapter;
                    }


                    return (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
                        >
                            <div className="flex items-start">

                                


                                <div className="px-6 py-4 text-xl text-gray-700 leading-relaxed flex-1">
                                    {/* 1. लेखक (Authors) */}
                                    <span className="text-gray-600" dangerouslySetInnerHTML={{ __html: authors }} />


                                    {title && (
                                        <span
                                            className="text-xl font-semibold text-blue-900"
                                            dangerouslySetInnerHTML={{ __html: `"${title}"` }}
                                        />
                                    )}


                                    {source && (
                                        <span className=" text-xl text-gray-600" dangerouslySetInnerHTML={{ __html: source }} />
                                    )}
                                </div>


                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}