import * as React from "react";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";
import webDevelopmentIcon from "../../assets/images/service/service-img1.png";
import mobileDevelopmentIcon from "../../assets/images/service/service-img2.png";
import uiuxDesignIcon from "../../assets/images/service/service-img3.png";
import ecommerceSolutionIcon from "../../assets/images/service/service-img4.png";
import GradientButton from "../common/buttonComponents/gradient-button";
import { TechnologyCardComponent } from "./technologyCardComponent";

export function TechnologySection() {
  return (
    <>
      <div className="text-center lg:text-left mb-48">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-2 lg:grid-cols-2">
            <div className="lg:mt-0">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">
                Technologies
              </h1>
              <p
                className="mt-5 text-neutral-500 text-xl mb-6 mx-auto md:mx-0 lg:mx-0 xl:mx-0"
                style={{ maxWidth: "95%" }}
              >
                We work with over 20 diverse technologies, incorporating the
                latest and most renowned tech stacks and platforms.
              </p>
            </div>
            <div
              className="lg:mb-0 mx-auto"
              style={{
                maxWidth: "90%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TechnologyCardComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
