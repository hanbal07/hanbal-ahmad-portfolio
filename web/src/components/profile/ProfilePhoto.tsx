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
          <span className="text-gradient font-mono text-[72px] font-semibold leading-none">
            {siteConfig.name.charAt(0)}
          </span>
          <p className="mono-label mt-4 text-[10px] tracking-wider text-ink-3">
            portrait pending
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