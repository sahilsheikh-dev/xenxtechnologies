"use client";
import React from "react";
import { FloatingNav } from "./navbar-menu";
import {
  IconBriefcase,
  IconDeviceLaptop,
  IconHome,
  IconStars,
  IconUser,
} from "@tabler/icons-react";

export function NavbarSection() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Work",
      link: "/work",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Services",
      link: "/services",
      icon: (
        <IconDeviceLaptop className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Testimonial",
      link: "/testimonial",
      icon: <IconStars className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
