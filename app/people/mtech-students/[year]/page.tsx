"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { allMtechData } from "@/lib/mtechStudentData";

export default function MTechYearPageClient() {
  const pathname = usePathname() || "";
  const year = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : "";
  }, [pathname]);

  const students = allMtechData[year] ?? [];

  return (
    <div className="w-full min-h-screen py-12 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10 text-center">
        {year ? `${year} MTech Students` : "MTech Students"}
      </h1>

      {students.length > 0 ? (
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
          {students.map((student) => (
            <div
              key={student.id}
              className="
                flex flex-col
                bg-white
                rounded-3xl
                shadow-xl
                overflow-hidden
                border
                border-gray-300
                hover:scale-[1.03]
                transition-transform
                duration-300
                w-full
                max-w-[340px]
              "
            >
              {/* Image */}
              <div className="flex flex-col items-center pt-8 pb-6 bg-white">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-blue-200 shadow-md">
                  <Image
                    src={student.imageUrl}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name Section */}
              <div className="bg-blue-900 text-white px-5 py-5 text-center">
                <h3 className="font-bold text-lg uppercase leading-tight tracking-wide">
                  {student.name}
                </h3>
                <p className="text-sm text-blue-200 font-mono">{student.id}</p>
              </div>

              {/* Info Section */}
              <div className="p-5 text-base space-y-2">
                <p>
                  <strong>Supervisor:</strong> {student.supervisor}
                </p>
                <p className="flex gap-2 items-center">
                  <strong>Email:</strong>
                  <a
                    href={`mailto:${student.email}`}
                    className="text-blue-700 hover:underline break-all"
                  >
                    {student.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-700 text-center mt-8">
          {year
            ? `Student data for the batch of ${year} is not yet available.`
            : "Could not resolve a year from the URL."}
        </p>
      )}
    </div>
  );
}
