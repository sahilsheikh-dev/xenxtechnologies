import * as React from "react";
import NumberTickerComponent from "../common/numberTickerComponent/number-tickerComponent";

export function ClientStaticsSection() {
  return (
    <>
      <div className="text-center lg:text-left py-20 mb-10 bg-wave-svg">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 text-center">
            <div className="text-white">
              <NumberTickerComponent number="30" />
              <h1>Happy Clients</h1>
            </div>
            <div className="text-white">
              <NumberTickerComponent number="50" />
              <h1>Projects Done</h1>
            </div>
            <div className="text-white">
              <NumberTickerComponent number="40" />
              <h1>Web Projects</h1>
            </div>
            <div className="text-white">
              <NumberTickerComponent number="5" />
              <h1>Y&apos;s Experience</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
