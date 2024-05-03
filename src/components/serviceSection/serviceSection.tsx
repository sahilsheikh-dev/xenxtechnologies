import * as React from "react";
import ThreeDServiceCard from "./serviceCardComponent";
import { HeroHighlightComponent } from "../common/heroHighlight/hero-highlightComponent";

export function ServiceSection() {
  return (
    <>
      <div className="text-center lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <HeroHighlightComponent text="Here are the" highlightedText="Services we Provide"  />
          <div className="grid items-center gap-2 lg:grid-cols-4">
            <div className="lg:mt-0">
              <ThreeDServiceCard
                title="Web Development"
                imgUrl=""
                description="Resolve business challenges and thrive in the digital landscape with our custom web development services."
                price="14,999"
              />
            </div>
            <div className="lg:mb-0">
              <ThreeDServiceCard
                title="Mobile Development"
                imgUrl=""
                description="Transform your vision into reality with our native Android and iOS app development services."
                price="19,999"
              />
            </div>
            <div className="lg:mb-0">
              <ThreeDServiceCard
                title="UI UX Design"
                imgUrl=""
                description="Create delightful experiences and boost user engagement with our design solutions driven by our team."
                price="6,999"
              />
            </div>
            <div className="lg:mb-0">
              <ThreeDServiceCard
                title="ECommerce Solutions"
                imgUrl=""
                description="Created e-commerce platform with payment gateways, inventory management, and more."
                price="19,999"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
