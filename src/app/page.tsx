"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-br from-neutral-950 to-black text-white flex items-center justify-center">
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
      </div>
    </main>
  );
}
