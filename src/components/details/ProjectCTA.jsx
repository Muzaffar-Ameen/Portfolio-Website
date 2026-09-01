import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function ProjectCTA({ project }) {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
      <div className="relative overflow-hidden rounded-[30px] bg-slate-950">

        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0">
          {project.image && (
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-slate-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/40 to-transparent" />
        </div>

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

        {/* Decorative Rings */}
        <div className="pointer-events-none absolute right-[-120px] top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

        <div className="pointer-events-none absolute right-[-40px] top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-primary/10 lg:block" />

        {/* Content */}
        <div className="relative z-10 grid items-center lg:min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left Visual */}
          <div className="relative hidden h-full min-h-[320px] lg:block">

            {project.image ? (
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : null}

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 via-slate-950/55 to-slate-950" />
            <div className="absolute inset-0 bg-slate-950/25" />

            {/* Image Accent */}
            <div className="absolute bottom-10 left-10 h-16 w-16 rounded-2xl border border-primary/30" />

            <div className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-primary" />
          </div>

          {/* Right Content */}
          <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
            <div className="max-w-[620px]">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                <Icon icon="solar:stars-bold" className="text-base" />
                Let's Build Something Better
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Build Your
                <span className="mt-1 block text-primary">
                  Next Digital Project?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-[560px] text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Inspired by the work on{" "}
                <span className="font-semibold text-white/90">
                  {project.title}
                </span>
                ? Let's discuss your idea and turn it into a reliable,
                scalable, and impactful digital experience.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4b31c9] to-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,31,77,0.25)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon
                    icon="solar:rocket-bold"
                    className="text-lg"
                  />
                  Start Your Project
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  Explore More Projects
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="text-lg transition-transform duration-300"
                  />
                </Link>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectCTA;

