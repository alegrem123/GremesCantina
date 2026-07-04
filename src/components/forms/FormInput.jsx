"use client";

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-slate-800"
        >
          {label}
          {required && <span className="text-oro ml-1">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-2 border-beige focus:border-oro focus:ring-0 px-4 py-2 font-inter text-sm focus:outline-none transition-colors"
        {...props}
      />
    </div>
  );
}
