"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";

type PrivateProps = {
  text: string;
  highlightedText: string;
};

export function HeroHighlightComponent({
  text,
  highlightedText,
}: PrivateProps) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold -700 dark: max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {text} <br />
        <Highlight className="text-white text-xl md:text-2xl lg:text-5xl xl:text-5xl mt-10">
          {highlightedText}
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
