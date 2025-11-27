import React from "react";
import { allAlumniData } from "@/lib/alumniData";

export default function GraduatedPhDPage() {
  const alumni: any[] = (allAlumniData as any).graduatedPhD ?? [];

  const PLACEHOLDER = "/png/default-avatar.png"; // public में यह फ़ाइल रखें

  // helper: normalize + encode image path for safe requests
  function normalizeImgPath(raw?: string | null): string {
    if (!raw) return PLACEHOLDER;
    const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
    try {
      return encodeURI(withLeading);
    } catch {
      return PLACEHOLDER;
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-900">Graduated PhD Alumni</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {alumni.map((person: any, idx: number) => {
          const key = person.rollno ?? person.id ?? `phd-${idx}`;

          // support several image field names
          const rawImg = person.imageUrl ?? person.img ?? person.image ?? "";
          const imageSrc = normalizeImgPath(rawImg);

          // thesis/title and year variations
          const thesis =
            person.thesisTitle ??
            person.thesis ??
            person.Thesistitle ??
            person.thesis_title ??
            "";
          const year = person.yearOfGraduation ?? person.year ?? "";

          const name = person.name ?? "Unnamed";

          return (
            <div
              key={key}
              className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-100"
            >
              {/* Server-safe image usage (normalized/encoded path) */}
              <img
                src={imageSrc || PLACEHOLDER}
                alt={name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />

              <h3 className="font-bold mt-4 text-lg truncate">{name}</h3>

              {(person.rollno || person.id) && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Roll No:</span>{" "}
                  {person.rollno ?? person.id}
                </p>
              )}

              {person.supervisor && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Supervisor:</span>{" "}
                  {person.supervisor}
                </p>
              )}

              {person.specialization && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Specialization:</span>{" "}
                  {person.specialization}
                </p>
              )}

              {year && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Year:</span> {year}
                </p>
              )}

              {thesis && (
                <p className="text-xs text-gray-500 mt-2 italic line-clamp-3">
                  <span className="font-semibold">Thesis:</span> {thesis}
                </p>
              )}

              {person.profileLink && (
                <a
                  href={person.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                >
                  View Profile
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
