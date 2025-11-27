"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsPage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center pb-4 mb-12 border-b-4 border-blue-300">
                    Contact Us
                </h1>

                <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">

                    <div className="mb-6">
                        <h2 className="text-3xl font-semibold text-blue-800 mb-2">
                            Head of Department
                        </h2>
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Dr. Ranveer Singh
                        </p>
                    </div>

                    <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 pt-1">
                                <MapPin className="h-6 w-6 text-blue-600" />
                            </div>
                            <address className="not-italic leading-relaxed">
                                Department of Computer Science & Engineering,
                                <br />
                                Indian Institute of Technology Indore,
                                <br />
                                Simrol, Khandwa Road, Indore 453552
                            </address>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 pt-1">
                                <Mail className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="leading-relaxed">
                                <a
                                    href="mailto:ranveer@iiti.ac.in"
                                    className="block hover:text-blue-700 hover:underline"
                                >
                                    ranveer@iiti.ac.in
                                </a>
                                <a
                                    href="mailto:hodcse@iiti.ac.in"
                                    className="block hover:text-blue-700 hover:underline"
                                >
                                    hodcse@iiti.ac.in
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 pt-1">
                                <Phone className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="leading-relaxed">
                                <a href="tel:+917316603224" className="block hover:text-blue-700">
                                    +91-731-6603224
                                </a>
                                <a href="tel:+917316603503" className="block hover:text-blue-700">
                                    Office of Head: Ms Ujavala +91-731-6603503
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
