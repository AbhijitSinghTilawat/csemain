import { FormerFaculty } from "@/types/FormerFaculty";

// आपकी इमेज से लिया गया डेटा
const dummyFormerFaculty: FormerFaculty[] = [
    {
        id: 1,
        name: "Prof. Narendra S. Chaudhari",
        designation: "Professor (HAG)",
        duration: "2009-2025",
        contactNo: "", // इमेज में खाली है
        profileImagePath: "/formerfacultypng/nsc.jpg", // 👈 पाथ बदलें
        readMoreUrl: "https://people.iiti.ac.in/~narendra/", // 👈 यहाँ असली लिंक डालें
    },
    {
        id: 2,
        name: "Dr. Monalisa Sarma",
        designation: "Assistant Professor",
        duration: "2011-2013",
        contactNo: "", // इमेज में खाली है
        profileImagePath: "/formerfacultypng/Monalisa_Sarma.jpg", // 👈 पाथ बदलें
        readMoreUrl: "https://www.iitkgp.ac.in/department/RE/faculty/re-monalisa/", // 👈 यहाँ असली लिंक डालें
    },
    {
        id: 3,
        name: "Dr. Sushmita Ruj",
        designation: "Assistant Professor",
        duration: "2011-2013",
        contactNo: "", // इमेज में खाली है
        profileImagePath: "/formerfacultypng/sushmitaruj.JPG", // 👈 पाथ बदलें
        readMoreUrl: "https://research.unsw.edu.au/people/associate-professor-sushmita-ruj", // 👈 यहाँ असली लिंक डालें
    },

    {
        id: 4,
        name: "Dr. Tanima Dutta",
        designation: " Assistant Professor-Visiting",
        duration: "2011-2013",
        contactNo: "", // इमेज में खाली है
        profileImagePath: "/formerfacultypng/Tanima.jpeg", // 👈 पाथ बदलें
        readMoreUrl: "https://iitbhu.ac.in/dept/cse/people/tanimacse", // 👈 यहाँ असली लिंक डालें
    },
    {
        id: 5,
        name: "Dr. Pramod Ganapathi",
        designation: "Assistant Professor",
        duration: "2018-2019",
        contactNo: "", // इमेज में खाली है
        profileImagePath: "/formerfacultypng/Dr. Pramod_Ganapathi.jpg", // 👈 पाथ बदलें
        readMoreUrl: "https://www3.cs.stonybrook.edu/~pramod.ganapathi/", // 👈 यहाँ असली लिंक डालें
    },

    {
        id: 6,
        name: "Prof.Subhrangsu Mandal",
        designation: "Assistant Professor",
        duration: "2022-2023",
        contactNo: "", // इमेज में खाली है
        profileImagePath: "/formerfacultypng/Subhrangsu Mandal.jpg", // 👈 पाथ बदलें
        readMoreUrl: "https://www.iitism.ac.in/faculty-details?faculty=subhrangsu", // 👈 यहाँ असली लिंक डालें
    },
    // ... (आप यहाँ और सदस्यों को जोड़ सकते हैं)
];

/**
 * Simulates fetching former faculty data from a database or API.
 * @returns A list of former faculty members
 */
export async function getFormerFacultyMembers(): Promise<FormerFaculty[]> {
    // Adding a small delay to simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 100));
    return dummyFormerFaculty;
}