"use client";

import React, { useState } from "react";
import { allAlumniData } from "@/lib/alumniData";

/** Types for alumni data */
interface AlumniPerson {
  id?: string;
  rollno?: string;
  name?: string;
  imageUrl?: string;
  img?: string;
  image?: string;
  specialization?: string;
  supervisor?: string;
  yearOfGraduation?: string | number;
  profileLink?: string;
}

/** Normalize image path: add leading slash + encode spaces/brackets */
function normalizeImgPath(raw?: string | null, fallback = "/alumini/default-avatar.jpg"): string {
  if (!raw) return fallback;

  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;

  try {
    return encodeURI(withLeading);
  } catch {
    return fallback;
  }
}

/** Client-side fallback image component */
interface ImageWithFallbackProps {
  src?: string | null;
  alt?: string;
  className?: string;
  fallback?: string;
}

function ImageWithFallback({ src, alt = "", className, fallback = "/alumini/default-avatar.jpg" }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallback);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (fallback && currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}

export default function GraduatedMTechPage() {
  const alumni: AlumniPerson[] = (allAlumniData?.graduatedMTech as AlumniPerson[]) || [];
  const FALLBACK = "/alumini/default-avatar.jpg";

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-900">Graduated MTech Alumni</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {alumni.map((person, index) => {
          const rawSrc =
            person.imageUrl ||
            person.img ||
            person.image ||
            FALLBACK;

          const imgSrc = normalizeImgPath(rawSrc, FALLBACK);

          const keyValue =
            person.rollno ||
            person.id ||
            `${person.name ?? "alumni"}-${index}`;

          return (
            <div
              key={keyValue}
              className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-200"
            >
              <ImageWithFallback
                src={imgSrc}
                fallback={FALLBACK}
                alt={person.name || "Alumni"}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />

              <h3 className="font-bold mt-4 text-lg">{person.name}</h3>

              {person.rollno && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Roll No:</span> {person.rollno}
                </p>
              )}

              {person.specialization && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Specialization:</span>{" "}
                  {person.specialization}
                </p>
              )}

              {person.supervisor && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Supervisor:</span>{" "}
                  {person.supervisor}
                </p>
              )}

              {person.yearOfGraduation && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Graduation Year:</span>{" "}
                  {person.yearOfGraduation}
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
