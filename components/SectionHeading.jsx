import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "center",
}) {
  const alignCls = align === "left" ? "text-left" : "text-center";
  return (
    <Reveal className={`${alignCls} mx-auto max-w-3xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/70" : "text-navy/70"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={align === "left" ? "mt-5 h-px w-24 bg-gold-line" : "gold-divider"} />
    </Reveal>
  );
}
