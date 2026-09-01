import { Icon } from "@iconify/react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923474862945"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="group fixed right-5 bottom-6 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] animate-wa-float md:right-8 md:bottom-8 md:h-12 md:w-12"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#25D366] animate-wa-ring" />

      <span className="pointer-events-none absolute inset-0 rounded-full border border-[#25D366]/60 animate-wa-ring-delayed" />

      <span className="pointer-events-none absolute inset-[-3px] rounded-full bg-[#25D366]/20 blur-md animate-wa-glow" />

      <Icon
        icon="logos:whatsapp-icon"
        className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
      />
    </a>
  );
}

export default WhatsAppButton;
