import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <p className="mb-3 text-sm font-medium text-cyan-200">404</p>
        <h1 className="text-3xl font-semibold text-foreground">This route is offline.</h1>
        <p className="mt-4 text-muted-foreground">
          The portfolio is a single-page experience. Head back to the main page to explore
          Nalin&apos;s AI/ML work.
        </p>
        <Button asChild className="mt-7">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
