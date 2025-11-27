
"use client";

import React, { useState } from "react";

interface ClientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback?: string;
  alt?: string;
  className?: string;
}

/**
 * Client-side image with safe onError fallback.
 * Put this in app/components/ClientImage.tsx and import from pages that are server components.
 */
export default function ClientImage({ src, fallback = "/png/avatar-placeholder.png", alt = "", className, ...rest }: ClientImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallback);
  const handleError = () => {
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback);
    }
  };

  return (
    // All event handlers allowed here because this is a client component
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...rest}
    />
  );
}
