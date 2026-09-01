import { Icon } from "@iconify/react";

function ProjectOverview({ project }) {
  const overview = project.details?.overview ?? "";
  const points = project.details?.points ?? project.details?.highlights ?? [];

  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <Icon icon="solar:document-text-bold" className="text-base" />
              Project Overview
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              About the
              <span className="ml-2 text-secondary">Project</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              {overview}
            </p>

            {/* Points */}
            {points.length > 0 && (
              <div className="mt-8 space-y-4">
                {points.map((point, index) => (
                  <div
                    key={`${point}-${index}`}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon
                        icon="solar:check-circle-bold"
                        className="text-lg"
                      />
                    </span>

                    <p className="pt-0.5 text-base leading-7 text-text-secondary">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[36px] bg-primary/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-border bg-surface-muted p-3 shadow-[0_25px_70px_rgba(37,31,77,0.10)]">
              {project.details?.overviewImage || project.image ? (
                <img
                  src={project.details?.overviewImage || project.image}
                  alt={`${project.title} overview`}
                  loading="lazy"
                  draggable={false}
                  className="h-[380px] w-full rounded-[22px] object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-[440px]"
                />
              ) : (
                <div className="flex h-[380px] items-center justify-center rounded-[22px] bg-primary/5 sm:h-[440px]">
                  <Icon
                    icon="solar:code-square-bold"
                    className="text-[110px] text-primary/15"
                  />
                </div>
              )}

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-3 rounded-[22px] bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

              {/* Project Label */}
              <div className="absolute right-7 bottom-7 left-7">
                <div className="rounded-2xl border border-white/20 bg-slate-950/60 px-5 py-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                    Project Experience
                  </p>

                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-5 -bottom-5 -z-0 h-28 w-28 rounded-full bg-secondary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;

