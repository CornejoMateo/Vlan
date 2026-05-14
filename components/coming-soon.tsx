"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Bell, Sparkles } from "lucide-react"

export function ComingSoon() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-card border border-primary/20 p-8 md:p-12"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0"
              >
                <Bell className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Próximamente
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Servicio de Alarmas
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Muy pronto, una nueva forma de proteger tu hogar y negocio.
                </p>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full"
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Mantente atento
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
