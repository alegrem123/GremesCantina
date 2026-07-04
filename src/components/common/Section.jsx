export default function Section({ children, className = "", id }) {
  const baseClasses = "py-section-mobile md:py-section-desktop";
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <section id={id} className={combinedClasses}>
      {children}
    </section>
  );
}
