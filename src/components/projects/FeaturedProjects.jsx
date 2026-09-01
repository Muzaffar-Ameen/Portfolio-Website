import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { getFeaturedProjects, projectsData } from "../../data/projects";

function FeaturedProjects({
  activeFilter = "all",
  mobileFiltersOpen,
  setMobileFiltersOpen,
  onFilterChange,
}) {
  const allProjects = getFeaturedProjects();

  const projects =
    activeFilter === "all"
      ? allProjects
      : activeFilter === "automation-ai"
        ? projectsData.filter((project) =>
            project.categories?.includes(activeFilter),
          )
        : allProjects.filter((project) =>
            project.categories?.includes(activeFilter),
          );

  /*
   * activeIndex represents the CENTER project.
   *
   * Initial position:
   * 1st project  -> LEFT
   * 2nd project  -> CENTER
   * 3rd project  -> RIGHT
   */
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(null);
  const dragCurrentX = useRef(null);
  const hasDragged = useRef(false);

  const total = projects.length;

  /*
   * Reset position whenever filter changes.
   *
   * If there are at least 2 projects:
   * center = 2nd project
   *
   * If there is only 1 project:
   * center = 1st project
   */
  useEffect(() => {
    setActiveIndex(total > 1 ? 1 : 0);
  }, [activeFilter, total]);

  /*
   * PREVIOUS
   *
   * Example:
   *
   * [MediTour] [BB-360] [Saffron]
   *
   * Previous ->
   *
   * [Saffron] [MediTour] [BB-360]
   */
  const previousProject = () => {
    if (total <= 1) return;

    setActiveIndex((current) => (current - 1 + total) % total);
  };

  /*
   * NEXT
   *
   * Example:
   *
   * [MediTour] [BB-360] [Saffron]
   *
   * Next ->
   *
   * [BB-360] [Saffron] [Assar]
   */
  const nextProject = () => {
    if (total <= 1) return;

    setActiveIndex((current) => (current + 1) % total);
  };

  /*
   * Get project relative to CENTER project.
   *
   * -1 = LEFT
   *  0 = CENTER
   * +1 = RIGHT
   */
  const getProject = (offset) => {
    if (!total) return null;

    return projects[(activeIndex + offset + total) % total];
  };

  /* =========================================================
     DRAG SYSTEM
  ========================================================= */

  const startDrag = (clientX) => {
    if (total <= 1) return;

    dragStartX.current = clientX;
    dragCurrentX.current = clientX;
    hasDragged.current = false;

    setIsDragging(true);
  };

  const moveDrag = (clientX) => {
    if (dragStartX.current === null) return;

    dragCurrentX.current = clientX;

    const distance = clientX - dragStartX.current;

    if (Math.abs(distance) > 8) {
      hasDragged.current = true;
    }
  };

  const endDrag = () => {
    if (dragStartX.current === null) return;

    const start = dragStartX.current;
    const current = dragCurrentX.current;

    if (start !== null && current !== null) {
      const distance = current - start;

      if (Math.abs(distance) >= 55) {
        if (distance < 0) {
          nextProject();
        } else {
          previousProject();
        }
      }
    }

    dragStartX.current = null;
    dragCurrentX.current = null;

    setIsDragging(false);

    setTimeout(() => {
      hasDragged.current = false;
    }, 0);
  };

  /* =========================================================
     MOUSE
  ========================================================= */

  const handleMouseDown = (event) => {
    if (event.button !== 0) return;
    if (total <= 1) return;

    event.preventDefault();

    startDrag(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (dragStartX.current === null) return;

    moveDrag(event.clientX);

    if (hasDragged.current) {
      event.preventDefault();
    }
  };

  const handleMouseUp = (event) => {
    if (dragStartX.current === null) return;

    event.preventDefault();

    endDrag();
  };

  const handleMouseLeave = () => {
    if (dragStartX.current !== null) {
      endDrag();
    }
  };

  /* =========================================================
     TOUCH
  ========================================================= */

  const handleTouchStart = (event) => {
    if (total <= 1) return;

    const touch = event.touches[0];

    startDrag(touch.clientX);
  };

  const handleTouchMove = (event) => {
    if (dragStartX.current === null) return;

    const touch = event.touches[0];

    moveDrag(touch.clientX);

    if (hasDragged.current) {
      event.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    endDrag();
  };

  /* =========================================================
     STOP LINK AFTER DRAG
  ========================================================= */

  const handleClickCapture = (event) => {
    if (hasDragged.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  /* =========================================================
     COMMON DRAG PROPS
  ========================================================= */

  const dragProps = {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onClickCapture: handleClickCapture,
  };

  return (
    <div className="relative mx-auto mt-10 w-full max-w-[1500px] sm:mt-12">
      {/* =====================================================
          MOBILE CONTROLS
      ====================================================== */}

      <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={onFilterChange}
          mobileOpen={mobileFiltersOpen}
          setMobileOpen={setMobileFiltersOpen}
          mobileOnly
        />

        {total > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-sm transition-all duration-300 hover:border-border-primary hover:bg-primary-light active:scale-95 sm:h-11 sm:w-11"
            >
              <Icon
                icon="solar:arrow-left-linear"
                className="text-lg sm:text-xl"
              />
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-sm transition-all duration-300 hover:border-border-primary hover:bg-primary-light active:scale-95 sm:h-11 sm:w-11"
            >
              <Icon
                icon="solar:arrow-right-linear"
                className="text-lg sm:text-xl"
              />
            </button>
          </div>
        )}
      </div>

      {/* =====================================================
          NO PROJECTS
      ====================================================== */}

      {!projects.length ? (
        <div className="mx-auto max-w-[700px] rounded-2xl border border-border bg-surface px-6 py-10 text-center shadow-sm sm:px-8 sm:py-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
            <Icon icon="solar:folder-open-linear" className="text-2xl" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-text-primary sm:text-xl">
            No Projects Found
          </h3>

          <p className="mx-auto mt-2 max-w-[420px] text-xs leading-6 text-text-secondary sm:text-sm">
            No featured projects are available in this category yet.
          </p>
        </div>
      ) : (
        <>
          {/* =====================================================
              DESKTOP SHOWCASE
          ====================================================== */}

          <div
            className="hidden items-center justify-center gap-5 select-none lg:flex xl:gap-7"
            style={{
              userSelect: "none",
            }}
          >
            {/* =================================================
                LEFT PROJECT
            ================================================= */}

            {total > 1 && (
              <div
                className={`${
                  total === 2
                    ? "w-[44%] max-w-[760px]"
                    : "w-[28%] max-w-[470px]"
                } ${isDragging ? "cursor-grabbing" : "cursor-pointer"}`}
                {...dragProps}
              >
                <ProjectCard project={getProject(-1)} />
              </div>
            )}

            {/* =================================================
                CENTER PROJECT
            ================================================= */}

            <div
              className={`z-20 w-[44%] max-w-[760px] ${
                isDragging ? "cursor-grabbing" : "cursor-pointer"
              }`}
              {...dragProps}
            >
              <ProjectCard project={getProject(0)} featured />
            </div>

            {/* =================================================
                RIGHT PROJECT
            ================================================= */}

            {total > 2 && (
              <div
                className={`${
                  total === 2
                    ? "w-[44%] max-w-[760px]"
                    : "w-[28%] max-w-[470px]"
                } ${isDragging ? "cursor-grabbing" : "cursor-pointer"}`}
                {...dragProps}
              >
                <ProjectCard project={getProject(1)} />
              </div>
            )}
          </div>

          {/* =====================================================
              DESKTOP ARROWS
          ====================================================== */}

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={previousProject}
                aria-label="Previous project"
                className="absolute left-0 lg:left-[-45px] xl:left-[-70px] top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-[0_10px_30px_rgba(37,31,77,0.12)] transition-all duration-300 hover:border-border-primary hover:bg-primary-light lg:flex cursor-pointer"
              >
                <Icon icon="solar:arrow-left-linear" className="text-xl" />
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Next project"
                className="absolute right-0 xl:right-[-70px] lg:right-[-45px] top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-[0_10px_30px_rgba(37,31,77,0.12)] transition-all duration-300 hover:border-border-primary hover:bg-primary-light lg:flex cursor-pointer"
              >
                <Icon icon="solar:arrow-right-linear" className="text-xl" />
              </button>
            </>
          )}

          {/* =====================================================
              MOBILE / TABLET
          ====================================================== */}

          <div
            className={`touch-pan-y select-none lg:hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            {...dragProps}
          >
            <ProjectCard project={getProject(0)} featured />
          </div>

          {/* =====================================================
              PAGINATION
          ====================================================== */}

          {total > 1 && (
            <div className="mt-5 flex items-center justify-center gap-2 sm:mt-6">
              {projects.map((project, index) => (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${project.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-7 bg-primary"
                      : "w-2 bg-border-strong hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default FeaturedProjects;
