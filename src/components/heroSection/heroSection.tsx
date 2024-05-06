import * as React from "react";
import GradientButton from "../common/buttonComponents/gradient-button";
import { ThreeDHeroElement } from "./3dHeroElementComponent";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";

export interface IAppProps {}

export function HeroSection(props: IAppProps) {
  return (
    <section className="">
      <div className="px-6 py-24 text-center md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-1">
            <div className="lg:mb-0">
              <ThreeDHeroElement />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
