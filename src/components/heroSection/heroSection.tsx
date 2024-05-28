import * as React from "react";
import { ThreeDHeroElement } from "./3dHeroElementComponent";

export interface IAppProps {}

export function HeroSection(props: IAppProps) {
  return (
    <section className="">
      <div className="header blob-hero">
        <div className="header__background"></div>
        <div className="px-6 lg:text-left mx-auto w-screen">
          <div className="w-100 mx-auto">
            <div className="lg:mb-0 mx-auto">
              {/* <ThreeDHeroElement /> */}
              <div id="center">
                <div id="left">
                  <h3>
                    Xenx Technologies is a multi-disciplinary agency focused on
                    creating unique, end-to-end software solutions.
                  </h3>
                </div>
                <div id="right">
                  <h1>
                    SOFTWARE <br />
                    THAT <br />
                    INSPIRE
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
