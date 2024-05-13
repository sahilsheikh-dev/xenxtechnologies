"use client";
import React from "react";
import { AnimatedTooltip } from "./technologyCard";
import ReactJs from "../../assets/images/technologies/react.png";
import NextJs from "../../assets/images/technologies/nextjs-icon.png";
import JavaScript from "../../assets/images/technologies/javascript.png";
import Java from "../../assets/images/technologies/java.png";
import Android from "../../assets/images/technologies/android.png";
import Ios from "../../assets/images/technologies/ios.png";
import MoreImg from "../../assets/images/technologies/more.png";

const technologies = [
  {
    id: 1,
    name: "React Js",
    image: ReactJs,
  },
  {
    id: 5,
    name: "Next Js",
    image: NextJs,
  },
  {
    id: 6,
    name: "JavaScript",
    image: JavaScript,
  },
  {
    id: 7,
    name: "Java",
    image: Java,
  },
  {
    id: 10,
    name: "Android",
    image: Android,
  },
  {
    id: 12,
    name: "IOS",
    image: Ios,
  },
  {
    id: 13,
    name: "More",
    image: MoreImg,
  },
];

export function TechnologyCardComponent() {
  return (
    <div
      className="flex flex-row items-center justify-center mb-10 mx-auto"
      style={{ maxWidth: "90%" }}
    >
      <AnimatedTooltip items={technologies} />
    </div>
  );
}
