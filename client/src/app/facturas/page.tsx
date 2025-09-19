import Link from "next/link";

export default function FacturasPage() {
  const facturas = [
    { id: "FAC-001", total: 1500 },
    { id: "FAC-002", total: 3000 },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold">Facturas</h1>
      <ul className="mt-4 space-y-2">
        {facturas.map((f) => (
          <li key={f.id} className="border p-2 rounded bg-white">
            <Link href={`/facturas/${f.id}`}>{f.id} - ${f.total}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
