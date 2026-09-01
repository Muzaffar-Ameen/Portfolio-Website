import { Icon } from "@iconify/react";

function ProjectGallery({ project }) {
  const galleryImages = project.details?.gallery ?? [];

  const images = [
    {
      id: "main-project-image",
      src: project.image,
      alt: `${project.title} main project preview`,
    },
    ...galleryImages,
  ]
    .filter((image) => image?.src)
    .slice(0, 5);
  const mainImage = images[0];

  const secondaryImages = images.slice(1, 5);

  return (
    <section className="bg-surface-soft px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Gallery Images */}
        <div className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[500px]">
          {/* Main Image */}
          <div className="group absolute top-[12%] left-[14%] z-20 h-[62%] w-[62%] overflow-hidden rounded-2xl border-8 border-white bg-slate-100 shadow-[0_25px_70px_rgba(15,23,42,.16)]">
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Top Left Image */}
          {secondaryImages[0] && (
            <div className="group absolute top-0 left-0 z-10 h-[38%] w-[38%] overflow-hidden rounded-xl border-4 border-white bg-slate-100 shadow-[0_15px_45px_rgba(15,23,42,.12)]">
              <img
                src={secondaryImages[0].src}
                alt={secondaryImages[0].alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Top Right Image */}
          {secondaryImages[1] && (
            <div className="group absolute top-[3%] right-0 z-10 h-[34%] w-[34%] overflow-hidden rounded-xl border-4 border-white bg-slate-100 shadow-[0_15px_45px_rgba(15,23,42,.12)]">
              <img
                src={secondaryImages[1].src}
                alt={secondaryImages[1].alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Bottom Left Image */}
          {secondaryImages[2] && (
            <div className="group absolute bottom-0 left-[4%] z-30 h-[34%] w-[40%] overflow-hidden rounded-xl border-4 border-white bg-slate-100 shadow-[0_15px_45px_rgba(15,23,42,.12)]">
              <img
                src={secondaryImages[2].src}
                alt={secondaryImages[2].alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Bottom Right Image */}
          {secondaryImages[3] && (
            <div className="group absolute right-[3%] bottom-[2%] z-10 h-[38%] w-[38%] overflow-hidden rounded-xl border-4 border-white bg-slate-100 shadow-[0_15px_45px_rgba(15,23,42,.12)]">
              <img
                src={secondaryImages[3].src}
                alt={secondaryImages[3].alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Decorative Elements */}
          <div className="bg-primary/10 absolute -top-4 left-[42%] h-16 w-16 rounded-full blur-2xl" />

          <div className="bg-secondary/10 absolute right-[8%] bottom-[-20px] h-24 w-24 rounded-full blur-3xl" />

          <div className="border-primary/20 absolute right-[16%] bottom-[12%] h-20 w-20 rounded-full border border-dashed" />
        </div>

        {/* Content */}
        <div className="lg:pl-4">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-bold tracking-[0.14em] text-primary uppercase">
            <Icon icon="solar:gallery-bold" className="text-base" />
            Project Gallery
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            A Closer Look at{" "}
            <span className="text-secondary">{project.title}</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
            Explore the visual side of this project, from the main interface to
            supporting screens and project experiences.
          </p>

          {/* Gallery Highlights */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <Icon
                  icon="solar:gallery-bold"
                  className="text-primary text-xl"
                />
              </div>

              <div>
                <h3 className="font-semibold text-text-primary">
                  Project Interface
                </h3>

                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  A visual overview of the main project interface and user
                  experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <Icon
                  icon="solar:layers-minimalistic-bold"
                  className="text-secondary text-xl"
                />
              </div>

              <div>
                <h3 className="font-semibold text-text-primary">
                  Supporting Screens
                </h3>

                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  Additional screens and visual elements that support the
                  complete project experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <Icon
                  icon="solar:monitor-smartphone-bold"
                  className="text-primary text-xl"
                />
              </div>

              <div>
                <h3 className="font-semibold text-text-primary">
                  Responsive Experience
                </h3>

                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  Designed to provide a consistent and polished experience
                  across different screen sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;

