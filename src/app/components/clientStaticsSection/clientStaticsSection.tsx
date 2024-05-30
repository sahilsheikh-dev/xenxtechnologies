import * as React from "react";
import NumberTickerComponent from "../common/numberTickerComponent/number-tickerComponent";

export function ClientStaticsSection() {
  const clientStats = [
    {
      title: "Happy Clients",
      number: "30",
    },
    {
      title: "Projects Done",
      number: "50",
    },
    {
      title: "Web Projects",
      number: "40",
    },
    {
      title: "Y's Experience",
      number: "5",
    },
  ];

  return (
    <>
      <div className="text-center lg:text-left py-20 mb-10  bg-wave-svg-up">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 text-center">
            {clientStats?.map((clientStat, key) => (
              <div className="text-white" key={key}>
                <NumberTickerComponent number={clientStat.number} />
                <h1>{clientStat.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
