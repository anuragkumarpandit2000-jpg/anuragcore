import React from 'react';
import { motion } from 'framer-motion';

type FadeInProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
  tag?: T;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function FadeIn<T extends keyof JSX.IntrinsicElements = 'div'>({
  tag,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
  ...props
}: FadeInProps<T>) {
  const MotionComponent = (motion as any)[tag ?? 'div'] || motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export function ContactButton() {
  return (
    <a
      href="mailto:anuragkumar.pandit2000@gmail.com"
      className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(123deg,_#18011F_7%,_#B600A8_37%,_#7621B0_72%,_#BE4C00_100%)] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white outline outline-[2px] outline-white outline-offset-[-3px] shadow-[inset_4px_4px_12px_#7721B1]"
    >
      Contact Backend
    </a>
  );
}

export function LiveProjectButton() {
  return (
    <button className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10">
      Live Project
    </button>
  );
}
