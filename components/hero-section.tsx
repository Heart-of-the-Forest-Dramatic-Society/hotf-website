"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-8 sm:py-12 md:py-16">
      <div className="w-full">
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-700 dark:text-slate-300 leading-tight">
          {"Welcome to the Heart of the Forest Dramatic Society"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-1.5 sm:mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-2xl px-4 py-4 sm:py-6 text-center text-base sm:text-lg md:text-xl font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed"
        >
          The Heart of the Forest Dramatic Society is a community-driven theatre
          charity group that produces magical pantomimes for the whole family.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 max-w-lg mx-auto"
        >
          <Button
            asChild
            className="w-full sm:w-56 h-12 sm:h-11 transform rounded-lg bg-black px-6 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <Link href="/tickets">Buy Tickets</Link>
          </Button>
          <Button
            asChild
            className="w-full sm:w-56 h-12 sm:h-11 transform rounded-lg border border-gray-300 bg-white px-6 text-base font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
          >
            <Link href="/about">About Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
