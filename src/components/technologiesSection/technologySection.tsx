import * as React from "react";
import { TechnologyCardComponent } from "./technologyCardComponent";

export function TechnologySection() {
  return (
    <>
      <div className="text-center lg:text-left mb-28">
        <div className="text-center">
          <div
            className="lg:mt-0 mx-auto"
            style={{
              maxWidth: "90%",
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Technologies
            </h1>
            <p className="mt-5 text-neutral-500 text-xl mb-6 text-center">
              We work with over 20 diverse technologies, incorporating the
              latest and most renowned tech stacks and platforms.
            </p>
            <TechnologyCardComponent />
          </div>
        </div>
      </div>
    </>
  );
}
