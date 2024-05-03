"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3dHeroElement";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";
import GradientButton from "../common/buttonComponents/gradient-button";
import { motion } from "framer-motion";
import {
  HeroHighlight,
  Highlight,
} from "../common/heroHighlight/hero-highlight";

export function ThreeDHeroElement() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full mt-4 text-center">
          <>
            <HeroHighlightComponent
              text="Assist clients in generating significant revenue from websites!"
              highlightedText="Xenx Technologies"
            />
            <GradientButton text="Contact Now!" path="/contact" />
            {/* <Image
            src={imgurl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
          </>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
