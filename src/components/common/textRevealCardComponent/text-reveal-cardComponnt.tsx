"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center rounded-2xl">
      <TextRevealCard text="Xenx Technologies" revealText="Xenx Technologies" />
    </div>
  );
}
