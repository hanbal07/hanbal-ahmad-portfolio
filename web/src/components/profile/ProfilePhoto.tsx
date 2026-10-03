"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

/**
 * Hero portrait.
 * Points at `siteConfig.profileImage` (default `/profile/hanbal-ahmad.webp`).
 * If the file is missing or fails to load, we render a monogram tile so the
 * hero never shows a broken image.
 */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-gradient-to-br from-surface-2 to-canvas">
        <div className="text-center">
          <span className="text-[72px] font-semibold leading-none text-accent">
            {siteConfig.name.charAt(0)}
          </span>
          <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-3">
            {siteConfig.name}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={siteConfig.profileImage}
      alt={`Portrait of ${siteConfig.name}`}
      width={800}
      height={1000}
      priority
      sizes="(max-width: 640px) 90vw, 420px"
      className="h-auto w-full"
      onError={() => setFailed(true)}
    />
  );
}