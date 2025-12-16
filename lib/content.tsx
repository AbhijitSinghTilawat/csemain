import React from 'react';

export const marqueeItems = [
    {
        id: 1,
        text: "Ph.D. Admissions 2025-26 are now OPEN. Apply Now!",
        isStrong: true,
        link: "/admissions/phd-2025"
    },
    {
        id: 2,
        text: "Welcome to the Department of Computer Science & Engineering, IIT Indore.",
        isStrong: false,
        link: "/about/department"
    },
    {
        id: 3,
        text: "Upcoming Workshop on 'Quantum Computing' next week.",
        isStrong: true,
        link: "/workshops/quantum-computing"
    }
];

export const newsItems = [
    {
        id: 1,
        link: "/news/presidential-award-2024",
        content: (
            <>
                Professor Kapil Ahuja, receives the <strong>Presidential National Teachers Awards 2024</strong>.
            </>
        )
    },
    {
        id: 2,
        link: "/news/gold-medal-convocation",
        content: (
            <>
                Mr. Mukul Jain, of CSE receives <strong>The President of India Gold Medal</strong> in the 2024 Convocation.
            </>
        )
    },
    {
        id: 3,
        link: "/news/research-paper-award",
        content: (
            <>
                Ms. Aditya Dixit, Ph.D. Student, has been awarded with the Institute a Best Research Paper Award 2024.
            </>
        )
    }
];

export const eventItems = [
    { 
        id: 1, 
        text: "TEQIP course on Introduction to Scientific Computing in Engineering",
        link: "/events/teqip-scientific-computing"
    },
    { 
        id: 2, 
        text: "TEQIP course on Fundamental of Data Analytics",
        link: "/events/teqip-data-analytics"
    },
    { 
        id: 3, 
        text: "Expert talk by Prof. Potala Revan",
        link: "/events/expert-talk-revan"
    }
];

export const recruitmentItems = [
    { 
        id: 1, 
        text: "Advertisement for Admission to Ph.D. Program for Academic Year 2025-2026",
        link: "/careers/phd-admission-2025"
    },
    { 
        id: 2, 
        text: "Faculty Recruitment",
        link: "/careers/faculty-positions"
    }
];