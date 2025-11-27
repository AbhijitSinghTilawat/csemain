"use client";

import React from "react";
import { allAlumniData } from "@/lib/alumniData";

function normalizeImgPath(raw?: string, placeholder = "/png/avatar-placeholder.png") {
  if (!raw) return placeholder;
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  try {
    return encodeURI(withLeading);
  } catch {
    return placeholder;
  }
}

export default function GraduatedMSPage() {
  const alumni = allAlumniData.graduatedMS ?? [];

  return (
    <div className="w-full px-2 sm:px-4 py-10 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-10">
        Graduated MS Alumni
      </h1>

      {/* FULL WIDTH GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {alumni.map((person, index) => {
          const key = person.id ?? person.rollno ?? person.name ?? index;

          const rawImg =
            (person as any).imageUrl ||
            (person as any).img ||
            (person as any).image;

          const imgSrc = normalizeImgPath(rawImg, "/png/avatar-placeholder.png");
          const displayRoll = person.rollno ?? person.id ?? "";

          return (
            <div
              key={key}
              className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <img
                src={imgSrc}
                className="w-32 h-32 mx-auto rounded-full object-cover border"
                alt={person.name ?? "Alumnus"}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.fallback) {
                    target.src = "/png/avatar-placeholder.png";
                    target.dataset.fallback = "1";
                  }
                }}
              />

              {/* NAME */}
              <h3 className="font-bold mt-4 text-lg text-gray-900">
                {person.name}
              </h3>

              {/* ROLL NUMBER */}
              {displayRoll && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Roll No:</span> {displayRoll}
                </p>
              )}

              {/* SUPERVISOR */}
              {person.supervisor && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Supervisor:</span>{" "}
                  {person.supervisor}
                </p>
              )}

              {/* YEAR */}
              {person.yearOfGraduation && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Year:</span>{" "}
                  {person.yearOfGraduation}
                </p>
              )}

              {/* SPECIALIZATION */}
              {person.specialization && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Specialization:</span>{" "}
                  {person.specialization}
                </p>
              )}

              {/* VIEW PROFILE BUTTON */}
              {person.profileLink && (
                <a
                  href={person.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
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
