export default function ClientesPage() {
  const clientes = [
    { id: 1, nombre: "Juan Pérez" },
    { id: 2, nombre: "María Gómez" },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold">Clientes</h1>
      <ul className="mt-4 space-y-2">
        {clientes.map((c) => (
          <li key={c.id} className="border p-2 rounded bg-white">
            {c.nombre}
          </li>
        ))}
      </ul>
    </section>
  );
}
