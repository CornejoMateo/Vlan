"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Wifi, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Wifi,
    title: "Internet",
    description:
      "Conexiones de alta velocidad con fibra óptica para tu hogar o negocio. Disfruta de internet estable, rápido y sin interrupciones para todas tus actividades en línea.",
    features: [
      "Alta velocidad de descarga y subida",
      "Conexión estable 24/7",
      "Soporte técnico incluido",
      "Instalación profesional",
    ],
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Sistemas de seguridad integrales con cámaras de vigilancia HD, monitoreo remoto y tecnología de punta para proteger lo que más valoras.",
    features: [
      "Cámaras HD y visión nocturna",
      "Monitoreo desde tu celular",
      "Grabación en la nube",
      "Alertas en tiempo real",
    ],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Soluciones diseñadas para ti
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ofrecemos servicios profesionales de conectividad y seguridad,
            adaptados a las necesidades de cada cliente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="group/btn">
                    <Link href="#contacto">
                      Más información
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
