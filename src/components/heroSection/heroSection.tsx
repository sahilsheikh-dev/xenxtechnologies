import * as React from "react";
import { ThreeDHeroElement } from "./3dHeroElementComponent";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";

export interface IAppProps {}

export function HeroSection(props: IAppProps) {
  return (
    <section className="">
      <div className="header">
        <div className="header__background"></div>
        <div className="px-6 text-center lg:text-left mx-auto">
          <div className="w-100 mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-1 mx-auto">
              <div className="lg:mb-0 mx-auto">
                <ThreeDHeroElement />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
