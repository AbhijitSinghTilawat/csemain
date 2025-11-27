// 👈 app/ms-students/page.tsx

import { getMsStudents } from "@/lib/msStudentData";

export default async function MsStudentsPage() {
    const msStudents = await getMsStudents();

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                
                <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-8">
                    👨‍🎓 MS Students
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {msStudents.map((student) => (
                        <div
                            key={student.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl 
                                       transition duration-500 transform hover:scale-[1.02] 
                                       flex flex-col items-center text-center"
                        >
                            {/* Profile Image */}
                            <img
                                src={
                                    student.profileImagePath ||
                                    "https://placehold.co/150x150/cccccc/000000?text=NA"
                                }
                                alt={student.name}
                                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-indigo-200"
                            />

                            {/* Name */}
                            <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                                {student.name}
                            </h2>

                            {/* Info Section (scroll removed) */}
                            <div className="space-y-2 w-full text-left mt-2">

                                <p className="text-gray-800">
                                    <span className="font-medium">Supervisor:</span>{" "}
                                    {student.supervisor}
                                </p>

                                <p className="text-gray-800">
                                    <span className="font-medium">Roll-No:</span>{" "}
                                    {student.rollNo}
                                </p>

                                <p className="text-gray-800">
                                    <span className="font-medium">Research Area:</span>{" "}
                                    {student.researchArea}
                                </p>

                                <p className="text-gray-800">
                                    <span className="font-medium">Email:</span>{" "}
                                    <a
                                        href={`mailto:${student.email}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {student.email}
                                    </a>
                                </p>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
