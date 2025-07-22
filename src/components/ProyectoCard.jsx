import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ChevronDown, ChevronUp } from "lucide-react";

export default function ProyectoCard({ titulo, descripcion, tecnologias, repo }) {
    const [expandir, setExpandir] = useState(false);

    const descripcionCorta =
        descripcion.length > 140 ? descripcion.slice(0, 140) + "..." : descripcion;

    return (
        <motion.div
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            {/* Título + GitHub */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{titulo}</h3>
                {repo && (
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        <Github size={18} />
                        Ver repo
                    </a>
                )}
            </div>

            {/* Descripción */}
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                {expandir ? descripcion : descripcionCorta}
            </p>

            {/* Botón Ver más / Ver menos */}
            {descripcion.length > 140 && (
                <button
                    onClick={() => setExpandir(!expandir)}
                    className="flex items-center gap-1 text-sm text-blue-500 hover:underline focus:outline-none mb-4"
                >
                    {expandir ? (
                        <>
                            Ver menos <ChevronUp size={14} />
                        </>
                    ) : (
                        <>
                            Ver más <ChevronDown size={14} />
                        </>
                    )}
                </button>
            )}

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
                {tecnologias.map((tech, idx) => (
                    <span
                        key={idx}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs px-3 py-1 rounded-full"
                    >
            {tech}
          </span>
                ))}
            </div>
        </motion.div>
    );
}
