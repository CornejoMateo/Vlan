"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Zap, Lock, Headphones } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Compromiso",
    description: "Nos comprometemos con la excelencia en cada instalación.",
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Tecnología de punta para resultados superiores.",
  },
  {
    icon: Lock,
    title: "Confianza",
    description: "Seguridad y transparencia en todos nuestros servicios.",
  },
  {
    icon: Headphones,
    title: "Soporte",
    description: "Atención continua para resolver tus necesidades.",
  },
]

export function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nuestro Objetivo
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Conectar y proteger cada hogar y negocio
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nuestra misión es brindar servicios de internet y seguridad de la
              más alta calidad, garantizando conexiones estables y protección
              confiable para nuestros clientes. Trabajamos cada día para ser tu
              aliado tecnológico de confianza.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Creemos que todos merecen acceso a tecnología de calidad.
              Por eso, nos esforzamos en ofrecer soluciones accesibles sin
              comprometer la excelencia del servicio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-background hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
