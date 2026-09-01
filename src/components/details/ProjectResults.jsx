import { Icon } from "@iconify/react";

function ProjectResults({ project }) {
  const results = project.details?.results ?? [];

  if (!results.length) {
    return null;
  }

  return (
    <section className="border-t border-border bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <Icon icon="solar:chart-2-bold" className="text-base" />
            Project Results
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            What We
            <span className="ml-2 text-secondary">Achieved</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            The key outcomes and improvements delivered through the{" "}
            <span className="font-semibold text-text-primary">
              {project.title}
            </span>{" "}
            project.
          </p>
        </div>

        {/* Results */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => (
            <article
              key={`${result}-${index}`}
              className="group relative overflow-hidden rounded-[24px] border border-border bg-surface p-6 shadow-[0_10px_35px_rgba(37,31,77,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(37,31,77,0.10)] sm:p-7"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.14em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon icon="solar:check-circle-bold" className="text-xl" />
                </span>
              </div>

              {/* Result */}
              <p className="mt-7 text-sm font-semibold leading-7 text-text-primary sm:text-base">
                {result}
              </p>

              {/* Bottom Accent */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 rounded-[24px] border border-primary/15 bg-primary/5 px-6 py-6 text-center sm:px-8">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-3">
            <Icon
              icon="solar:verified-check-bold"
              className="shrink-0 text-2xl text-primary"
            />

            <p className="text-sm font-medium leading-7 text-text-secondary sm:text-base">
              Every result reflects a practical improvement delivered through
              thoughtful design, development, and problem solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectResults;

