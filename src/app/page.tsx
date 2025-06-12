"use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 to-black px-6">
      <div className="text-center max-w-4xl">
        {/* Título animado */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white"
        >
          Dale inteligencia a tus procesos <br /> con FlowIA
        </motion.h1>

        {/* Subfrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl mx-auto"
        >
          Conecta tus canales, responde más rápido y escala sin esfuerzo.
        </motion.p>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="text-base px-6 py-3 gap-2 text-black bg-white hover:bg-gray-200 transition rounded-xl">
            Empezar ahora <MoveRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </main>
  );
}
