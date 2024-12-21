import * as React from "react";
import TeamSectionCardComponent from "./teamSectionCardComponent";

export default function TeamSection() {
  return (
    <>
      {/* <div className="text-center lg:text-left py-24 mb-24 half-colored-red"> */}
      <div id="work" className="text-center lg:text-left py-20 mb-20">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <h3 className="text-xl font-bold text-red-700 text-center">
            The Team
          </h3>
          <h1 className="text-4xl md:text-4xl lg:text-5xl text-center font-bold mb-10 md:mb-20 lg:mb-20 xl:mb-20">
            Our Core Team Members
          </h1>
          <TeamSectionCardComponent />
        </div>
      </div>
    </>
  );
}
