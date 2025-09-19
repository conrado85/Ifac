"use client";

import { useState } from "react";

export default function NuevoClientePage() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nuevo cliente:", nombre);
    setNombre("");
  };

  return (
    <section>
      <h1 className="text-2xl font-bold">Nuevo Cliente</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del cliente"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Guardar
        </button>
      </form>
    </section>
  );
}
