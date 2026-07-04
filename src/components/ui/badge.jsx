function Badge({ children, variant = "default", className = "" }) {
  const baseClasses = "inline-block px-3 py-1 text-xs font-medium rounded-sm";

  const variantClasses = {
    default: "bg-verde text-avorio",
    secondary: "bg-beige text-nero",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}

export { Badge };
export default Badge;
