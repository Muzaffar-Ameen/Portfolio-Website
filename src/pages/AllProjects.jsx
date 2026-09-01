import { useState } from "react";
import { Icon } from "@iconify/react";

import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilters from "../components/projects/ProjectFilters";
import { projectsData } from "../data/projects";

function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories?.includes(activeFilter),
        );

  return (
    <main
      id="all-projects"
      className="min-h-screen bg-background px-4 py-20 text-text-primary sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1700px]">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
            <span className="text-xs font-bold tracking-[0.18em] text-primary md:text-[28px]">
              MY WORK
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              All Projects
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base lg:mx-0">
              Explore the projects I have built using modern technologies,
              scalable architectures and practical development approaches.
            </p>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block lg:justify-self-end">
            <ProjectFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              mobileOpen={mobileFiltersOpen}
              setMobileOpen={setMobileFiltersOpen}
              desktopOnly
            />
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="mt-8 flex justify-end lg:hidden">
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            mobileOpen={mobileFiltersOpen}
            setMobileOpen={setMobileFiltersOpen}
            mobileOnly
          />
        </div>

        {/* Projects */}
        {filteredProjects.length > 0 ? (
          <div className="mt-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-14 max-w-2xl rounded-[24px] border border-border bg-surface px-6 py-14 text-center">
            <Icon
              icon="solar:folder-open-linear"
              className="mx-auto text-5xl text-primary/50"
            />

            <h2 className="mt-5 text-2xl font-bold">No Projects Found</h2>

            <p className="mt-3 text-sm text-text-secondary">
              No projects are available in this category yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default AllProjects;
