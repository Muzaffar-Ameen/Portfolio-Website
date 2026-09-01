import { Icon } from "@iconify/react";
import { socialLinks } from "../data/socialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const technologies = [
    {
      name: "React",
      icon: "logos:react",
    },
    {
      name: "Node.js",
      icon: "logos:nodejs-icon",
    },
    {
      name: "Express.js",
      icon: "simple-icons:express",
    },
    {
      name: "MongoDB",
      icon: "logos:mongodb-icon",
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
    },
    {
      name: "Git & GitHub",
      icon: "mdi:git",
    },
  ];

  const getSocialIcon = (type) => {
    const icons = {
      github: "mdi:github",
      linkedin: "mdi:linkedin",
      twitter: "mdi:twitter",
      instagram: "mdi:instagram",
      email: "solar:letter-linear",
      whatsapp: "mdi:whatsapp",
      facebook: "mdi:facebook",
    };

    return icons[type] || "solar:link-linear";
  };

  const emailLink = socialLinks.find((social) => social.type === "email");

  const whatsappLink = socialLinks.find((social) => social.type === "whatsapp");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden  px-4 pb-5 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2" />

      <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-[28px]">
        {/* Top Decorative Shape */}
        <div className="absolute left-1/2 top-0 hidden h-3 w-28 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-[#4b31c9] to-[#7c3aed] sm:block">
          <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white/70" />
        </div>

        {/* Main Footer */}
        <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-10 xl:gap-16">
            {/* =====================================================
                BRAND
            ===================================================== */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5">
                  <Icon
                    icon="solar:code-square-linear"
                    className="text-4xl text-primary"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                    Muzaffar Ameen
                  </h2>

                  <p className="mt-1 text-base font-medium text-primary">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <p className="mt-7 max-w-md text-sm leading-7 text-text-secondary sm:text-base">
                I build modern, scalable and user-friendly web applications
                using the MERN stack. Passionate about clean code, problem
                solving and creating real-world solutions.
              </p>

              {/* Social Links */}
              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks
                  .filter(
                    (social) => !["email", "whatsapp"].includes(social.type),
                  )
                  .map((social) => (
                    <a
                      key={social.type}
                      href={social.href}
                      target={social.href !== "#" ? "_blank" : undefined}
                      rel={social.href !== "#" ? "noreferrer" : undefined}
                      aria-label={social.name}
                      className="group flex h-14 w-14 items-center justify-center rounded-xl border border-primary bg-background text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-secondary/80 hover:text-primary hover:shadow-[0_10px_25px_rgba(79,49,201,0.10)]"
                    >
                      <Icon
                        icon={getSocialIcon(social.type)}
                        className="text-xl transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  ))}
              </div>

              {/* Work Card */}
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation("#contact");
                }}
                className="group mt-8 flex max-w-md items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-primary/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon icon="solar:plain-3-linear" className="text-xl" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-text-primary">
                    Let&apos;s Work Together
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-text-secondary sm:text-sm">
                    I&apos;m available for freelance projects and full-time
                    opportunities.
                  </span>
                </span>

                <Icon
                  icon="solar:arrow-right-linear"
                  className="shrink-0 text-xl text-primary transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* =====================================================
                NAVIGATION
            ===================================================== */}
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                Quick Links
              </h3>

              <div className="mt-4 h-0.5 w-9 bg-primary" />

              <nav className="mt-7 space-y-5">
                {navigationLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavigation(link.href)}
                    className="group flex w-full items-center gap-4 text-left text-sm text-text-secondary transition-colors duration-200 hover:text-primary cursor-pointer"
                  >
                    <span>{link.name}</span>

                    <Icon
                      icon="solar:arrow-right-linear"
                      className="text-base opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </button>
                ))}
              </nav>
            </div>

            {/* =====================================================
                TECHNOLOGIES
            ===================================================== */}
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                Technologies
              </h3>

              <div className="mt-4 h-0.5 w-9 bg-primary" />

              <div className="mt-7 space-y-5">
                {technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="flex items-center gap-4 text-sm text-text-secondary"
                  >
                    <div className="flex h-7 w-7 items-center justify-center">
                      <Icon icon={technology.icon} className="text-xl" />
                    </div>

                    <span>{technology.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                GET IN TOUCH
            ===================================================== */}
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                Get In Touch
              </h3>

              <div className="mt-4 h-0.5 w-9 bg-primary" />

              <div className="mt-7 space-y-4">
                {/* Email */}
                {emailLink && (
                  <a
                    href={emailLink.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Icon icon="solar:letter-linear" className="text-xl" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-text-primary">
                        Email
                      </span>

                      <span className="mt-1 block truncate text-xs text-text-secondary sm:text-sm">
                        muzaffarameendev@gmail.com
                      </span>
                    </span>
                  </a>
                )}

                {/* WhatsApp */}
                {whatsappLink && (
                  <a
                    href={whatsappLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Icon icon="mdi:whatsapp" className="text-xl" />
                    </span>

                    <span>
                      <span className="block text-sm font-bold text-text-primary">
                        WhatsApp
                      </span>

                      <span className="mt-1 block text-xs text-text-secondary sm:text-sm">
                        +92 341 4642198
                      </span>
                    </span>
                  </a>
                )}

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <Icon icon="solar:map-point-linear" className="text-xl" />
                  </span>

                  <span>
                    <span className="block text-sm font-bold text-text-primary">
                      Location
                    </span>

                    <span className="mt-1 block text-xs text-text-secondary sm:text-sm">
                      Lahore, Pakistan
                    </span>
                  </span>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <Icon
                      icon="solar:clock-circle-linear"
                      className="text-xl"
                    />
                  </span>

                  <span>
                    <span className="block text-sm font-bold text-text-primary">
                      Availability
                    </span>

                    <span className="mt-1 block text-xs text-text-secondary sm:text-sm">
                      Open to Work
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM
          ===================================================== */}
          <div className="mt-14 border-t border-border pt-7">
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
              <p className="text-center text-sm text-text-secondary sm:text-left">
                © {currentYear} Muzaffar Ameen. All rights reserved.
              </p>

              {/* Back To Top */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-background text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-white hover:shadow-[0_10px_30px_rgba(79,49,201,0.20)] cursor-pointer"
              >
                <Icon
                  icon="solar:arrow-up-linear"
                  className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
