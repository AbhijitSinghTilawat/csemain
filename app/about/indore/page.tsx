"use client";

import React from "react";

export default function AboutIndorePage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 
          text-center pb-4 mb-12 border-b-4 border-blue-300">
                    About Indore
                </h1>

                <div className="space-y-7 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">

                    <p>
                        Indore is the <strong className="font-semibold text-blue-800">commercial capital</strong>
                        of Madhya Pradesh with strong industrial presence in mechanical engineering,
                        pharmacy, and electronics. It is also an
                        <strong className="font-semibold text-blue-800"> educational hub</strong> hosting major
                        institutions like Raja Ramanna Center for Advanced Technology (RRCAT), IUCAA,
                        and IIM Indore. With a vibrant youth population, the city maintains excellent
                        connectivity by road, rail, and air, and is strategically located between
                        Mumbai and Delhi.
                    </p>

                    <p>
                        Indore is the largest city in Madhya Pradesh, located on the banks of the
                        rivers Khan and Saraswati. These rivers merge at the city center, where the
                        temple of Sangamnath (Indreshwar) stands—believed to be the origin of the
                        city's name. Situated at an altitude of 553 meters on the Malwa Plateau, the
                        city represents a unique blend of historic charm and modern development.
                        With rapid expansion, Indore has emerged as a destination offering a
                        <strong className="font-semibold text-blue-800">
                            blissful blend of the past and the future
                        </strong>.
                    </p>

                    <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg italic text-gray-700">
                        The founders of Indore were the ancestors of the present Zamindars whose
                        territories stretched from the Narmada river to the Rajputana borders, with
                        their headquarters in Kampel village. During Mughal rule, these families
                        were granted the title of Chaudhari. In the 18th century, Malwa came under
                        the control of the Peshwa dynasty, and the Chaudharis came to be known as
                        “Mandlois.” The Holkar rulers conferred upon them the title of Rao Raja,
                        which allowed them to retain their privileges—such as the right to an
                        elephant, Nishan, Danka, Gadi, and the honor of performing the first Dussehra
                        (Shami Pujan) ritual before the Holkar kings.
                    </blockquote>

                </div>

            </section>
        </main>
    );
}
