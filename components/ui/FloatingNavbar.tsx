"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-2 rounded-2xl px-6 py-3 shadow-lg",
          "border border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/90",
          "md:min-w-[70vw] md:gap-6 md:px-8 lg:min-w-fit",
          className
        )}
        aria-label="Ana menü"
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "cursor-pointer text-sm font-medium transition-colors",
              "text-slate-600 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400"
            )}
          >
            {navItem.icon && <span className="sm:hidden">{navItem.icon}</span>}
            <span className="sm:inline">{navItem.name}</span>
          </Link>
        ))}
        <div className="ml-2 border-l border-slate-200 pl-2 dark:border-slate-600 md:ml-4 md:pl-4">
          <ThemeToggle />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
