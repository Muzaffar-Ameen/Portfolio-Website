import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function ProjectDetailHero({ project }) {
  const technologies = project.technologies ?? [];

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {project.image && (
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-[0.2]"
          />
        )}
      </div>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[480px] w-[480px] rounded-full bg-secondary/15 blur-[130px]" />

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute right-[2%] top-1/2 hidden h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />
      <div className="pointer-events-none absolute right-[7%] top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-primary/15 lg:block" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
        <div className="grid min-h-[680px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
          {/* LEFT CONTENT */}
          <div className="relative z-20">
            {/* Back */}
            {/* <Link
              to="/projects"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
            >
              <Icon
                icon="solar:arrow-left-linear"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Projects
            </Link> */}

            {/* Category */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {project.category}
            </div>

            {/* Title */}
            <h1 className="mt-6 max-w-[700px] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {project.title}
            </h1>

            {/* Tagline */}
            {project.tagline && (
              <p className="mt-5 max-w-[620px] text-lg font-medium leading-8 text-primary sm:text-xl">
                {project.tagline}
              </p>
            )}

            {/* Description */}
            <p className="mt-5 max-w-[620px] text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              {project.description}
            </p>

            {/* Technologies */}
            {technologies.length > 0 && (
              <div className="mt-7 flex max-w-[650px] flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <span
                    key={technology.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-xs font-medium text-white/75 backdrop-blur-sm sm:text-sm"
                  >
                    <Icon
                      icon={technology.icon}
                      className="text-base text-primary"
                    />
                    {technology.name}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4b31c9] to-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(75,49,201,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(75,49,201,0.4)]"
                >
                  <Icon icon="solar:link-linear" className="text-lg" />
                  Live Project
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    className="text-base"
                  />
                </a>
              )}

              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  <Icon icon="mdi:github" className="text-lg" />
                  View GitHub
                </a>
              )}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex items-center justify-center lg:min-h-[560px]">
            {/* Glow behind image */}
            <div className="pointer-events-none absolute h-[70%] w-[70%] rounded-full bg-primary/20 blur-[100px]" />

            {/* Image Wrapper */}
            <div className="relative z-10 w-full max-w-[720px]">
              {/* Back Shape */}
              <div className="absolute -right-3 top-6 h-full w-[96%] rounded-[32px] bg-gradient-to-br from-primary/80 to-secondary/50 shadow-2xl" />

              {/* Main Frame */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <div className="relative aspect-[1.45] overflow-hidden rounded-[24px] bg-slate-900">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="eager"
                      draggable={false}
                      className="h-full w-full select-none object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-slate-900 to-secondary/20">
                      <Icon
                        icon="solar:code-square-linear"
                        className="text-[120px] text-white/10"
                      />
                    </div>
                  )}

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-white/5" />

                  {/* Project Label */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="rounded-2xl border border-white/15 bg-slate-950/60 px-5 py-4 backdrop-blur-md">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        Featured Project
                      </p>

                      <p className="mt-1 text-base font-bold text-white sm:text-lg">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Project Icon */}
              <div className="absolute -right-5 -top-5 z-30 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-primary text-white shadow-2xl">
                <Icon
                  icon={technologies[0]?.icon || "solar:code-bold"}
                  className="text-3xl"
                />
              </div>

              {/* Bottom Accent */}
              <div className="absolute -bottom-6 -left-5 z-20 hidden h-20 w-20 rounded-2xl border-2 border-secondary sm:block" />

              {/* Dot Pattern */}
              <div className="pointer-events-none absolute -bottom-7 -left-7 z-10 hidden h-28 w-28 opacity-50 sm:block">
                <div className="h-full w-full bg-[radial-gradient(circle,var(--color-primary)_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailHero;
