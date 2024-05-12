"use client";
import React from "react";
import Image from "next/image";
import hamburgerSvg from "../../../assets/svg/burger-menu-right-svgrepo-com.svg";

export function NavbarSection() {
  
  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    // @ts-ignore: Object is possibly 'null'.
    sidebar.style.display = "flex";
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    // @ts-ignore: Object is possibly 'null'.
    sidebar.style.display = "none";
  }
  return (
    <>
      <nav className="px-6 py-3">
        <ul className="sidebar">
          <li onClick={hideSidebar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 96 960 960"
                width="26"
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="text-xl" href="#">
              Xenx Technologies
            </a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Home</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">About</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Work</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Services</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Testimonial</a>
          </li>
          <li className="menu-button" onClick={showSidebar}>
            <a className="text-white" href="#">
              <Image src={hamburgerSvg} alt="" style={{ maxWidth: "26px" }} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
