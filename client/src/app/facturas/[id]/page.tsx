interface Props {
  params: { id: string };
}

export default function FacturaDetalle({ params }: Props) {
  return (
    <section>
      <h1 className="text-2xl font-bold">Factura {params.id}</h1>
      <p className="mt-2">Detalle de la factura con ID: {params.id}</p>
    </section>
  );
}
