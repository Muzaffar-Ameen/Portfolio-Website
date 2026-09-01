import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import FeaturedProjects from "../components/projects/FeaturedProjects";
import ProjectFilters from "../components/projects/ProjectFilters";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1800px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          {/* Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold tracking-[0.16em] text-primary">
                04
              </span>

              <span className="h-px w-10 bg-border-strong" />

              <span className="text-sm font-medium tracking-[0.12em] text-text-secondary">
                MY WORK
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-text-primary sm:text-5xl lg:text-6xl">
              Projects{" "}
              <span className="bg-gradient-to-r from-[#4b31c9] to-[#2563eb] bg-clip-text text-transparent">
                I've Built
              </span>
            </h2>

            <p className="mt-6 max-w-[620px] text-sm leading-7 text-text-secondary sm:text-base lg:text-[17px]">
              Explore a selection of full-stack web applications and automation
              solutions I've developed. Each project is built with clean code,
              modern design and real-world impact.
            </p>
          </div>

          {/* Desktop Filters ONLY */}
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

        {/* Featured Projects */}
        <FeaturedProjects
          activeFilter={activeFilter}
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          onFilterChange={setActiveFilter}
        />

        {/* View All */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            to="/projects"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-primary px-7 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light sm:text-base"
          >
            <Icon icon="solar:folder-with-files-linear" className="text-xl" />

            <span>View All Projects</span>

            <Icon
              icon="solar:arrow-right-linear"
              className="text-xl transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
