import { Icon } from "@iconify/react";
import { heroData } from "../data/portfolio";
import { socialLinks } from "../data/socialLinks";
import muzaffarPic from "../assets/Muzaffar Pic.png";
import cvFile from "../assets/cv/Muzaffar_Ameen_Resume.pdf";
function Hero() {
  return (
    <section
      id="top"
      className="relative isolate bg-background text-text-primary"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[42%] top-[8%] h-[520px] w-[520px] rounded-full bg-primary-light/40 blur-3xl" />

        <div className="absolute right-[-120px] top-[18%] h-[500px] w-[500px] rounded-full border border-primary/10" />

        <div
          className="absolute right-[7%] top-[10%] h-[240px] w-[240px] opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-primary) 1.3px, transparent 1.3px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div
          className="absolute bottom-[8%] left-[3%] h-[180px] w-[180px] opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-primary) 1.2px, transparent 1.2px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1800px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pb-0 lg:pt-8">
        <div className="grid items-center gap-12 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(560px,1.08fr)] lg:gap-4 xl:gap-8">
          {/* =========================================================
              LEFT CONTENT
          ========================================================== */}
          <div className="relative z-20 max-w-[700px]">
            {/* Role */}
            <div className="mb-7 flex items-center gap-3 sm:mb-9">
              <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(75,49,201,0.35)]" />

              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-primary sm:text-[13px]">
                {heroData.role}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-[720px] text-[52px] font-extrabold leading-[0.98] tracking-[-0.055em] text-text-primary sm:text-[68px] lg:text-[72px] xl:text-[80px]">
              <span className="block">{heroData.title}</span>

              <span className="mt-2 block bg-gradient-to-r from-[#4b31c9] via-[#5634d9] to-[#2563eb] bg-clip-text text-transparent">
                {heroData.highlightedTitle}
              </span>
            </h1>

            {/* Desktop Technology Line */}
            <div className="mt-7 hidden flex-wrap items-center gap-x-3 gap-y-2 text-[17px] font-medium text-text-primary sm:flex lg:text-[18px]">
              {heroData.technologies.slice(0, 6).map((technology, index) => (
                <div key={technology.name} className="flex items-center gap-3">
                  <span>{technology.name}</span>

                  {index !== heroData.technologies.length - 1 && (
                    <span className="text-primary">•</span>
                  )}
                </div>
              ))}
            </div>

            {/* Decorative Line */}
            <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-[#4b31c9] to-[#2563eb] sm:mt-9" />

            {/* Description */}
            <p className="mt-7 max-w-[650px] text-[17px] leading-[1.75] text-text-secondary sm:text-[19px] lg:text-[20px]">
              {heroData.description}
            </p>

            {/* Mobile Technology Grid */}
            <div className="mt-8 grid grid-cols-3 gap-2.5 rounded-[18px] border border-border bg-surface/70 p-2.5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:grid-cols-6 lg:hidden">
              {heroData.technologies.map((technology) => (
                <div
                  key={technology.name}
                  className="flex min-h-[76px] items-center justify-center gap-2 rounded-[13px] bg-background px-3 py-3 shadow-sm"
                >
                  <Icon icon={technology.icon} className="h-7 w-7 shrink-0" />

                  <span className="text-[13px] font-semibold text-text-primary">
                    {technology.name}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:gap-5">
              <a
                href="#projects"
                className="group flex min-h-[58px] items-center justify-center gap-4 rounded-[10px] bg-gradient-to-r from-[#4b31c9] to-[#2563eb] px-7 text-[16px] font-semibold text-white! shadow-[var(--shadow-button)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span>View Projects</span>

                <Icon
                  icon="solar:arrow-right-linear"
                  className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={cvFile}
                download="Muzaffar_Ameen_Resume.pdf"
                className="flex min-h-[58px] items-center justify-center gap-4 rounded-[10px] border border-primary/40 bg-background px-7 text-[16px] font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light"
              >
                <span>Download CV</span>

                <Icon icon="solar:download-linear" className="h-5 w-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 divide-x divide-border lg:mt-14">
              {heroData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-0 flex-col items-center justify-center gap-2 px-2 text-center first:pl-0 last:pr-0 sm:flex-row sm:items-start sm:justify-start sm:gap-3 sm:px-5 sm:text-left"
                >
                  <Icon
                    icon={stat.icon}
                    className="h-6 w-6 shrink-0 text-primary sm:mt-0.5 sm:h-8 sm:w-8"
                  />

                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-bold leading-4 text-text-primary sm:text-[16px] sm:leading-normal">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[8px] leading-3 text-text-secondary sm:text-[12px] sm:leading-5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              RIGHT VISUAL
          ========================================================== */}
          <div className="relative min-h-[460px] sm:min-h-[700px] lg:h-[760px] lg:min-h-0">
            {/* Main Glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light/60 blur-2xl sm:h-[620px] sm:w-[620px]"
            />

            {/* Circular Background */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[47%] h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 bg-primary-light/20 sm:h-[600px] sm:w-[600px]"
            />

            {/* Person */}
            <div className="absolute bottom-0 left-1/2 z-240 h-[490px] w-[110%] -translate-x-1/2 sm:h-[730px] sm:w-[90%] lg:h-[calc(100%-10px)] lg:w-[100%]">
              <div className="relative h-full w-full">
                <img
                  src={muzaffarPic}
                  alt="Muzaffar Ameen"
                  className="absolute inset-0 h-full w-full object-contain object-bottom"
                />

                {/* Soft bottom blend */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/10 to-transparent"
                />
              </div>
            </div>

            {/* API Response Card */}
            <div className="absolute left-[2%] top-[8%] z-30 hidden w-[220px] rounded-[14px] border border-border bg-surface/95 p-5 shadow-2xl backdrop-blur-md sm:block">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-primary">
                  API Response
                </span>

                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>

              <pre className="font-mono text-[11px] leading-5 text-text-secondary">
                {`{
  "success": true,
  "data": {
    "message": "Hello World",
    "status": "OK"
  }
}`}
              </pre>
            </div>

            {/* Code Card */}
            <div className="absolute right-[4%] top-[2%] z-30 hidden w-[230px] rounded-[14px] border border-white/10 bg-[#15191e] p-5 shadow-2xl sm:block">
              <div className="mb-4 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>

              <pre className="font-mono text-[11px] leading-6 text-gray-200">
                {`const developer = {

  passion: "building",
  code: "clean",
  focus: "impact",

  stack: ["MERN", "n8n"],

  alwaysLearning: true

};`}
              </pre>
            </div>

            {/* Tech Cards - Desktop */}

            <div className="absolute left-[1%] top-[45%] z-30 hidden sm:block">
              {/* Connector Line */}
              <div className="absolute left-[-11px] top-[18px] h-[246px] w-px bg-primary/35" />

              {/* Connector Dots */}
              <span className="absolute left-[-14px] top-[15px] h-[7px] w-[7px] rounded-full bg-primary" />
              <span className="absolute left-[-14px] top-[77px] h-[7px] w-[7px] rounded-full bg-primary" />
              <span className="absolute left-[-14px] top-[139px] h-[7px] w-[7px] rounded-full bg-primary" />
              <span className="absolute left-[-14px] top-[201px] h-[7px] w-[7px] rounded-full bg-primary" />

              <div className="flex flex-col gap-3">
                {heroData.technologies.slice(0, 4).map((technology) => (
                  <div
                    key={technology.name}
                    className="flex h-[58px] w-[126px] items-center gap-3 rounded-[10px] border border-border bg-surface px-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Icon
                      icon={technology.icon}
                      className="h-[27px] w-[27px] shrink-0"
                    />

                    <span className="text-[11px] font-semibold text-text-primary">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Card */}
            <div className="absolute bottom-[15%] right-[1%] z-30 hidden w-[220px] rounded-[14px] border border-border bg-surface/95 p-5 shadow-2xl backdrop-blur-md sm:block">
              <div className="text-[13px] font-bold text-text-primary">
                Building Scalable
              </div>

              <div className="text-[13px] font-bold text-text-primary">
                Solutions
              </div>

              <div className="mt-5 h-[70px]">
                <svg viewBox="0 0 200 70" className="h-full w-full" fill="none">
                  <path
                    d="M4 62L28 42L45 50L67 30L88 44L108 24L130 36L153 12L172 22L196 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary"
                  />
                </svg>
              </div>
            </div>
            {/* Desktop Connect With Me */}
            {/* <div className="absolute bottom-[1%] right-[0%] z-930 hidden text-center lg:block">
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-text-secondary">
                Connect With Me
              </p>

              <div className="mt-4 flex items-center justify-center gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.type === "email" ? undefined : "_blank"}
                    rel={social.type === "email" ? undefined : undefined}
                    aria-label={social.name}
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-primary/25 bg-background text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light hover:text-primary"
                  >
                    <Icon
                      icon={
                        social.type === "github"
                          ? "mdi:github"
                          : social.type === "linkedin"
                            ? "mdi:linkedin"
                            : "solar:letter-linear"
                      }
                      className="h-6 w-6"
                    />
                  </a>
                ))}
              </div>
            </div> */}
            {/* Mobile Code Card */}
            <div className="absolute right-[0%] top-[10%] z-30 w-[170px] rounded-[13px] border border-white/10 bg-[#15191e] p-2 shadow-2xl sm:hidden">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>

              <pre className="font-mono text-[9px] leading-5 text-gray-200">
                {`const developer = {
 passion: "building",
 code: "clean",
 focus: "impact",
 stack: ["MERN", "n8n"],
 alwaysLearning: true
};`}
              </pre>
            </div>

            {/* Mobile API Card */}
            <div className="absolute bottom-[4%] right-[0%] z-30 w-[175px] rounded-[14px] border border-border bg-surface/95 p-4 shadow-2xl backdrop-blur-md sm:hidden">
              <div className="text-[13px] font-semibold text-primary">
                API Response
              </div>

              <div className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-[9px] font-semibold text-green-700">
                200 OK
              </div>

              <div className="mt-4 h-[60px]">
                <svg viewBox="0 0 200 60" className="h-full w-full" fill="none">
                  <path
                    d="M4 52L25 38L45 44L65 27L82 35L104 18L122 27L143 13L164 20L196 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary"
                  />
                </svg>
              </div>
            </div>

            {/* Mobile decorative icon */}
            <div className="absolute left-[1%] bottom-[40%] z-900 flex h-16 w-16 items-center justify-center rounded-[12px] border border-border bg-surface/90 shadow-xl sm:hidden">
              <Icon
                icon="solar:code-square-linear"
                className="h-8 w-8 text-primary"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE CONNECT AREA
        ========================================================== */}
        {/* =========================================================
    MOBILE CONNECT AREA
========================================================== */}
        <div className="mt-4 border-t border-border pt-8 text-center sm:mt-8 lg:hidden">
          <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-text-secondary">
            Connect With Me
          </p>
          <div className="mt-5 flex justify-center gap-5">
            {socialLinks
              .filter(
                (social) =>
                  social.type === "github" ||
                  social.type === "linkedin" ||
                  social.type === "facebook",
              )
              .map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon
                    icon={
                      social.type === "github"
                        ? "mdi:github"
                        : social.type === "linkedin"
                          ? "mdi:linkedin"
                          : "mdi:facebook"
                    }
                    className="h-6 w-6"
                  />
                </a>
              ))}
          </div>
        </div>
      </div>
      {/* Hero Bottom Separator */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-1px] left-0 right-0 z-50 h-[55px] overflow-hidden sm:h-[65px] lg:h-[75px]"
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-full w-full"
          fill="none"
        >
          {/* Soft background curve */}
          <path
            d="M0 62C180 88 300 88 470 58C650 26 760 20 930 42C1100 64 1230 78 1440 42V90H0Z"
            fill="var(--color-primary-light)"
            opacity="0.45"
          />

          {/* Main curved line */}
          <path
            d="M0 48C180 76 310 78 480 50C650 22 770 18 940 38C1110 58 1240 68 1440 34"
            stroke="url(#heroSeparatorGradient)"
            strokeWidth="1.5"
            opacity="0.45"
          />

          {/* Subtle secondary curve */}
          <path
            d="M0 66C190 92 320 88 490 62C660 36 790 32 950 50C1110 68 1260 78 1440 48"
            stroke="var(--color-primary)"
            strokeWidth="1"
            opacity="0.12"
          />

          <defs>
            <linearGradient
              id="heroSeparatorGradient"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4b31c9" stopOpacity="1" />
              <stop offset="0.25" stopColor="#4b31c9" />
              <stop offset="0.5" stopColor="#5634d9" />
              <stop offset="0.75" stopColor="#2563eb" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
