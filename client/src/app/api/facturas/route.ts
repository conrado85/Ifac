import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: "FAC-001", total: 1500 },
    { id: "FAC-002", total: 3000 },
  ]);
}
