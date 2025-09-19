import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-4">IFAC - Facturación</header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
