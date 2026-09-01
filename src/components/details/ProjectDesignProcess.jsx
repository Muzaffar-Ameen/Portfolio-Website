import { Icon } from "@iconify/react";

function ProjectDesignProcess({ project }) {
  const steps = [
    {
      title: "Discovery",
      description:
        "Understanding the project requirements, goals, users, and business needs before development begins.",
      icon: "solar:clipboard-list-bold",
    },
    {
      title: "Planning",
      description:
        "Defining the structure, functionality, technology stack, and development roadmap for the project.",
      icon: "solar:clipboard-list-bold",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating a clean, intuitive, and responsive interface focused on usability and a strong user experience.",
      icon: "solar:palette-bold",
    },
    {
      title: "Development",
      description:
        "Building the core functionality with scalable, maintainable, and production-ready code.",
      icon: "solar:code-bold",
    },
    {
      title: "Testing & Launch",
      description:
        "Testing the experience across devices, fixing issues, optimizing performance, and preparing the project for launch.",
      icon: "solar:rocket-bold",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <Icon icon="solar:route-bold" className="text-base" />
            Design Process
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            From Idea to
            <span className="ml-2 text-secondary">Launch</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            A structured process used to turn the{" "}
            <span className="font-semibold text-text-primary">
              {project.title}
            </span>{" "}
            idea into a reliable digital product.
          </p>
        </div>

        {/* Desktop Process */}
        <div className="relative mx-auto mt-16 hidden max-w-[1600px] lg:block">
          {/* Connecting Path */}
          <svg
            className="pointer-events-none absolute inset-x-8 top-1/2 h-40 w-[calc(100%-4rem)] -translate-y-1/2"
            viewBox="0 0 1000 160"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M20 105 C150 155 170 5 300 55 S450 155 560 80 S700 5 820 55 S900 125 980 65"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 10"
              className="text-primary/25"
            />
          </svg>

          {/* Steps */}
          <div className="relative grid grid-cols-5 items-center gap-4">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col items-center ${
                    isEven ? "translate-y-10" : "-translate-y-10"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative">
                    {/* Outer Ring */}
                    <div className="absolute -inset-3 rounded-full border-2 border-primary/15" />

                    {/* Main Circle */}
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[3px] border-primary/30 bg-surface shadow-[0_12px_35px_rgba(37,31,77,0.10)] transition-all duration-300 hover:scale-105 hover:border-primary/50">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        <Icon
                          icon={step.icon}
                          className="text-[34px] text-primary"
                        />
                      </div>
                    </div>

                    {/* Step Number */}
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7 max-w-[190px] text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-text-primary">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Process */}
        <div className="relative mx-auto mt-14 max-w-xl space-y-8 lg:hidden">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <span className="absolute left-8 top-16 h-[calc(100%+2rem)] w-px bg-primary/20" />
              )}

              <div className="relative flex gap-5">
                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-surface shadow-sm">
                  <Icon icon={step.icon} className="text-2xl text-primary" />

                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectDesignProcess;

