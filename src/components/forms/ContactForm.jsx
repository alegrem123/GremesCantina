"use client";

import { useState } from "react";
import FormInput from "./FormInput";

export default function ContactForm({ winePreFill = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    wine: winePreFill,
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    setSuccessMessage("Messaggio inviato! Ti contatteremo presto.");

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      wine: winePreFill,
      message: "",
    });

    // Clear message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="space-y-4">
        <FormInput
          label="Nome"
          name="name"
          type="text"
          placeholder="Il tuo nome"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="la.tua@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Telefono"
          name="phone"
          type="tel"
          placeholder="+39 123 456 7890"
          value={formData.phone}
          onChange={handleChange}
        />

        {winePreFill === "" && (
          <FormInput
            label="Vino di interesse"
            name="wine"
            type="text"
            placeholder="Es. Teroldego Riserva"
            value={formData.wine}
            onChange={handleChange}
          />
        )}

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-800"
          >
            Messaggio
            <span className="text-oro ml-1">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Il tuo messaggio..."
            value={formData.message}
            onChange={handleChange}
            required
            className="border-2 border-beige focus:border-oro focus:ring-0 px-4 py-2 font-inter text-sm focus:outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-verde text-oro hover:bg-oro hover:text-nero px-6 py-2 font-inter text-sm font-medium uppercase w-full sm:w-auto transition-all duration-200"
        >
          Invia Messaggio
        </button>

        {successMessage && (
          <p className="text-sm text-oro text-center mt-4">{successMessage}</p>
        )}
      </div>
    </form>
  );
}
