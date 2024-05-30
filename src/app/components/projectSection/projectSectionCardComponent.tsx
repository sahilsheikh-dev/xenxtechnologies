import * as React from "react";
import ProjectSectionCard from "./projectSectionCard";

export default function ProjectSectionCardComponent() {
  const projectDetails = [
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/projects%2Fprojects%2F2.png?alt=media&token=1a834c69-6279-42e2-831a-a5e3550f7610",
      name: "Moonbeam - Company Website",
      projectUrl: "https://www.gomoonbeam.com/",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/projects%2Fprojects%2Fportfolio-images.png?alt=media&token=86bf3b46-11f4-404b-a946-a721b70abe6a",
      name: "Burger Cafe Website",
      projectUrl: "https://anandburger.netlify.app/",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-8cdcf.appspot.com/o/projects%2Fprojects%2F4.png?alt=media&token=6d91012b-975e-4fc8-8ec3-d0092adf89a8",
      name: "Product Website",
      projectUrl: "https://renderwork.studio/",
    },
  ];
  return (
    <>
      <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12 mt-0 pt-0">
        {projectDetails.map((project, index) => (
          <ProjectSectionCard
            key={index}
            imageUrl={project.imageUrl}
            name={project.name}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </>
  );
}
