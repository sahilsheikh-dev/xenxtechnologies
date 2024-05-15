import * as React from "react";
import { ThreeDHeroElement } from "./3dHeroElementComponent";

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
                <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-7xl custom-in">
                  Assist clients in generating significant revenue from
                  websites!
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-7xl text-red-700 font-bold py-5 custom-in">
                  Xenx Technologies
                </h1>
                {/* <ThreeDHeroElement /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
