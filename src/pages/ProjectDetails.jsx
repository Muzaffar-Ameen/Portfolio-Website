import { Navigate, useParams } from "react-router-dom";
import { projectsData } from "../data/projects";
import ProjectGallery from "../components/details/ProjectGallery";

import ProjectDetailHero from "../components/details/ProjectDetailHero";
import ProjectOverview from "../components/details/ProjectOverview";
import ProjectChallengeSolution from "../components/details/ProjectChallengeSolution";
import ProjectFeatures from "../components/details/ProjectFeatures";
import ProjectResults from "../components/details/ProjectResults";
import ProjectDesignProcess from "../components/details/ProjectDesignProcess";
import RelatedProjects from "../components/details/RelatedProjects";
import ProjectCTA from "../components/details/ProjectCTA";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="bg-background text-text-primary">

      {/* Project Hero */}
      <ProjectDetailHero project={project} />

      {/* Project Overview */}
      <ProjectOverview project={project} />

      {/* Challenge + Solution */}
      <ProjectChallengeSolution project={project} />

      {/* Key Features */}
      <ProjectFeatures project={project} />

      {/* Project Results */}
      <ProjectResults project={project} />

      {/* Design Process */}
      <ProjectDesignProcess project={project} />

      {/* Project Gallery */}
      <ProjectGallery project={project} />

      {/* Related Projects */}
      <RelatedProjects
        projects={projectsData}
        currentSlug={project.slug}
      />

      {/* Final CTA */}
      <ProjectCTA project={project} />

    </main>
  );
}

export default ProjectDetails;



