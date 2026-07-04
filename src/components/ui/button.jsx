export default function Button({
  variant = "primary",
  children,
  href,
  target,
  className = "",
  ...props
}) {
  const baseClasses = "px-8 py-4 rounded-sm font-inter font-medium transition-all duration-200 ease-out";

  const variantClasses = {
    primary: "bg-verde text-oro hover:bg-oro hover:text-nero hover:scale-102 shadow-lg",
    secondary: "border-2 border-oro text-oro bg-transparent hover:bg-oro hover:bg-opacity-10",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
