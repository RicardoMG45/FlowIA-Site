
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <section className="flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-[#EFF2F5] to-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Automatización inteligente para <span className="text-primary">pequeñas empresas</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-neutral-600">
          Creamos soluciones con inteligencia artificial para ahorrar tiempo y mejorar tu operación diaria.
        </p>
        <Button className="mt-8 text-lg px-8 py-6">
          Conoce nuestros planes <MoveRight className="ml-2" />
        </Button>
      </section>

      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <Card className="shadow-xl border border-neutral-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Automatiza tus pedidos</h2>
              <p className="text-neutral-600 text-base">
                Conecta WhatsApp, Instagram y Facebook para gestionar automáticamente tus pedidos y generar reportes.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl border border-neutral-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Integraciones inteligentes</h2>
              <p className="text-neutral-600 text-base">
                Integramos tus apps favoritas como Google Sheets, Notion, ChatGPT, CRMs y más.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl border border-neutral-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">IA para responder y clasificar</h2>
              <p className="text-neutral-600 text-base">
                Usa IA para clasificar mensajes, responder automáticamente o tomar decisiones inteligentes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-neutral-200 text-sm text-neutral-500">
        © 2025 FlowIA. Todos los derechos reservados.
      </footer>
    </main>
  );
}
