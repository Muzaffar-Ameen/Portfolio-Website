import { Icon } from "@iconify/react";
import { skillsData } from "../data/portfolio";

function SkillCard({ skill }) {
  return (
    <article className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-border-primary hover:shadow-[var(--shadow-card-hover)] sm:p-6">
      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary-light opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />

      <div className="relative">
        {/* Skill header */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[14px] bg-primary-light">
            <Icon icon={skill.icon} className="h-9 w-9" aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[17px] font-bold tracking-[-0.02em] text-text-primary">
              {skill.name}
            </h3>

            <p className="mt-1 text-sm text-text-secondary">{skill.category}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5 flex items-center gap-4">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#4f21d8] via-[#6d35e8] to-[#3f5edc] transition-all duration-700 ease-out"
              style={{ width: `${skill.level}%` }}
            />
          </div>

          <span className="w-10 shrink-0 text-right text-sm font-bold text-text-primary">
            {skill.level}%
          </span>
        </div>
      </div>
    </article>
  );
}

function ToolItem({ tool }) {
  return (
    <div className="group flex min-h-[54px] shrink-0 items-center gap-3 rounded-full border border-border bg-surface px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-primary hover:bg-primary-light">
      <Icon icon={tool.icon} className="h-7 w-7 shrink-0" aria-hidden="true" />

      <span className="whitespace-nowrap text-sm font-semibold text-text-primary">
        {tool.name}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background - left */}
      <div className="pointer-events-none absolute left-0 top-8 hidden opacity-70 lg:block">
        <svg
          width="260"
          height="180"
          viewBox="0 0 260 180"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 55H55L82 28H220L250 0"
            stroke="var(--portfolio-border-primary)"
            strokeWidth="1"
          />
          <path
            d="M0 78H72L98 52H238"
            stroke="var(--portfolio-border-primary)"
            strokeWidth="1"
          />
          <path
            d="M0 101H48L77 72H188L220 40"
            stroke="var(--portfolio-border-primary)"
            strokeWidth="1"
          />
          <path
            d="M0 125H84L110 98H260"
            stroke="var(--portfolio-border-primary)"
            strokeWidth="1"
          />

          <circle
            cx="55"
            cy="55"
            r="3"
            fill="var(--portfolio-primary)"
            opacity="0.35"
          />
          <circle
            cx="82"
            cy="28"
            r="3"
            fill="var(--portfolio-primary)"
            opacity="0.35"
          />
          <circle
            cx="220"
            cy="0"
            r="3"
            fill="var(--portfolio-primary)"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Decorative background - right */}
      <div className="pointer-events-none absolute right-0 top-8 hidden opacity-70 lg:block">
        <svg
          width="260"
          height="180"
          viewBox="0 0 260 180"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M260 55H205L178 28H40L10 0"
            stroke="var(--portfolio-border-primary)"
            strokeWidth="1"
          />
          <path
            d="M260 78H188L162 52H22"
            stroke="var(--portfolio-border-primary)"
            strokeWidth="1"
          />
          <path
            d="M260 101H212L183 72H72L40 40"
            stroke="var(--portfolio-border-primary)"
            strokeWidth="1"
          />
          <path
            d="M260 125H176L150 98H0"
            stroke="var(--portfolio-border-primary)"
            strokeWidth="1"
          />

          <circle
            cx="205"
            cy="55"
            r="3"
            fill="var(--portfolio-primary)"
            opacity="0.35"
          />
          <circle
            cx="178"
            cy="28"
            r="3"
            fill="var(--portfolio-primary)"
            opacity="0.35"
          />
          <circle
            cx="40"
            cy="0"
            r="3"
            fill="var(--portfolio-primary)"
            opacity="0.35"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.12em] text-primary sm:gap-5">
            <span>{skillsData.number}</span>

            <span className="h-[2px] w-10 bg-primary sm:w-12" />

            <span>{skillsData.eyebrow}</span>
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            {skillsData.title}{" "}
            <span className="bg-gradient-to-r from-[#5525d9] via-[#6d35e8] to-[#2563eb] bg-clip-text text-transparent">
              {skillsData.highlightedTitle}
            </span>
          </h2>

          <div className="mx-auto mt-7 h-[4px] w-32 rounded-full bg-gradient-to-r from-[#5525d9] to-[#6d35e8]" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            {skillsData.description}
          </p>
        </div>

        {/* Main skills */}
        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {skillsData.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Tools heading */}
        <div className="mt-16 flex items-center justify-center gap-5 sm:mt-20">
          <span className="hidden h-[2px] w-12 bg-primary sm:block" />

          <div className="flex items-center gap-3">
            <Icon
              icon="solar:code-square-linear"
              className="h-7 w-7 text-primary"
              aria-hidden="true"
            />

            <h3 className="text-xl font-bold tracking-[-0.02em] text-text-primary sm:text-2xl">
              {skillsData.toolsTitle}
            </h3>
          </div>

          <span className="hidden h-[2px] w-12 bg-primary sm:block" />
        </div>

        {/* Tools */}
        <div className="mt-8 flex gap-2.5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0 sm:gap-3">
          {skillsData.tools.map((tool) => (
            <ToolItem key={tool.name} tool={tool} />
          ))}
        </div>

        {/* What I work with */}
        <div className="mx-auto mt-12 max-w-6xl sm:mt-14">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border-primary bg-primary-soft px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-light">
                <Icon
                  icon={skillsData.workWith.icon}
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
              </div>

              {/* Divider */}
              <div className="hidden h-14 w-[2px] bg-primary sm:block" />

              <div className="min-w-0">
                <h3 className="text-xl font-bold text-text-primary sm:text-2xl">
                  {skillsData.workWith.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-secondary sm:text-base">
                  {skillsData.workWith.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-9 flex items-center justify-center gap-4 text-xs font-semibold tracking-[0.25em] text-primary sm:mt-10 sm:text-sm">
          <span className="h-[2px] w-10 bg-primary sm:w-12" />

          {skillsData.footerText.map((item, index) => (
            <span key={item} className="flex items-center gap-4">
              <span>{item}</span>

              {index !== skillsData.footerText.length - 1 && (
                <span className="text-primary">•</span>
              )}
            </span>
          ))}

          <span className="h-[2px] w-10 bg-primary sm:w-12" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
