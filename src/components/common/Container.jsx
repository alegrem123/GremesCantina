export default function Container({ children, className = "" }) {
  const baseClasses = "max-w-5xl mx-auto px-6 md:px-8";
  const combinedClasses = `${baseClasses} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}
