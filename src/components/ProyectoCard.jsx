// src/components/ProyectoCard.jsx
import { motion } from "framer-motion";

export default function ProyectoCard({ nombre, descripcion, tecnologias, icono, repositorio, delay = 0 }) {
    return (
        <motion.div
            className="border border-neutral-800 bg-neutral-950 rounded-xl p-6 shadow-md hover:shadow-green-600/10 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
        >
            <div className="flex items-center gap-3 mb-3">
                {icono}
                <h3 className="text-lg font-semibold text-white">{nombre}</h3>
            </div>

            <p className="text-gray-300 text-sm mb-4">{descripcion}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {tecnologias.map((tech, i) => (
                    <span key={i} className="bg-black/30 border border-green-600 text-green-400 px-2 py-1 rounded text-xs font-mono">
            {tech}
          </span>
                ))}
            </div>

            <a
                href={repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-green-400 hover:underline"
            >
                Ver repositorio →
            </a>
        </motion.div>
    );
}
