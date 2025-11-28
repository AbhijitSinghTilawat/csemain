import { getStaffMembers } from "@/lib/StaffData"; // Correct function imported

export default async function StaffPage() {
    const staffMembers = await getStaffMembers();

    return (
        <div className="bg-gray-50 min-h-screen w-full">

            <div className="w-full">

                <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-8">
                    👥 Staff Members
                </h1>

                 <div className="w-full"></div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">

                    {staffMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl 
                                       transition duration-500 transform hover:scale-[1.02] 
                                       flex flex-col items-center text-center"
                        >
                            {/* ROUND IMAGE */}
                            <img
                                src={
                                    member.profileImagePath ||
                                    "https://placehold.co/150x150/cccccc/000000?text=NA"
                                }
                                alt={member.name}
                                className="w-40 h-40 rounded-full mb-4 object-cover border-4 border-indigo-200"
                            />

                            {/* Name */}
                            <h2 className="text-2xl font-bold text-indigo-700 mb-1">
                                {member.name}
                            </h2>

                            {/* Designation */}
                            <p className="text-md font-semibold text-gray-600 mb-4">
                                {member.designation}
                            </p>

                            {/* INFO */}
                            <div className="space-y-2 w-full text-left">

                                {/* EMAIL → stays in same line */}
                                <p className="text-gray-800">
                                    <span className="font-medium">Email:</span>{" "}
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {member.email}
                                    </a>
                                </p>

                                {/* Tel */}
                                <p className="text-gray-800">
                                    <span className="font-medium">Tel:</span>{" "}
                                    {member.tel || "N/A"}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
