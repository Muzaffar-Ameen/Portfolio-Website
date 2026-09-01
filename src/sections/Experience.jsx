import { Icon } from "@iconify/react";
import { experienceData, experienceSummary } from "../data/portfolio";

function ExperienceTech({ technology }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 shadow-sm transition-all duration-200 hover:border-border-primary hover:bg-primary-light">
      <Icon
        icon={technology.icon}
        className="h-5 w-5 shrink-0"
        aria-hidden="true"
      />

      <span className="whitespace-nowrap text-[11px] font-medium text-text-primary sm:text-xs">
        {technology.name}
      </span>
    </div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-primary-light/30 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-4">
          {/* Left heading */}
          <div>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.08em] text-primary sm:gap-5">
              <span>03</span>

              <span className="h-[2px] w-10 bg-primary sm:w-12" />

              <span>EXPERIENCE</span>
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-text-primary sm:text-5xl lg:text-[62px]">
              Where I've{" "}
              <span className="bg-gradient-to-r from-[#5525d9] via-[#6d35e8] to-[#2563eb] bg-clip-text text-transparent">
                Worked
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              A journey of building, learning and delivering real-world
              solutions across different teams and projects.
            </p>
          </div>

          {/* =====================================================
              SUMMARY CARD
          ====================================================== */}
          <div className="w-full lg:max-w-[780px]">
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] sm:grid-cols-4">
              {experienceSummary.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex min-h-[145px] flex-col items-center justify-center px-3 py-5 text-center sm:min-h-[168px] sm:px-14 ${
                    index !== experienceSummary.length - 1
                      ? "border-r border-border"
                      : ""
                  } ${index >= 2 ? "border-t sm:border-t-0" : ""}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
                    <Icon
                      icon={item.icon}
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-3 text-3xl font-bold tracking-[-0.04em] text-primary sm:text-4xl">
                    {item.value}
                  </div>

                  <div className="mt-1 text-xs font-medium text-text-primary sm:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            EXPERIENCE TIMELINE
        ====================================================== */}
        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-[24px] top-8 hidden w-px bg-gradient-to-b from-primary via-border-primary to-primary-light md:block" />

          <div className="space-y-5 sm:space-y-6">
            {experienceData.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.duration}`}
                className="relative grid gap-5 md:grid-cols-[120px_minmax(0,1fr)] md:gap-5 lg:grid-cols-[125px_minmax(0,1fr)]"
              >
                {/* =================================================
                    TIMELINE MARK / COMPANY
                ================================================== */}
                <div className="relative hidden md:flex md:items-start md:justify-center">
                  {/* Timeline dot */}
                  <span className="absolute left-[18px] top-[38px] z-20 h-3 w-3 rounded-full border-2 border-primary bg-background shadow-[0_0_0_5px_var(--portfolio-primary-light)]" />

                  {/* Company mark */}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
                    {experience.mark ? (
                      <span className="bg-gradient-to-br from-[#4f21d8] to-[#2563eb] bg-clip-text text-4xl font-extrabold tracking-[-0.06em] text-transparent">
                        {experience.mark}
                      </span>
                    ) : (
                      <Icon
                        icon={experience.icon}
                        className="h-10 w-10 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>

                {/* =================================================
                    EXPERIENCE CARD
                ================================================== */}
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-primary hover:shadow-[var(--shadow-card-hover)] sm:p-6 lg:p-7">
                  {/* Subtle top glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary-light opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-50" />

                  <div className="relative">
                    {/* Mobile company mark */}
                    <div className="mb-5 flex items-center gap-4 md:hidden">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                        <span className="bg-gradient-to-br from-[#4f21d8] to-[#2563eb] bg-clip-text text-2xl font-extrabold tracking-[-0.06em] text-transparent">
                          {experience.mark}
                        </span>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-primary">
                          {experience.company}
                        </div>

                        <div className="mt-1 text-xs text-text-secondary">
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        TOP AREA
                    ================================================== */}
                    <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                      {/* Main information */}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold tracking-[-0.025em] text-text-primary sm:text-[21px]">
                          {experience.role}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="text-sm font-semibold text-primary">
                            {experience.company}
                          </span>

                          <span className="text-text-muted">•</span>

                          <span className="text-sm text-text-secondary">
                            {experience.location}
                          </span>

                          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary">
                            <Icon
                              icon="solar:calendar-linear"
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />

                            {experience.duration}
                          </span>
                        </div>
                      </div>

                      {/* Technology list - desktop */}
                      <div className="hidden max-w-[500px] flex-wrap justify-start gap-2 xl:flex xl:justify ">
                        {experience.technologies.map((technology) => (
                          <ExperienceTech
                            key={technology.name}
                            technology={technology}
                          />
                        ))}
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}
                    <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]">
                      {/* Points */}
                      <div>
                        <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2.5">
                          {experience.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-[13px] leading-5 text-text-primary sm:text-sm"
                            >
                              <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology list - tablet/mobile */}
                      <div className="flex flex-wrap content-start gap-2 xl:hidden">
                        {experience.technologies.map((technology) => (
                          <ExperienceTech
                            key={technology.name}
                            technology={technology}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:bottom-6 sm:right-6">
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
