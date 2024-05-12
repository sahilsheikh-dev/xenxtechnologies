"use client";
import * as React from "react";
import gsap from "gsap";
import { useEffect } from "react";

export default function CursorComponent() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.getElementsByTagName("a");
    const cursorText = document.getElementById("cursor-text");

    const onMouseMove = ({ event }: any) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = ({ event }: any) => {
      const link = event.target;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 });
        // cursorText.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      //   cursorText.style.display = "block";
    };

    document.addEventListener("mousemove", onMouseMove);
    Array.from(links).forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
  });

  return (
    <>
      <div id="custom-cursor" className="custom-cursor">
        <div id="cursor-text" className="cursor-text">
          View
        </div>
      </div>
    </>
  );
}
