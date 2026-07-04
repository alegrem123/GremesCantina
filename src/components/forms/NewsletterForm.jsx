"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setMessage("Grazie! Controlla la tua email per confermare l'iscrizione.");
      setEmail("");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="La tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 border-2 border-beige focus:border-oro focus:ring-0 px-4 py-2 font-inter text-sm focus:outline-none transition-colors"
          aria-label="Email per newsletter"
        />
        <button
          type="submit"
          className="bg-verde text-oro hover:bg-oro hover:text-nero px-6 py-2 font-inter text-sm font-medium uppercase whitespace-nowrap transition-all duration-200"
        >
          Iscriviti
        </button>
      </div>
      {message && (
        <p className="text-sm text-oro mt-3 text-center">{message}</p>
      )}
    </form>
  );
}
