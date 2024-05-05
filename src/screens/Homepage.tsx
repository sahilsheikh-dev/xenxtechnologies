// import { HeroParallaxSection } from "@/components/heroSection/hero-parallaxComponent";
import { ClientStaticsSection } from "@/components/clientStaticsSection/clientStaticsSection";
import { HeroSection } from "@/components/heroSection/heroSection";
import ProjectSection from "@/components/projectSection/projectSection";
import { ServiceSection } from "@/components/serviceSection/serviceSection";
import { TechnologySection } from "@/components/technologiesSection/technologySection";
import { TestimonialSection } from "@/components/testimonialSection/testimonialSection";
import * as React from "react";

export default function Homepage(props: any) {
  return (
    <>
      <HeroSection />
      <ClientStaticsSection />
      <TechnologySection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
    </>
  );
}
