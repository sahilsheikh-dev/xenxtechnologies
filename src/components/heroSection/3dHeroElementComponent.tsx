"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3dHeroElement";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";
import GradientButton from "../common/buttonComponents/gradient-button";

export function ThreeDHeroElement() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl px-6">
        <CardItem translateZ="100" className="w-full mt-4 text-center">
          <>
            <HeroHighlightComponent
              text="Assist clients in generating significant revenue from websites!"
              highlightedText="Xenx Technologies"
            />
            <GradientButton text="Contact Now!" path="tel:+918766509387" />
          </>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
