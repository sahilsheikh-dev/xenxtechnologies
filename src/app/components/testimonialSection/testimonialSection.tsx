import * as React from "react";
import TestimonialCardComponent from "./testimonialCardComponent";

export function TestimonialSection() {
  return (
    <>
      <div id="testimonial" className="text-center lg:text-left py-20 mb-20">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <h3 className="text-xl font-bold text-red-700 text-center">
            Words from Others
          </h3>
          <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
            It&apos;s not just us.
          </h1>
          <p className="text-xl text-gray-100 md:text-center md:text-2xl mb-10 md:mb-20 lg:mb-20 xl:mb-20">
            Here&apos;s what others have to say about us.
          </p>
          <TestimonialCardComponent />
        </div>
      </div>
    </>
  );
}
