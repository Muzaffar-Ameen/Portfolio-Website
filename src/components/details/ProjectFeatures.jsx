import { Icon } from "@iconify/react";

function ProjectFeatures({ project }) {
  const features = project.details?.features ?? [];

  if (!features.length) {
    return null;
  }

  const featureImage =
    project.details?.gallery?.[1]?.image ||
    project.details?.gallery?.[0]?.image ||
    project.image;

  const featureImageAlt =
    project.details?.gallery?.[1]?.alt ||
    project.details?.gallery?.[0]?.alt ||
    `${project.title} project interface`;

  return (
    <section className="bg-surface-soft px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <Icon icon="solar:widget-5-bold" className="text-base" />
            Project Capabilities
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Key
            <span className="ml-2 text-secondary">Features</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            Explore the core capabilities and functionality delivered as part of
            the {project.title} platform.
          </p>
        </div>

        {/* Features + Image */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10 xl:gap-12">
          {/* Left - Features */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => {
              const isPrimary = index % 2 === 0;

              return (
                <article
                  key={`${feature}-${index}`}
                  className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(15,23,42,0.10)] sm:p-6"
                >
                  {/* Number */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          isPrimary
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary/10 text-secondary"
                        }`}
                      >
                        <Icon
                          icon="solar:check-circle-bold"
                          className="text-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <h3 className="text-base font-bold leading-snug text-text-primary sm:text-lg">
                        {feature}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-text-secondary sm:mt-3">
                      A core capability delivered as part of the {project.title}{" "}
                      platform.
                    </p>
                  </div>

                  {/* Hover Accent */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                      isPrimary ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                </article>
              );
            })}
          </div>

          {/* Right - Project Image */}
          <div className="relative lg:sticky lg:top-24">
            {/* Soft Glow */}
            <div className="pointer-events-none absolute -inset-3 rounded-[32px] bg-primary/10 blur-2xl" />

            {/* Image Frame */}
            <div className="relative overflow-hidden rounded-[30px] border border-primary/15 bg-primary/5 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface-muted">
                {featureImage ? (
                  <img
                    src={featureImage}
                    alt={featureImageAlt}
                    loading="lazy"
                    draggable={false}
                    className="block h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Icon
                      icon="solar:code-square-bold"
                      className="text-[120px] text-primary/15"
                    />
                  </div>
                )}

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Project Label */}
                <div className="absolute right-5 bottom-5 left-5">
                  <div className="rounded-2xl border border-white/20 bg-slate-950/55 px-5 py-4 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      Project Experience
                    </p>

                    <p className="mt-1 text-lg font-bold text-white">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectFeatures;

