// import { HeroParallaxSection } from "@/components/heroSection/hero-parallaxComponent";
import { ClientStaticsSection } from "@/app/components/clientStaticsSection/clientStaticsSection";
import ContactSection from "@/app/components/contactSection/contactSection";
import { HeroSection } from "@/app/components/heroSection/heroSection";
import ProjectSection from "@/app/components/projectSection/projectSection";
import { ServiceSection } from "@/app/components/serviceSection/serviceSection";
import { TechnologySection } from "@/app/components/technologiesSection/technologySection";
import { TestimonialSection } from "@/app/components/testimonialSection/testimonialSection";
import * as React from "react";

export default function Homepage(props: any) {
  return (
    <>
      <HeroSection />
      <TechnologySection />
      <ClientStaticsSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
