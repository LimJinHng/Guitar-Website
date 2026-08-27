type Props = {
  label: string;
  className?: string;
  dark?: boolean;
};

export default function PlaceholderImage({ label, className = "", dark = false }: Props) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center text-sm ${
        dark
          ? "border-cream/20 bg-charcoal text-cream/50"
          : "border-terracotta/40 bg-sand text-latte"
      } ${className}`}
    >
      {label}
    </div>
  );
}
