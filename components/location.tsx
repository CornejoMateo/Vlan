"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Principal 123, Ciudad",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 11 1234-5678",
    href: "tel:+541112345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@vlan.com",
    href: "mailto:contacto@vlan.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
    href: null,
  },
]

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ubicacion" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Dónde Estamos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Encuéntranos fácilmente
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Visítanos en nuestra oficina o contáctanos por cualquiera de
            nuestros canales de comunicación.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-background hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden bg-muted"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  Mapa interactivo
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
