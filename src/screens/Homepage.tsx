import { HeroSection } from "@/components/heroSection/heroSection";
import { ServiceSection } from "@/components/serviceSection/serviceSection";
import { TestimonialSection } from "@/components/testimonialSection/testimonialSection";
import * as React from "react";

export default function Homepage(props: any) {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <TestimonialSection />
    </>
  );
}
