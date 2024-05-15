"use client";
import * as React from "react";
import gsap from "gsap";
import { useEffect } from "react";

export default function CursorComponent() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const cursorIns = document.getElementsByClassName("custom-in");
    const links = document.getElementsByTagName("a");

    document.addEventListener("mousemove", function (e) {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX, y: clientY });
    });

    Array.from(links).forEach((link) => {
      link.addEventListener("mouseenter", function (e) {
        const link = e.target;
        gsap.to(cursor, { scale: 20 });
      });
      link.addEventListener("mouseleave", function (e) {
        gsap.to(cursor, { scale: 1 });
      });
    });

    Array.from(cursorIns).forEach((cursorIn) => {
      cursorIn.addEventListener("mouseenter", function (e) {
        const cursorIn = e.target;
        gsap.to(cursor, { scale: 50 });
      });
      cursorIn.addEventListener("mouseleave", function (e) {
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
