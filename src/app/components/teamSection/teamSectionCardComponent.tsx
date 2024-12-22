import * as React from "react";
import TeamSectionCard from "./teamSectionCard";
import UserImg from "../../assets/images/teams/man.png";

export default function TeamSectionCardComponent() {
  const teamDetails = [
    {
      imageUrl:
        "https://drive.google.com/thumbnail?id=18uiB5GlAOkmykXo4C2TEDvhSuSAmmJTf",
      name: "Sahil Aspak Sheikh",
      position: "Founder and Senior Software Developer Engineer",
    },
    {
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1qSZ6fWFaOhM2HhMHM1QDw7JtBcIoodYZ",
      name: "Sohel Khan Pathan",
      position: "Co-Founder and Operation Manager",
    },
    {
      imageUrl:
        "https://drive.google.com/thumbnail?id=1ZJiU_KULNgYeat1fUFWXDZYia_p5txlM",
      name: "Mohamad Shoheb Mohamad Nasir",
      position: "Business Analytics/Business Development Manager (BDM)",
    },
  ];
  return (
    <>
      <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12 mt-0 pt-0">
        {teamDetails.map((team, index) => (
          <TeamSectionCard
            key={index}
            imageUrl={team.imageUrl}
            name={team.name}
            position={team.position}
          />
        ))}
      </div>
    </>
  );
}
