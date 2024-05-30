import Image from "next/image";
import * as React from "react";

export default function ClientStaticCard({ clientImg }: any) {
  return (
    <>
      <div>
        <Image
          className="object-cover mx-10"
          src={clientImg}
          alt=""
          style={{ maxWidth: "100px" }}
        />
      </div>
    </>
  );
}
