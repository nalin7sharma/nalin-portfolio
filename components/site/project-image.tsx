"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff, Layers3 } from "lucide-react";

type ProjectImageProps = {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
};

export function ProjectImage({ src, alt, title, priority = false }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-64 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_45%),linear-gradient(135deg,#020617,#111827)] p-6 text-center">
        <div>
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            <ImageOff className="size-5" />
          </div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-2 text-xs text-muted-foreground">Project visual unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        onError={() => setFailed(true)}
      />
      <div className="pointer-events-none absolute right-4 top-4 flex size-9 items-center justify-center rounded-md border border-cyan-300/20 bg-slate-950/60 text-cyan-100 backdrop-blur-md">
        <Layers3 className="size-4" />
      </div>
    </>
  );
}
