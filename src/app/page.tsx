import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 font-sans">
        {/* Hero */}
        <section className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Automatiza tus procesos <br className="hidden md:block" />
            con inteligencia artificial
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            FlowIA potencia pequeños negocios conectando herramientas como WhatsApp, Instagram, Facebook y más.
          </p>
          <Button className="text-base gap-2">
            Contáctanos <MoveRight className="w-4 h-4" />
          </Button>
        </section>

        {/* Servicios */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">¿Qué hace FlowIA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-neutral-800 text-white shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Automatización con IA</h3>
                <p className="text-sm text-gray-400">
                  Conectamos tus canales digitales con procesos inteligentes y GPT para responder y organizar tareas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 text-white shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Flujos Personalizados</h3>
                <p className="text-sm text-gray-400">
                  Automatizamos pedidos, respuestas y seguimientos desde Instagram, WhatsApp y más.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 text-white shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Escalabilidad</h3>
                <p className="text-sm text-gray-400">
                  Desde tiendas locales hasta empresas en expansión, adaptamos la automatización a tu ritmo.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Listo para comenzar?</h2>
          <p className="text-gray-400 mb-6">
            Agenda una llamada con nosotros y descubre cómo FlowIA puede ayudarte a crecer.
          </p>
          <Button className="text-base gap-2">
            Agenda tu consulta <MoveRight className="w-4 h-4" />
          </Button>
        </section>
      </div>
    </main>
  );
}
