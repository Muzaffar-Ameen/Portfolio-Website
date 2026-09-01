import { Icon } from "@iconify/react";

const filters = [
  {
    id: "all",
    label: "All Projects",
    icon: "solar:widget-4-linear",
  },
  {
    id: "full-stack",
    label: "Full Stack",
    icon: "solar:code-square-linear",
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "solar:window-frame-linear",
  },
  {
    id: "web-applications",
    label: "Web Applications",
    icon: "solar:global-linear",
  },

  {
    id: "automation-ai",
    label: "Automation & AI",
    icon: "solar:bot-linear",
  },
  {
    id: "other",
    label: "Other",
    icon: "solar:menu-dots-linear",
  },
];

function ProjectFilters({
  activeFilter,
  onFilterChange,
  mobileOpen,
  setMobileOpen,
  desktopOnly = false,
  mobileOnly = false,
}) {
  const handleFilterChange = (id) => {
    onFilterChange(id);
    setMobileOpen(false);
  };

  /* Desktop */
  if (desktopOnly) {
    return (
      <div className="flex flex-wrap justify-end gap-3">
        {filters.map((filter) => {
          const active = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onFilterChange(filter.id)}
              className={`group inline-flex h-12 shrink-0 items-center gap-2 rounded-xl border px-5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                active
                  ? "border-primary-light bg-primary-light text-primary shadow-sm"
                  : "border-border bg-surface text-text-primary hover:border-border-primary hover:bg-primary-light/50"
              }`}
            >
              <Icon
                icon={filter.icon}
                className={`text-lg transition-transform duration-300 ${
                  active ? "scale-110" : "group-hover:scale-110"
                }`}
              />

              {filter.label}
            </button>
          );
        })}
      </div>
    );
  }

  /* Mobile */
  if (mobileOnly) {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          aria-expanded={mobileOpen}
          className={`inline-flex h-10 items-center gap-2 rounded-xl border px-3.5 text-xs font-semibold transition-all duration-300 sm:h-11 sm:px-4 sm:text-sm ${
            mobileOpen
              ? "border-primary bg-primary-light text-primary shadow-sm"
              : "border-border bg-surface text-text-primary shadow-sm hover:border-border-primary"
          }`}
        >
          <Icon icon="solar:filter-linear" className="text-base sm:text-lg" />

          <span>Filters</span>

          <Icon
            icon="solar:alt-arrow-down-linear"
            className={`text-sm transition-transform duration-300 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileOpen && (
          <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[230px] overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-[0_18px_45px_rgba(37,31,77,0.14)]">
            <div className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted">
              Filter Projects
            </div>

            <div className="space-y-1">
              {filters.map((filter) => {
                const active = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => handleFilterChange(filter.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-all duration-200 sm:text-sm ${
                      active
                        ? "bg-primary-light text-primary"
                        : "text-text-secondary hover:bg-primary-light/50 hover:text-primary"
                    }`}
                  >
                    <Icon icon={filter.icon} className="shrink-0 text-base" />

                    <span className="flex-1">{filter.label}</span>

                    {active && (
                      <Icon
                        icon="solar:check-circle-bold"
                        className="text-base"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default ProjectFilters;
