type Props = {
  label?: string;
  className?: string;
};

export default function WhatsAppButton({ label = "Contact me on WhatsApp", className = "" }: Props) {
  return (
    <a
      href="https://wa.me/6598271174"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-ink transition hover:bg-terracottaDark ${className}`}
    >
      {label}
    </a>
  );
}
