function Card({ children, className = "" }) {
  const baseClasses = "bg-avorio rounded-sm border border-beige hover:border-oro transition-colors p-8";
  const combinedClasses = `${baseClasses} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}

export { Card };
export default Card;
