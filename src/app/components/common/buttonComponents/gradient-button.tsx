"use client";
import React from "react";

export default function GradientButton({ text, url, path }: any) {
  return (
    <>
      <a
        href={url}
        onClick={(e) => {
          let sectionName = document.getElementById(path);
          e.preventDefault();
          sectionName &&
            sectionName.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }}
        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border border-red-700"
      >
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:">
          {text}
        </span>
      </a>
    </>
  );
}
