interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {label && (
        <p className="text-sm font-medium text-accent tracking-wider uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
