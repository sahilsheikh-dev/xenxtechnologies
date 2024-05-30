import * as React from "react";

export default function ProjectSectionCard({
  imageUrl,
  name,
  projectUrl,
}: any) {
  return (
    <>
      <div
        className="mb-6 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] lg:mb-0 border border-red-700 mx-auto mt-0 pt-0"
        style={{ maxWidth: "90%" }}
      >
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={imageUrl} className="w-full rounded-t-lg" />
          <a href={projectUrl} target="_blank">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[rgb(187,32,32,50%)]"></div>
          </a>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold">{name}</h5>
        </div>
      </div>
    </>
  );
}
