import * as React from "react";
import { ContactFormComponent } from "./contact-formComponent";

export default function ContactSection() {
  return (
    <>
      <div id="contact" className="text-center lg:text-left py-20 mb-20">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <h3 className="text-xl font-bold text-red-700 text-center">
            Get in Touch
          </h3>
          <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl mb-10 md:mb-10 lg:mb-10 xl:mb-10">
            Connect with Us
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="grid items-center gap-2 lg:grid-cols-2">
            <div className="lg:mt-0 mx-auto" style={{ maxWidth: "95%" }}>
              <p className="mb-10 text-lg">
                Please fill out the form on this section to contact with Us. Or
                call between 9:00 a.m. and 8:00 p.m. IST, Monday through Friday
              </p>
              <div className="contacts text-left">
                <div className="flex mb-5 mx-auto">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-sm md:text-lg lg:text-lg xl:text-lg leading-6 font-medium">
                      Phone number
                    </dt>
                    <a
                      href="tel:+918766509387"
                      className="mt-2 text-base text-gray-500 hover:text-red-700"
                    >
                      +91 876 650 9387
                    </a>
                  </div>
                </div>
                <div className="flex mx-auto">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium">Email</dt>
                    <a
                      href="mailto:xenxtechnologies@gmail.com"
                      className="mt-2 text-base text-gray-500 hidden md:block lg:block xl:block"
                    >
                      xenxtechnologies@gmail.com
                    </a>
                    <a
                      href="mailto:xenxtechnologies@gmail.com"
                      className="mt-2 text-base text-gray-500 block md:hidden lg:hidden xl:hidden"
                    >
                      Email Us Now!
                    </a>
                  </div>
                </div>
              </div>
              <div className="map mt-5">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14890.161235841037!2d79.06800351008935!3d21.09101465788742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d8518d644cdc2ad%3A0x900d1d1b6cf2a93e!2sXenx%20Technologies!5e0!3m2!1sen!2sin!4v1714993246414!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="lg:mt-0">
              <ContactFormComponent />
            </div>
          </div>
          {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
        </div>
      </div>
    </>
  );
}
