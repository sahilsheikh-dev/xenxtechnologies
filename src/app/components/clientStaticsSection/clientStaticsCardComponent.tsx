import * as React from "react";
import ClientImg1 from "../../assets/images/client/client1.png";
import ClientImg2 from "../../assets/images/client/client2.png";
import ClientImg3 from "../../assets/images/client/client3.png";
import ClientImg4 from "../../assets/images/client/client4.png";
import ClientImg5 from "../../assets/images/client/client5.png";
import ClientImg6 from "../../assets/images/client/client6.png";
import ClientStaticCard from "./clientStaticsCard";

export default function ClientStaticCardComponent() {
  const clientImages = [
    ClientImg1,
    ClientImg2,
    ClientImg3,
    ClientImg4,
    ClientImg5,
    ClientImg6,
  ];

  return (
    <>
      <div className="grid grid-flow-col auto-cols-max p-10">
        {clientImages.map((clientImg, index) => (
          <ClientStaticCard clientImg={clientImg} key={index} />
        ))}
      </div>
    </>
  );
}
