import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import { socialLinks } from "../data/socialLinks";

function Contact() {
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    }
  };

  const getSocialIcon = (type) => {
    const icons = {
      github: "mdi:github",
      linkedin: "mdi:linkedin",
      twitter: "mdi:twitter",
      instagram: "mdi:instagram",
      facebook: "mdi:facebook",
      youtube: "mdi:youtube",
      whatsapp: "mdi:whatsapp",
      email: "solar:letter-linear",
    };

    return icons[type] || "solar:link-linear";
  };

  const emailLink = socialLinks.find((social) => social.type === "email");

  const whatsappLink = socialLinks.find((social) => social.type === "whatsapp");

  const otherSocialLinks = socialLinks.filter(
    (social) => !["email", "whatsapp"].includes(social.type),
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1700px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="text-sm font-bold tracking-[0.18em] text-primary">
              05
            </span>

            <span className="h-px w-8 bg-text-secondary/30" />

            <span className="text-sm font-semibold tracking-[0.14em] text-text-secondary">
              CONTACT ME
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Let&apos;s Work
            <span className="text-primary"> Together</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            Have a project in mind, a business idea, or simply want to connect?
            Send me a message and let&apos;s discuss how we can build something
            meaningful together.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 xl:mt-16 xl:gap-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div>
              <span className="text-xs font-bold tracking-[0.18em] text-primary">
                GET IN TOUCH
              </span>

              <h3 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                Let&apos;s start a conversation.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
                Whether you have a new project, an idea you want to discuss, or
                an opportunity to work together, feel free to reach out.
              </p>
            </div>

            {/* Email */}
            {emailLink && (
              <a
                href={emailLink.href}
                className="group mt-8 flex max-w-xl items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon icon="solar:letter-linear" className="text-xl" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-text-primary">
                    Email Me
                  </span>

                  <span className="mt-1 block truncate text-sm text-text-secondary">
                    {emailLink.href.replace("mailto:", "")}
                  </span>
                </span>

                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-xl text-primary transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            )}

            {/* WhatsApp */}
            {whatsappLink && (
              <a
                href={whatsappLink.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 flex max-w-xl items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon icon="mdi:whatsapp" className="text-xl" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-text-primary">
                    WhatsApp
                  </span>

                  <span className="mt-1 block truncate text-sm text-text-secondary">
                    Chat with me directly
                  </span>
                </span>

                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-xl text-primary transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            )}

            {/* Social Accounts */}
            {otherSocialLinks.length > 0 && (
              <div className="mt-9">
                <h4 className="text-lg font-bold text-text-primary">
                  Connect with me
                </h4>

                <div className="mt-5 flex flex-wrap gap-3">
                  {otherSocialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <Icon
                        icon={getSocialIcon(social.type)}
                        className="text-xl"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="rounded-[28px] border border-border bg-surface p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-8 lg:p-10 xl:p-12">
            <div>
              <span className="text-xs font-bold tracking-[0.18em] text-primary">
                SEND A MESSAGE
              </span>

              <h3 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
                Tell me about your project
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
                Fill out the form below and send your project details directly
                to my inbox. I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* First + Last Name */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2.5 block text-sm font-semibold text-text-primary"
                  >
                    First Name
                  </label>

                  <div className="relative">
                    <Icon
                      icon="solar:user-linear"
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-text-secondary"
                    />

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                      className="h-13 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm text-text-primary outline-none transition-all duration-200 placeholder:text-text-secondary/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2.5 block text-sm font-semibold text-text-primary"
                  >
                    Last Name
                  </label>

                  <div className="relative">
                    <Icon
                      icon="solar:user-linear"
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-text-secondary"
                    />

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                      className="h-13 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm text-text-primary outline-none transition-all duration-200 placeholder:text-text-secondary/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2.5 block text-sm font-semibold text-text-primary"
                  >
                    Your Email
                  </label>

                  <div className="relative">
                    <Icon
                      icon="solar:letter-linear"
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-text-secondary"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="h-13 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm text-text-primary outline-none transition-all duration-200 placeholder:text-text-secondary/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2.5 block text-sm font-semibold text-text-primary"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <Icon
                      icon="solar:phone-linear"
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-text-secondary"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="h-13 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm text-text-primary outline-none transition-all duration-200 placeholder:text-text-secondary/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2.5 block text-sm font-semibold text-text-primary"
                >
                  Your Message
                </label>

                <div className="relative">
                  <Icon
                    icon="solar:pen-new-square-linear"
                    className="pointer-events-none absolute left-4 top-4 text-xl text-text-secondary"
                  />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="7"
                    placeholder="Write your message..."
                    className="min-h-[175px] w-full resize-y rounded-xl border border-border bg-background py-4 pl-12 pr-4 text-sm leading-7 text-text-primary outline-none transition-all duration-200 placeholder:text-text-secondary/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#4b31c9] to-[#2563eb] px-6 text-base font-bold text-white shadow-[0_12px_30px_rgba(79,49,201,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(79,49,201,0.32)] cursor-pointer"
              >
                <Icon
                  icon="solar:plain-3-linear"
                  className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                Send Message
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 rounded-xl border border-success/20 bg-success-soft px-4 py-3 text-center text-sm font-semibold text-success">
                  Your message has been sent successfully. I&apos;ll get back to
                  you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm font-semibold text-red-600 dark:text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
