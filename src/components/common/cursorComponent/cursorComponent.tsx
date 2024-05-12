"use client";
import * as React from "react";
import gsap from "gsap";
import { useEffect } from "react";

export default function CursorComponent() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.getElementsByTagName("a");

    document.addEventListener("mousemove", function (e) {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX, y: clientY });
    });

    Array.from(links).forEach((link) => {
      link.addEventListener("mouseenter", function (e) {
        const link = e.target;
        gsap.to(cursor, { scale: 4 });
      });
      link.addEventListener("mouseleave", function (e) {
        gsap.to(cursor, { scale: 1 });
      });
    });
  });

  return (
    <>
      <div id="custom-cursor" className="custom-cursor"></div>
    </>
  );
}
