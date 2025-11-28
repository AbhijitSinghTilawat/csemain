// इस पेज को app/former-faculty/page.tsx पर बनाएँ
import { getFormerFacultyMembers } from "@/lib/formerFacultyData";  

export default async function FormerFacultyPage() { // 👈 पेज का नाम बदला
    const formerFacultyMembers = await getFormerFacultyMembers();  

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="w-full">
                <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-8">
                    🎓 Former Faculty Members {/* 👈 टाइटल बदला */}
                </h1>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
                    {formerFacultyMembers.map((member) => ( // 👈 नया वैरिएबल
                        <div
                            key={member.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-[1.02] flex flex-col items-center text-center"
                        >
                            <img
                                src={
                                    member.profileImagePath ||
                                    "https://placehold.co/150x150/cccccc/000000?text=NA"
                                }
                                alt={member.name}
                                // 👇 आप इसे गोल (rounded-full) रख सकते हैं या चौकोर (rounded-lg) कर सकते हैं
                                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-indigo-200"
                            />

                            <h2 className="text-2xl font-bold text-indigo-700 mb-1">
                                {member.name}
                            </h2>
                            <p className="text-md font-semibold text-gray-600 mb-4">
                                {member.designation}
                            </p>

                            {/* 👇 यहाँ डेटा बदला गया है */}
                            <div className="space-y-2 w-full">
                                <p className="text-gray-800">
                                    <span className="font-medium">Duration:</span>{" "}
                                    {member.duration}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">Contact No.:</span>{" "}
                                    {member.contactNo || "N/A"}
                                </p>
                            </div>

                            {/* 👇 बटन को 'Read More' लिंक में बदला गया */}
                            <a
                                href={member.readMoreUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}