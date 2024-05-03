import * as React from "react";
import GradientButton from "../common/buttonComponents/gradient-button";
import { ThreeDHeroElement } from "./3dHeroElementComponent";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";

export interface IAppProps {}

export function HeroSection(props: IAppProps) {
  return (
    <section className="mb-48">
      <div className="px-6 py-12 text-center md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-1">
            {/* <div className="mt-12 lg:mt-0">
              <p className="mb-4 text-md md:text-xl xl:text-xl">
                Hello, we are
              </p>
              <h1 className="mt-2 text-5xl font-bold tracking-tight text-3xl md:text-6xl xl:text-7xl">
                Xenx Technologies
              </h1>
              <p className="my-6 text-xl md:text-2xl xl:text-3xl">
                Assist clients in generating significant revenue from websites!
              </p>
              <GradientButton text="Contact Now!" path="/contact" />
            </div> */}
            <div className="lg:mb-0">
              <ThreeDHeroElement imgurl="https://xenxtechnologies.netlify.app/static/media/hero-image.832da2715c1b1dabdad3.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
