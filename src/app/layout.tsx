import "./globals.css";
import React from "react";

export const metadata = {
  title: "FlowIA - Automatización inteligente",
  description: "Soluciones de automatización con IA para pequeñas empresas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
