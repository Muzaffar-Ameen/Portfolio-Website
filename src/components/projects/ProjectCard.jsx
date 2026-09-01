import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function ProjectCard({ project, featured = false }) {
  const hasLiveDemo = project.liveUrl && project.liveUrl !== "#";

  return (
    <div
      className={`group relative block w-full overflow-hidden rounded-[24px] border border-border bg-surface transition-all duration-500 ${
        featured
          ? "shadow-[0_25px_70px_rgba(37,31,77,0.15)]"
          : "opacity-95 shadow-[0_15px_45px_rgba(37,31,77,0.09)] hover:opacity-100"
      }`}
    >
      {/* Project Image */}
      <div className="relative w-full overflow-hidden bg-surface-muted aspect-[1.55]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-soft via-surface to-surface-muted">
            <div className="flex flex-col items-center gap-3 text-primary/40">
              <Icon icon="solar:code-square-linear" className="text-6xl" />
              <span className="text-sm font-semibold">Project Preview</span>
            </div>
          </div>
        )}

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-primary shadow-lg backdrop-blur-md">
            <Icon icon="solar:star-bold" className="text-sm" />
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div
        className={`bg-surface ${
          featured ? "px-5 py-5 sm:px-6 sm:py-6" : "px-4 py-4 sm:px-5 sm:py-5"
        }`}
      >
        {/* Title + Arrow */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3
              className={`font-bold leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary ${
                featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
              }`}
            >
              {project.title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm leading-6 text-text-secondary">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Category */}
        <div className="mt-4">
          <span className="inline-flex rounded-full bg-primary-light px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
            {project.category}
          </span>
        </div>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, featured ? 4 : 3)
              .map((technology) => (
                <span
                  key={technology.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-text-secondary"
                >
                  <Icon icon={technology.icon} className="text-base" />
                  <span>{technology.name}</span>
                </span>
              ))}
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-5 flex items-center border-t border-border pt-4">
          {/* Live Demo */}
          {hasLiveDemo ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="group/action inline-flex flex-1 items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary/80"
            >
              <Icon
                icon="mdi:open-in-new"
                className="text-lg transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5"
              />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 text-sm font-semibold text-text-secondary/50">
              <Icon icon="mdi:open-in-new" className="text-lg" />
              <span>Live Demo</span>
            </span>
          )}

          {/* Divider */}
          <span aria-hidden="true" className="h-7 w-px bg-border" />

          {/* View Details */}
          <Link
            to={`/projects/${project.slug}`}
            onClick={(event) => event.stopPropagation()}
            className="group/action inline-flex flex-1 items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary/80"
          >
            <span>View Details</span>

            <Icon
              icon="solar:arrow-right-linear"
              className="text-lg transition-transform duration-300 group-hover/action:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

