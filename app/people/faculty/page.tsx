import { getFacultyMembers } from "@/lib/facultyData";

export default async function FacultyPage() {
    const facultyMembers = await getFacultyMembers();

    // ---------------- HOD DATA ----------------
    const headOfDepartment = {
        name: "Dr. Ranveer Singh",
        education: "PhD, IIT Jodhpur",
        designation: "Head of Department",
        specialization: "Algorithmic Graph Theory, Computational Complexity",
        email: "hodcse@iiti.ac.in",
        profileImagePath: "/facultypng/Ranveer_Singh.jpg",
        researchAreas: ["AI", "Deep Learning", "Computer Vision"],
        profileUrl: "https://ranveeriit.github.io/",
        contact: "+91-731-6603224",
    };

    return (
        <div className="bg-gray-50 w-full px-2 sm:px-4 py-10 min-h-screen">

            {/* -------------------- HOD SECTION -------------------- */}
            <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-10 text-center">
                Head of Department
            </h1>

            <div
                className="w-full bg-white rounded-2xl shadow-xl p-8 mb-16 
                           flex flex-col md:flex-row items-center gap-8 
                           hover:shadow-2xl transition duration-500"
            >
                {/* HOD Image */}
                <img
                    src={headOfDepartment.profileImagePath}
                    alt={headOfDepartment.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-indigo-300"
                />

                {/* HOD Info */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-indigo-700 mb-1">
                        {headOfDepartment.name}
                    </h2>

                    <p className="text-sm font-medium text-gray-500 italic mb-2">
                        {headOfDepartment.education}
                    </p>

                    <p className="text-md font-semibold text-gray-700 mb-3">
                        {headOfDepartment.designation}
                    </p>

                    <p className="text-gray-800 mb-2">
                        <span className="font-medium">Specialization:</span>{" "}
                        {headOfDepartment.specialization}
                    </p>

                    <p className="text-gray-800">
                        <span className="font-medium">Email:</span>{" "}
                        <a
                            href={`mailto:${headOfDepartment.email}`}
                            className="text-blue-600 hover:underline"
                        >
                            {headOfDepartment.email}
                        </a>
                    </p>

                    <p className="text-gray-800">
                        <span className="font-medium">Contact:</span>{" "}
                        {headOfDepartment.contact}
                    </p>

                    <a
                        href={headOfDepartment.profileUrl}
                        target="_blank"
                        className="inline-block mt-4 bg-indigo-500 text-white py-2 px-5 rounded-lg
                                   hover:bg-indigo-600 transition"
                    >
                        View Full Profile
                    </a>
                </div>
            </div>

            {/* -------------------- FACULTY SECTION -------------------- */}
            <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-10 text-center">
                Faculty Members
            </h1>

            {/* Full-width grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">

                {facultyMembers.map((member) => (
                    <div
                        key={member.id}
                        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl 
                                   transition duration-500 transform hover:scale-[1.02] 
                                   p-8 flex flex-col h-full min-h-[520px] items-center text-center"
                    >
                        {/* Profile Image */}
                        <img
                            src={
                                member.profileImagePath ||
                                "https://placehold.co/150x150/cccccc/000000?text=NA"
                            }
                            alt={member.name}
                            className="w-24 h-24 rounded-full mb-5 object-cover border-4 border-indigo-200"
                        />

                        {/* NAME + (on lien) */}
                        <h2 className="text-xl font-bold text-indigo-700 mb-1">
                            {member.name.includes("(on lien)") ? (
                                <>
                                    {member.name.replace(" (on lien)", "")}
                                    <span className="text-sm text-gray-500 font-normal">
                                        {" "}(on lien)
                                    </span>
                                </>
                            ) : (
                                member.name
                            )}
                        </h2>

                        {/* Education */}
                        {member.education && (
                            <p className="text-sm font-medium text-gray-500 mb-2 italic">
                                {member.education}
                            </p>
                        )}

                        {/* Designation */}
                        <p className="text-sm font-semibold text-gray-600 mb-4">
                            {member.designation}
                        </p>

                        {/* Info */}
                        <div className="space-y-2 w-full text-sm">
                            <p className="text-gray-800">
                                <span className="font-medium">Specialization:</span>{" "}
                                {member.specialization}
                            </p>

                            <p className="text-gray-800 break-all">
                                <span className="font-medium">Email:</span>{" "}
                                <a
                                    href={`mailto:${member.email}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    {member.email}
                                </a>
                            </p>

                            <p className="text-gray-800">
                                <span className="font-medium">Contact:</span>{" "}
                                {member.contact || "N/A"}
                            </p>
                        </div>

                        {/* BUTTON — fixed at bottom */}
                        <a
                            href={member.profileUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto bg-indigo-500 text-white py-1.5 px-4 rounded-lg 
                                       hover:bg-indigo-600 transition text-sm"
                        >
                            View Full Profile
                        </a>
                    </div>
                ))}

            </div>
        </div>
    );
}
