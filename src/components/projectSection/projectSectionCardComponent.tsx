import * as React from "react";
import ProjectSectionCard from "./projectSectionCard";

export default function ProjectSectionCardComponent() {
  const projectDetails = [
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/projects%2Fkanban%2Fdashboard.png?alt=media&token=72fea23f-3de3-407d-90f3-827472702741",
      name: "Kanban Board",
      projectUrl: "https://kanbanboard-web.netlify.app/Login",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/projects%2Ftakniik%2Fhero%20and%20service%20section.png?alt=media&token=27e17a0f-0c04-4e42-a2a9-f155f8583882",
      name: "Takniik - Company Website",
      projectUrl: "https://takniik.netlify.app/",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/projects%2Ftechbitcrypto%2FDashboard.png?alt=media&token=8b10b2b3-a99e-45d3-abcc-b74fff75f7cd",
      name: "TechBitCrypto - Crypto Portal",
      projectUrl: "https://www.techbitcrypto.com/",
    },
  ];
  return (
    <div>
      <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
        {projectDetails.map((project, index) => (
          <ProjectSectionCard
            key={index}
            imageUrl={project.imageUrl}
            name={project.name}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
}
