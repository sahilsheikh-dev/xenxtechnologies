"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./serviceCard";

type PrivateProps = {
  title: string;
  imgUrl: string;
  description: string;
  price: string;
};

const ThreeDServiceCard = ({
  title,
  imgUrl,
  description,
  price,
}: PrivateProps) => {
  return (
    <CardContainer className="m-0 mb-6">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem] rounded-xl p-6 border border-zinc w-screen mx-0">
        <CardItem translateZ="100" className="w-full">
          <Image
            src={imgUrl}
            height="50"
            width="50"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl mb-4"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-xl text-neutral-500 mt-2 mb-4"
        >
          Starts from{" "}
          <span className="text-xl font-bold text-white">₹{price}/-</span>
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
