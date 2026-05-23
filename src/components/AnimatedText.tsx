import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });

  const characters = useMemo(() => text.split(''), [text]);

  return (
    <motion.p
      ref={ref}
      className="relative mx-auto max-w-[560px] text-center whitespace-pre-wrap font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)] text-[#D7E2EA]"
    >
      {characters.map((char, index) => {
        const start = Math.max(0, index / characters.length - 0.08);
        const end = Math.min(1, start + 0.25);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={`${char}-${index}`} className="relative inline-block">
            <motion.span style={{ opacity }} className="absolute inset-0">
              {char}
            </motion.span>
            <span className="invisible">{char}</span>
          </span>
        );
      })}
    </motion.p>
  );
}
