import * as React from "react";

export default function TestimonialCard({
  imgUrl,
  clientName,
  position,
  company,
  review,
}: any) {
  return (
    <>
      <div className="text-sm leading-6">
        <div className="relative group">
          <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-red-600 to-red-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
            <div className="flex items-center space-x-4">
              <img
                src={imgUrl}
                className="w-12 h-12 bg-center bg-cover border rounded-full"
                alt=""
              />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {clientName}
                </h3>
                <p className="text-gray-500 text-md">
                  {position} &amp; {company}
                </p>
              </div>
            </div>
            <p className="leading-normal text-gray-300 text-md">{review}</p>
          </div>
        </div>
      </div>
    </>
  );
}
