import { Icon } from "@iconify/react";

function ProjectChallengeSolution({ project }) {
  const challenge = project.details?.challenge ?? "";
  const solution = project.details?.solution ?? "";

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[28px] bg-slate-950 sm:rounded-[32px]">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          {project.image && (
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/80 to-primary/20" />
        </div>

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <Icon icon="solar:layers-bold" className="text-base" />
              Challenge & Solution
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Turning Challenges Into
              <span className="ml-2 text-secondary">Solutions</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Understanding the problem first, then designing a practical
              solution that creates real value for the project.
            </p>
          </div>

          {/* Challenge + Solution */}
          <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10">
            {/* Challenge */}
            <div className="text-left">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Challenge 01
              </span>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                The Problem
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                {challenge}
              </p>
            </div>

            {/* Center Connection */}
            <div className="flex items-center justify-center py-2">
              <div className="flex items-center">
                {/* Challenge Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-white/5 shadow-lg backdrop-blur-sm sm:h-16 sm:w-16">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white sm:h-12 sm:w-12">
                    <Icon
                      icon="solar:danger-triangle-bold"
                      className="text-xl sm:text-2xl"
                    />
                  </div>
                </div>

                {/* Arrow */}
                <div className="mx-2 flex w-8 items-center sm:mx-3 sm:w-12">
                  <span className="h-px flex-1 bg-white/20" />

                  <Icon
                    icon="solar:arrow-right-linear"
                    className="-ml-1 shrink-0 text-lg text-secondary sm:text-xl"
                  />
                </div>

                {/* Solution Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-secondary/40 bg-white/5 shadow-lg backdrop-blur-sm sm:h-16 sm:w-16">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white sm:h-12 sm:w-12">
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-xl sm:text-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="text-left">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Solution 01
              </span>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                How I Solved It
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                {solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectChallengeSolution;
