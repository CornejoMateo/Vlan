"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Instalación de Fibra Óptica",
    category: "Internet",
  },
  {
    id: 2,
    title: "Sistema de Cámaras HD",
    category: "Seguridad",
  },
  {
    id: 3,
    title: "Centro de Monitoreo",
    category: "Seguridad",
  },
  {
    id: 4,
    title: "Equipo de Trabajo",
    category: "Equipo",
  },
  {
    id: 5,
    title: "Router de Alta Velocidad",
    category: "Internet",
  },
  {
    id: 6,
    title: "Instalación Residencial",
    category: "Proyectos",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1)
  }

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Galería
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Nuestras instalaciones y proyectos
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Conoce algunos de nuestros trabajos y la calidad que ofrecemos en
            cada proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-muted"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {item.id}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-primary-foreground/80 bg-primary/80 px-2 py-1 rounded">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-card">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-card hover:text-primary transition-colors"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="absolute left-4 p-2 text-card hover:text-primary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 p-2 text-card hover:text-primary transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight size={40} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full aspect-video bg-muted rounded-2xl flex items-center justify-center"
          >
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">
                  {galleryItems[selectedImage].id}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {galleryItems[selectedImage].title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {galleryItems[selectedImage].category}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
