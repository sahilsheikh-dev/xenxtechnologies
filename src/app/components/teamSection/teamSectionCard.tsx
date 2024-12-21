import * as React from "react";
import UserImg from "../../assets/images/teams/man.png";
import Image from "next/image";

export default function TeamSectionCard({ imageUrl, name, position }: any) {
  return (
    <>
      <div
        className="mb-6 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] lg:mb-0 border border-red-700 mx-auto mt-0 pt-0"
        style={{ minWidth: "400px", maxWidth: "90%" }}
      >
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat bg-white p-3"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Image
            src={imageUrl}
            alt="image url"
            className="w-full rounded-t-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div className="p-6">
          <h5 className="text mb-2 pb-2 border-b-2">{name}</h5>
          <h5 className="text-lg font-bold">{position}</h5>
        </div>
      </div>
    </>
  );
}
