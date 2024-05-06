import * as React from "react";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";
import ProjectSectionCardComponent from "./projectSectionCardComponent";

export default function ProjectSection() {
  return (
    <>
      {/* <div className="text-center lg:text-left py-24 mb-24 half-colored-red"> */}
      <div className="text-center lg:text-left py-20 mb-20">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <h3 className="text-xl font-bold text-red-700 text-center">
            Selected works
          </h3>
          <h1 className="text-4xl md:text-4xl lg:text-5xl text-center font-bold mb-10 md:mb-20 lg:mb-20 xl:mb-20">
            Check our Portfolio
          </h1>
          <ProjectSectionCardComponent />
        </div>
      </div>
    </>
  );
}
