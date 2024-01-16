"use client";

import TransitionEffect from "@/components/portfolio/transitionEffect";
import { usePathname } from "next/navigation";
import React from "react";

export default function NotFoundPage() {
  const pathname = usePathname();

  return (
    <>
      <TransitionEffect />
      <article className="flex min-h-screen items-center text-center text-dark dark:text-light sm:items-start">
        <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16">
          <h1 className="text-6xl font-semibold mb-8">404 - Page Not Found</h1>
          <p className="text-xl font-medium">
            It seems that the page you are looking for does not exist.
          </p>

          {/* PATH */}
          <p className="text-xl font-medium mt-4">
            You were looking for: <span className="italic">{pathname}</span>
          </p>
        </div>
      </article>
    </>
  );
}
