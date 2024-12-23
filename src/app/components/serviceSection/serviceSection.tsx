import * as React from "react";
import ThreeDServiceCard from "./serviceCardComponent";
import webDevelopmentIcon from "../../assets/images/service/service-img1.png";
import mobileDevelopmentIcon from "../../assets/images/service/service-img2.png";
import uiuxDesignIcon from "../../assets/images/service/service-img3.png";
import ecommerceSolutionIcon from "../../assets/images/service/service-img4.png";
import GradientButton from "../common/buttonComponents/gradient-button";

export function ServiceSection() {
  const services = [
    {
      title: "Web Development",
      imgUrl: webDevelopmentIcon,
      description:
        "Resolve business challenges and thrive in the digital landscape with our custom web development services.",
      price: "14,999",
    },
    {
      title: "Mobile Development",
      imgUrl: mobileDevelopmentIcon,
      description:
        "Transform your vision into reality with our native Android and iOS app development services.",
      price: "19,999",
    },

    {
      title: "UI UX Design",
      imgUrl: uiuxDesignIcon,
      description:
        "Create delightful experiences and boost user engagement with our design solutions driven by our team.",
      price: "6,999",
    },

    {
      title: "ECommerce Solutions",
      imgUrl: ecommerceSolutionIcon,
      description:
        "Created e-commerce platform with payment gateways, inventory management, and more.",
      price: "19,999",
    },
  ];

  return (
    <>
      <div id="services" className="text-center lg:text-left mb-24">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-2 lg:grid-cols-2">
            <div className="lg:mt-0">
              <div className="p-6 mx-4">
                <h3 className="text-xl font-bold text-red-700">What We Do</h3>
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">
                  Our Services
                </h1>
                <p className="mt-5 text-neutral-500 text-lg mb-6">
                  We offer high quality services for competitive prices. Our
                  main goal is customer satisfaction, which we obtain through
                  market orientation of ongoing service and support.
                </p>
              </div>
            </div>

            {services?.map((serviceItem, key) => (
              <div className="lg:mb-0" key={key}>
                <ThreeDServiceCard
                  title={serviceItem.title}
                  imgUrl={serviceItem.imgUrl}
                  description={serviceItem.description}
                  price={serviceItem.price}
                />
              </div>
            ))}

            <div className="lg:mb-0 text-center">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-5">
                Do You Want <br /> Something Different?
              </h1>
              <GradientButton text="Contact Now!" url="/" path="contact" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
