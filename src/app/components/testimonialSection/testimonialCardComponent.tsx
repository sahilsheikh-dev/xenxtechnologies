import * as React from "react";
import TestimonialCard from "./testimonialCard";

export default function TestimonialCardComponent() {
  const testimonials = [
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/testimonials%2Fmustaquim.jpeg?alt=media&token=33952fe3-c4af-42e6-b4a6-59f149daf7cc",
      clientName: "Mustaquim Khan",
      position: "Civil Engineer",
      company: "Khan Constructions",
      review:
        "Xenx delivered an outstanding personal portfolio with expertise, professionalism, and attention to detail, exceeding expectations. Highly recommended.",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/testimonials%2Fdevanshu.jpg?alt=media&token=ec8468d7-f845-44b9-9856-df3407241e49",
      clientName: "Devanshu Kumar",
      position: "Lead of Operations",
      company: "Takniik",
      review:
        "The work on our website was excellent, creativity, and professionalism. We are pleased with the outcome & would gladly recommend your services.",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/testimonials%2Fuser-icon.png?alt=media&token=bcc4e6a7-8a5f-4504-b69e-75a359a4ac26",
      clientName: "Mr. Mike Morse",
      position: "Managing Head",
      company: "Marketing Company",
      review:
        "Amazing job on our 3D website. Your work, dedication, creativity, and execution exceeded expectations. Thank you for your invaluable contribution.",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/testimonials%2Fuser-icon.png?alt=media&token=bcc4e6a7-8a5f-4504-b69e-75a359a4ac26",
      clientName: "Sarah Lee",
      position: "Marketing Manager",
      company: "",
      review:
        "Hey Team Xenx, Wow! The 3D animated website you developed for Radiant Digital Solutions is simply breathtaking. It perfectly captures the essence of our cutting-edge technology. Great job!",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/testimonials%2Fuser-icon.png?alt=media&token=bcc4e6a7-8a5f-4504-b69e-75a359a4ac26",
      clientName: "Michael Brown",
      position: "Owner",
      company: "",
      review:
        "Thanks Sahil, I'm blown away by the 3D animated website you created for EcoTech Ventures. The attention to detail and the realistic representations of our products are truly impressive. Great work!",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/testimonials%2Fuser-icon.png?alt=media&token=bcc4e6a7-8a5f-4504-b69e-75a359a4ac26",
      clientName: "Robert Anderson",
      position: "Project Manager",
      company: "",
      review:
        "Hey Sahil, I'm extremely pleased with the 3D animated website you created for Prismatic Web Design. The attention to detail and the realistic animations are truly remarkable. Thanks for the fantastic work!",
    },
  ];

  return (
    <>
      <section id="testimonies" className="">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((item, index) => (
              <TestimonialCard
                imgUrl={item.imgUrl}
                clientName={item.clientName}
                position={item.position}
                company={item.company}
                review={item.review}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
