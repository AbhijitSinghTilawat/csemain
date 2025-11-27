import { Staff } from "@/types/Staff"; // 👈 स्टाफ टाइप इम्पोर्ट करें

// इमेज से लिया गया स्टाफ का डेटा
const dummyStaff: Staff[] = [
    {
        id: 1,
        name: "Mr. Shailendra Verma",
        designation: "Jr. Technical Superintendent",
        email: "shailendra@iiti.ac.in",
        tel: "+91-731-6603486",
        profileImagePath: "/staffpng/shailu2.jpg", // 👈 पाथ बदलें
    },
    {
        id: 2,
        name: "Mr. Lalit Jain",
        designation: "Senior Lab Assistant",
        email: "lalit@iiti.ac.in",
        tel: "+91-731-6603487",
        profileImagePath: "/staffpng/Lalit1.jpeg", // 👈 पाथ बदलें
    },
    {
        id: 3,
        name: "Mr. Jagat Singh",
        designation: "Jr. Technical Superintendent",
        email: "jagat@iiti.ac.in",
        tel: "+91-731-6603449",
        profileImagePath: "/staffpng/Jagat.jpg", // 👈 पाथ बदलें
    },
    {
        id: 4,
        name: "Ms. Ujavala Gorakh Langhi",
        designation: "Junior Superintendent",
        email: "ujavala@iiti.ac.in",
        tel: "+91-731-6603503",
        profileImagePath: "/staffpng/ujavala23.jpg", // 👈 पाथ बदलें
    },
    {
        id: 5,
        name: "Mr. Vikas Tailor",
        designation: "Jr. Technical Superintendent", // (इमेज में पद नहीं था, मैंने मान लिया है)
        email: "vikas.tailor@iiti.ac.in",      // (इमेज में ईमेल नहीं था)
        tel: "+91-731-6603434",               // (इमेज में फ़ोन नहीं था)
        profileImagePath: "/staffpng/VikasTailor.jpg", // 👈 पाथ बदलें
    },
    {
        id: 6,
        name: "Mr. Sonu Kaushal",
        designation: "Senior Lab Assistant", // (इमेज में पद नहीं था, मैंने मान लिया है)
        email: "sonu.kaushal@iiti.ac.in", // (इमेज में ईमेल नहीं था)
        tel: "+91-731-6603503",            // (इमेज में फ़ोन नहीं था)
        profileImagePath: "/staffpng/sonu.jpg", // 👈 पाथ बदलें
    },
];

/**
 * Simulates fetching staff data from a database or API.
 * @returns A list of staff members
 */
export async function getStaffMembers(): Promise<Staff[]> { // 👈 नाम बदला
    // Adding a small delay to simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 100));
    return dummyStaff; // 👈 स्टाफ डेटा भेजें
}