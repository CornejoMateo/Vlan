"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Award, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Equipo Profesional",
    description:
      "Contamos con técnicos capacitados y certificados para brindarte el mejor servicio.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description:
      "Utilizamos equipos de última tecnología para asegurar conexiones estables y seguras.",
  },
  {
    icon: HeartHandshake,
    title: "Soporte Dedicado",
    description:
      "Atención personalizada y soporte técnico disponible para resolver cualquier inconveniente.",
  },
]

export function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Quiénes Somos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Conectando hogares y negocios con tecnología confiable
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            En Vlan, nos especializamos en brindar soluciones integrales de
            conectividad y seguridad. Con años de experiencia en el sector,
            entendemos las necesidades de nuestros clientes y trabajamos para
            superar sus expectativas con servicio de calidad y atención
            personalizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
