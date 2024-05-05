import * as React from "react";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";
import ProjectSectionCardComponent from "./projectSectionCardComponent";

export default function ProjectSection() {
  return (
    <>
      <div className="text-center lg:text-left mb-48">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <HeroHighlightComponent
            text="Selected works"
            highlightedText="Check our Portfolio"
          />
          <ProjectSectionCardComponent />
        </div>
      </div>
    </>
  );
}
