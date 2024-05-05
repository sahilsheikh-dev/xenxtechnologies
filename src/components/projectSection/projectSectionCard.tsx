import * as React from "react";

export default function ProjectSectionCard({
  imageUrl,
  name,
  projectUrl,
}: any) {
  return (
    <div>
      <div
        className="mb-6 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] lg:mb-0 border border-red-700 mx-auto"
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
          <svg
            className="absolute left-0 bottom-0 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold">{name}</h5>
        </div>
      </div>
    </div>
  );
}
