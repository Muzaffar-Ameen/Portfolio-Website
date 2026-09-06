import { Icon } from "@iconify/react";
import { aboutData } from "../data/portfolio";
import cvFile from "../assets/cv/Muzaffar_Ameen_Resume.pdf";
function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-background py-20 text-text-primary sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 h-28 w-12 opacity-50"
      >
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 27 }).map((_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full border border-primary/10"
      >
        <div className="absolute inset-5 rounded-full border border-primary/10" />
        <div className="absolute inset-10 rounded-full border border-primary/10" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[360px] w-[600px] rotate-[-12deg] rounded-[50%] border border-primary/10"
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12 lg:mb-14">
          <div className="mb-5 flex items-center gap-4 text-sm font-semibold tracking-[0.08em] text-primary">
            <span>{aboutData.number}</span>

            <span className="h-[2px] w-10 bg-primary" />

            <span>{aboutData.eyebrow}</span>
          </div>

          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {aboutData.title}{" "}
            <span className="bg-gradient-to-r from-[#4b31c9] to-[#2563eb] bg-clip-text text-transparent">
              {aboutData.highlightedTitle}
            </span>
          </h2>

          <div className="mt-7 h-[3px] w-36 bg-gradient-to-r from-primary via-primary/50 to-transparent">
            <span className="ml-[92%] block h-2.5 w-2.5 -translate-y-[3px] rounded-full bg-primary" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_0.7fr] lg:items-start lg:gap-36">
          {/* Left Content */}
          <div>
            <div className="space-y-12 text-[17px] leading-8 text-text-primary/90 sm:text-[18px] sm:leading-9">
              {aboutData.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 1
                      ? "relative border-l-2 border-primary/80 pl-6 sm:pl-7"
                      : ""
                  }
                >
                  {paragraph.text}

                  {paragraph.highlights?.map((highlight) => (
                    <span key={highlight} className="font-bold text-primary">
                      {highlight}
                    </span>
                  ))}

                  {paragraph.after}

                  {paragraph.secondHighlight && (
                    <span className="font-bold text-primary">
                      {paragraph.secondHighlight}
                    </span>
                  )}

                  {paragraph.secondAfter}
                </p>
              ))}
            </div>

            {/* Education */}
            <div className="mt-10 rounded-[18px] border border-border border-l-[4px] border-l-primary bg-surface/70 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <img
                    src={aboutData.education.image}
                    alt="University of Central Punjab"
                    className="h-20 w-20 rounded-lg object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-bold leading-7 sm:text-[22px]">
                    {aboutData.education.degree}
                  </h3>

                  <p className="mt-1 text-base text-text-primary/90">
                    {aboutData.education.university}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-secondary">
                    <span className="flex items-center gap-2">
                      <Icon
                        icon="solar:calendar-linear"
                        className="h-5 w-5 text-primary"
                      />
                      {aboutData.education.duration}
                    </span>

                    <span className="hidden h-5 w-px bg-border sm:block" />

                    <span>
                      CGPA:{" "}
                      <strong className="font-semibold text-primary">
                        {aboutData.education.cgpa}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={cvFile}
                download="Muzaffar_Ameen_Resume.pdf"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#4b31c9] to-[#2563eb] px-7 font-semibold text-white shadow-[var(--shadow-button)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon icon="solar:download-linear" className="h-6 w-6" />
                Download CV
              </a>

              <a
                href="https://github.com/Muzaffar-Ameen"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-primary px-7 font-semibold text-primary transition-all duration-300 hover:bg-primary-light"
              >
                <Icon icon="mdi:github" className="h-6 w-6" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2">
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group flex min-h-[230px] flex-col items-center justify-center rounded-[18px] border border-border bg-surface/75 p-6 text-center shadow-[var(--shadow-card)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary-light text-primary">
                    <Icon icon={stat.icon} className="h-9 w-9" />
                  </div>

                  <div className="mt-5 text-5xl font-bold tracking-[-0.04em] text-primary">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-lg text-text-primary">
                    {stat.label}
                  </div>

                  <div className="mt-5 h-[3px] w-12 rounded-full bg-primary" />
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-5 rounded-[18px] border border-emerald-500/20 bg-surface/75 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <Icon
                    icon={aboutData.availability.icon}
                    className="h-10 w-10"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.10)]" />

                    <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-500">
                      {aboutData.availability.title}
                    </h3>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-base text-text-primary">
                    <span>{aboutData.availability.description}</span>

                    {aboutData.availability.options.map((option, index) => (
                      <span key={option} className="flex items-center gap-3">
                        <span className="text-primary">•</span>
                        {option}
                      </span>
                    ))}
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

export default About;
