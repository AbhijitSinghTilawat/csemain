// app/phd-students/page.tsx

import { getPhdStudents } from "@/lib/phdStudentData";

export default async function PhdStudentsPage() {
    const phdStudents = await getPhdStudents();

    return (
        <div className="w-full min-h-screen py-12 bg-gray-50">

            <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-10 text-center">
                🎓 PhD Students
            </h1>

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-6
                    gap-6 sm:gap-8 lg:gap-10
                    px-2 sm:px-4
                    justify-items-center
                "
            >
                {phdStudents.map((student) => (
                    <div
                        key={student.id}
                        className="
                            bg-white
                            rounded-2xl
                            shadow-lg
                            hover:shadow-2xl
                            transition
                            duration-500
                            transform
                            hover:scale-[1.03]
                            p-6
                            flex
                            flex-col
                            items-center
                            text-center
                            border border-gray-200
                            w-full
                            max-w-[350px]
                        "
                    >
                        {/* Profile Image */}
                        <img
                            src={
                                student.profileImagePath ||
                                "https://placehold.co/150x150/cccccc/000000?text=NA"
                            }
                            alt={student.name}
                            className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-indigo-200 shadow-md"
                        />

                        {/* Name */}
                        <h2 className="text-xl font-bold text-indigo-700 mb-3">
                            {student.name}
                        </h2>

                        {/* Info Section */}
                        <div className="space-y-2 w-full text-left">

                            <p className="text-gray-800">
                                <span className="font-medium">Supervisor:</span>{" "}
                                {student.supervisor}
                            </p>

                            <p className="text-gray-800">
                                <span className="font-medium">Category:</span>{" "}
                                {student.category}
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
                                    className="text-blue-600 hover:underline break-all"
                                >
                                    {student.email}
                                </a>
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
