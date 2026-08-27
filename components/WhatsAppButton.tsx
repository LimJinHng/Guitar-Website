type Props = {
  label?: string;
  className?: string;
};

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.01 2C6.49 2 2.02 6.48 2.02 12c0 1.86.5 3.62 1.44 5.13L2 22l5.02-1.42a9.93 9.93 0 0 0 5 1.34c5.52 0 9.98-4.48 9.98-10S17.53 2 12.01 2Zm0 18.06c-1.6 0-3.13-.43-4.46-1.24l-.32-.19-3 .85.82-2.95-.2-.31a8.03 8.03 0 0 1-1.24-4.27c0-4.44 3.62-8.05 8.4-8.05 4.78 0 8.4 3.6 8.4 8.05 0 4.44-3.62 8.11-8.4 8.11Zm4.55-6.02c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.19 3.7.59.25 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export default function WhatsAppButton({ label = "Contact me on WhatsApp", className = "" }: Props) {
  return (
    <a
      href="https://wa.me/6598271174"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-ink transition hover:bg-terracottaDark ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
