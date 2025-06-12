import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 to-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Título animado */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Dale inteligencia a tus procesos <br /> con FlowIA
        </motion.h1>

        {/* Subfrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-400 max-w-xl mx-auto mb-10"
        >
          Conecta tus canales, responde más rápido y escala sin esfuerzo.
        </motion.p>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button className="text-base px-6 py-3 gap-2">
            Empezar ahora <MoveRight className="w-4 h-4" />
          </Button>
        </motion.div>

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
