import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";
import { Icon } from "@iconify/react";
import navbarLogo from "../assets/navbarLogo.png";

function SocialIcon({ type }) {
  const icons = {
    github: "mdi:github",
    linkedin: "mdi:linkedin",
    email: "solar:letter-linear",
    instagram: "mdi:instagram",
    facebook: "mdi:facebook",
    twitter: "mdi:twitter",
    whatsapp: "mdi:whatsapp",
  };

  return (
    <Icon
      icon={icons[type] ?? "solar:link-linear"}
      className="h-[15px] w-[15px]"
    />
  );
}
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const navigate = useNavigate();

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme ? "dark" : "light");
    setDarkMode(nextTheme);
  };
  const location = useLocation();

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavigation = (href) => {
    setMenuOpen(false);

    const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";

    if (!hash) {
      navigate("/");
      return;
    }

    // Agar kisi aur page par hain to Home + section par jao
    if (location.pathname !== "/") {
      navigate({
        pathname: "/",
        hash,
      });
      return;
    }

    // Agar already Home par hain to section par smooth scroll
    const element = document.querySelector(hash);

    if (element) {
      const navbarOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.history.replaceState(null, "", `/${hash}`);

      window.scrollTo({
        top: elementPosition - navbarOffset,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const handleLogoClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location.pathname === "/") {
      window.history.replaceState(null, "", "/");

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-background/95 backdrop-blur-xl">
      <nav className="relative mx-auto flex h-[68px] max-w-[1840px] items-center justify-between px-4 sm:h-[72px] sm:px-8 lg:h-[76px] lg:px-12">
        {/* Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="group relative flex h-[44px] w-[52px] shrink-0 items-center sm:w-[52px]"
          aria-label="Muzaffar Ameen Home"
        >
          {/* MA Logo */}
          <img
            src={navbarLogo}
            alt="MA"
            className="absolute left-0 top-1/2 z-20 h-[34px] w-[42px] -translate-y-1/2 object-contain"
          />

          {/* Full Name + Software Developer */}
          <div className="absolute left-[52px] top-1/2 z-10 hidden -translate-x-[-25px] -translate-y-1/2 translate-x-[-25px] flex-col items-center whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:flex">
            <div className="text-[20px] font-extrabold leading-none tracking-[-0.04em]">
              <span className="text-text-primary">Muzaffar </span>

              <span className="bg-gradient-to-r from-[#4b31c9] to-[#2563eb] bg-clip-text text-transparent">
                Ameen
              </span>
            </div>

            <div className="mt-[7px] flex items-center gap-[10px]">
              <span className="h-[1.5px] w-[45px] bg-gradient-to-r from-[#4b31c9] to-[#2563eb]" />

              <span className="text-[10px] font-medium tracking-[0.32em] text-text-secondary">
                Software Developer
              </span>

              <span className="h-[1.5px] w-[45px] bg-gradient-to-r from-[#4b31c9] to-[#2563eb]" />
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                handleNavigation(link.href);
              }}
              className="text-[12px] font-medium text-text-primary/90 transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Theme + Socials */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light theme" : "Switch to dark theme"
            }
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-border-primary hover:bg-primary-light hover:text-primary cursor-pointer"
          >
            <Icon
              icon={darkMode ? "solar:sun-2-linear" : "solar:moon-linear"}
              className="h-[17px] w-[17px]"
            />
          </button>

          {/* Desktop Socials */}
          {socialLinks
            .filter((social) =>
              ["github", "linkedin", "email", "instagram"].includes(
                social.type,
              ),
            )
            .map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.type === "email" ? undefined : "_blank"}
                rel={social.type === "email" ? undefined : "noreferrer"}
                aria-label={social.name}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-border-primary hover:bg-primary-light hover:text-primary"
              >
                <SocialIcon type={social.type} />
              </a>
            ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light theme" : "Switch to dark theme"
            }
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-all duration-200 hover:border-border-primary hover:bg-primary-light hover:text-primary cursor-pointer"
          >
            <Icon
              icon={darkMode ? "solar:sun-2-linear" : "solar:moon-linear"}
              className="h-[17px] w-[17px]"
            />
          </button>

          {/* GitHub */}
          {/* {socialLinks
            .filter((social) => social.type === "github")
            .map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-colors duration-200 hover:border-border-primary hover:text-primary"
              >
                <SocialIcon type="github" />
              </a>
            ))} */}

          {/* LinkedIn */}
          {socialLinks
            .filter((social) => social.type === "linkedin")
            .map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-colors duration-200 hover:border-border-primary hover:text-primary"
              >
                <SocialIcon type="linkedin" />
              </a>
            ))}

          {/* Email */}
          {/* {socialLinks
            .filter((social) => social.type === "email")
            .map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-colors duration-200 hover:border-border-primary hover:text-primary"
              >
                <SocialIcon type="email" />
              </a>
            ))} */}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="ml-1 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center text-text-primary transition-colors duration-200 hover:text-primary"
          >
            <Icon
              icon={menuOpen ? "ci:close-md" : "charm:menu-hamburger"}
              className="h-[22px] w-[22px]"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full border-b border-border bg-surface shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="px-5 py-3 sm:px-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                handleNavigation(link.href);
              }}
              className={`block py-3.5 text-sm font-medium text-text-primary transition-colors duration-200 hover:text-primary ${
                index !== navLinks.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Socials */}
          <div className="flex items-center gap-2 border-t border-border pt-4">
            {socialLinks
              .filter((social) =>
                ["github", "linkedin", "email", "instagram"].includes(
                  social.type,
                ),
              )
              .map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.type === "email" ? undefined : "_blank"}
                  rel={social.type === "email" ? undefined : "noreferrer"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-text-primary transition-all duration-200 hover:border-border-primary hover:bg-primary-light hover:text-primary"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
