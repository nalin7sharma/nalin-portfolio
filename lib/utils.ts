import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  const siteUrl = "https://www.nalinsharma.co.in";
  return `${siteUrl}${path}`;
}
