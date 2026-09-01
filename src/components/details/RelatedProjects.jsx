import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function RelatedProjects({ projects, currentSlug }) {
  const relatedProjects = useMemo(() => {
    const currentProject = projects.find(
      (project) => project.slug === currentSlug,
    );

    const filteredProjects = projects.filter(
      (project) => project.slug !== currentSlug,
    );

    if (!currentProject) {
      return filteredProjects;
    }

    return [...filteredProjects].sort((a, b) => {
      const aCategories = a.categories ?? [];
      const bCategories = b.categories ?? [];
      const currentCategories = currentProject.categories ?? [];

      const aMatches = aCategories.filter((category) =>
        currentCategories.includes(category),
      ).length;

      const bMatches = bCategories.filter((category) =>
        currentCategories.includes(category),
      ).length;

      return bMatches - aMatches;
    });
  }, [projects, currentSlug]);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!relatedProjects.length) {
    return null;
  }

  const totalProjects = relatedProjects.length;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  };

  const getProject = (offset) => {
    return relatedProjects[
      (currentIndex + offset + totalProjects) % totalProjects
    ];
  };

  const leftProject = getProject(-1);
  const centerProject = getProject(0);
  const rightProject = getProject(1);

  const ProjectCard = ({ project, featured = false }) => {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className={`group relative block overflow-hidden rounded-[24px] border border-border bg-surface transition-all duration-500 ${
          featured
            ? "shadow-[0_25px_70px_rgba(37,31,77,0.15)]"
            : "opacity-95 shadow-[0_15px_45px_rgba(37,31,77,0.09)] hover:opacity-100"
        }`}
      >
        {/* Image */}
        <div className="relative aspect-[1.55] w-full overflow-hidden bg-surface-muted">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/5">
              <Icon
                icon="solar:code-square-linear"
                className="text-6xl text-primary/20"
              />
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

          {project.featured && (
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-primary shadow-lg backdrop-blur-md">
              <Icon icon="solar:star-bold" />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className={
            featured ? "px-5 py-5 sm:px-6 sm:py-6" : "px-4 py-4 sm:px-5 sm:py-5"
          }
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
            {project.category}
          </span>

          <h3
            className={`mt-2 font-bold leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary ${
              featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">
            {project.shortDescription || project.description}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View Project
              <Icon
                icon="solar:arrow-right-linear"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <Icon icon="solar:layers-bold" className="text-base" />
            Related Projects
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Explore More
            <span className="ml-2 text-secondary">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            Explore other projects built across different technologies,
            industries, and digital product categories.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12 lg:mt-14">
          <div className="flex items-center justify-center">
            {/* Previous */}
            {totalProjects > 1 && (
              <button
                type="button"
                aria-label="Previous project"
                onClick={handlePrevious}
                className="mr-4 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-white lg:flex"
              >
                <Icon icon="solar:arrow-left-linear" className="text-xl" />
              </button>
            )}

            {/* Viewport */}
            <div className="relative w-full max-w-[1400px] overflow-hidden">
              <div className="flex items-center justify-center gap-0">
                {/* Left */}
                {totalProjects > 1 && (
                  <div className="hidden w-[360px] shrink-0 lg:block">
                    <ProjectCard project={leftProject} />
                  </div>
                )}

                {/* Center */}
                <div className="relative z-20 w-full max-w-[525px] shrink-0 lg:w-[525px]">
                  <ProjectCard project={centerProject} featured />
                </div>

                {/* Right */}
                {totalProjects > 1 && (
                  <div className="hidden w-[360px] shrink-0 lg:block">
                    <ProjectCard project={rightProject} />
                  </div>
                )}
              </div>
            </div>

            {/* Next */}
            {totalProjects > 1 && (
              <button
                type="button"
                aria-label="Next project"
                onClick={handleNext}
                className="ml-4 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-white lg:flex"
              >
                <Icon icon="solar:arrow-right-linear" className="text-xl" />
              </button>
            )}
          </div>

          {/* Mobile Controls */}
          {totalProjects > 1 && (
            <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
              <button
                type="button"
                aria-label="Previous project"
                onClick={handlePrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-white active:scale-95"
              >
                <Icon icon="solar:arrow-left-linear" />
              </button>

              <div className="flex items-center gap-1.5">
                {relatedProjects.map((project, index) => (
                  <button
                    key={project.slug}
                    type="button"
                    aria-label={`Show ${project.title}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-7 bg-primary"
                        : "w-2 bg-border-strong"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next project"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-white active:scale-95"
              >
                <Icon icon="solar:arrow-right-linear" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default RelatedProjects;

