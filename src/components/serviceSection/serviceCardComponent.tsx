"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./serviceCard";

const ThreeDServiceCard = ({ title, imgUrl, description, price }: any) => {
  return (
    <CardContainer className="m-0 mb-6">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem] rounded-xl p-6 border border-zinc w-screen mx-0 bg-gradient-to-r from-transparent to-zinc-800">
        <CardItem translateZ="100" className="w-full">
          <Image
            src={imgUrl}
            height="1000"
            width="1000"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl mb-4"
            alt="thumbnail"
            style={{ maxWidth: "50px" }}
          />
        </CardItem>
        <CardItem translateZ="50" className="text-xl font-bold ">
          {title}
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-sm text-neutral-500 mt-2 mb-4"
        >
          Starts from{" "}
          <span className="text-xl font-bold ">₹{price}/-</span>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDServiceCard;
