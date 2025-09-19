import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, nombre: "Juan Pérez" },
    { id: 2, nombre: "María Gómez" },
  ]);
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ message: "Cliente creado", data });
}
