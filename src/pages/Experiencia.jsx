import { Briefcase, ServerCog, Database, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

const experiencias = [
    {
        empresa: "G Trans",
        rol: "Backend Developer",
        fecha: "2023 - Actualidad",
        icono: <ServerCog className="w-5 h-5 text-green-400" />,
        tecnologias: ["Node.js", "Express", "SQL Server", "MikroTik", "Bash"],
        descripcionCorta:
            "Procesamiento de datos de infracciones y control de dispositivos remotos.",
        descripcionLarga: [
            "Desarrollo de servicios backend para control de flotas publicitarias.",
            "Automatización de procesos con scripts embebidos en dispositivos RK.",
            "Gestión de sincronización de archivos con Syncthing.",
            "Diseño de APIs REST, control de túneles (EoIP/WireGuard), bridges y redes Docker.",
        ],
        referencia: {
            label: "Ver arquitectura",
            href: "#",
        },
    },
    {
        empresa: "Vial Control",
        rol: "Data Engineer Jr.",
        fecha: "2024 · Proyecto académico",
        icono: <Database className="w-5 h-5 text-cyan-400" />,
        tecnologias: ["SQL Server", "Triggers", "Procedimientos", "KPI", "Modelado"],
        descripcionCorta:
            "Diseño e implementación de una base de datos para gestión de infracciones de tránsito.",
        descripcionLarga: [
            "Modelado entidad-relación y normalización de la base de datos.",
            "Consultas SQL para métricas logísticas y analítica de datos.",
            "Procedimientos almacenados y triggers de validación.",
        ],
    },
    {
        empresa: "Freelance",
        rol: "Automation & Scripts",
        fecha: "2022 - Presente",
        icono: <Zap className="w-5 h-5 text-yellow-400" />,
        tecnologias: ["Python", "Linux", "Automatización", "Bash", "Redes"],
        descripcionCorta:
            "Automatización de tareas para entornos de red y gestión de sistemas.",
        descripcionLarga: [
            "Scripts bash para backups, monitoreo y sincronización.",
            "Configuración remota de routers Mikrotik y tareas cron.",
            "Desarrollo de utilidades CLI para entornos Linux.",
        ],
    },
];

export default function Experiencia() {
    const [expandido, setExpandido] = useState(null);

    return (
        <SectionWrapper className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen px-4 sm:px-10 pt-32 font-mono">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="flex items-center gap-2 text-green-400 text-xl mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Briefcase className="w-5 h-5" />
                    <span>
            <span className="text-green-500">&gt;</span> Experiencia
          </span>
                </motion.h2>

                <div className="space-y-6">
                    {experiencias.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="border border-neutral-800 bg-neutral-950 rounded-xl p-6 shadow-md hover:shadow-green-600/10 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex gap-3 items-center">
                                    {exp.icono}
                                    <div>
                                        <p className="text-sm sm:text-base font-semibold text-white">
                                            {exp.empresa}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-400">
                                            {exp.rol} · {exp.fecha}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="text-sm text-green-500 hover:underline"
                                    onClick={() => setExpandido(expandido === i ? null : i)}
                                >
                                    {expandido === i ? "Ver menos" : "Ver más"}
                                </button>
                            </div>

                            <p className="text-gray-300 text-sm sm:text-base">
                                {exp.descripcionCorta}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {exp.tecnologias.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs border border-green-600 px-2 py-0.5 rounded text-green-300 bg-green-500/5"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            {expandido === i && (
                                <ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc list-inside">
                                    {exp.descripcionLarga.map((linea, idx) => (
                                        <li key={idx}>{linea}</li>
                                    ))}
                                </ul>
                            )}

                            {expandido === i && exp.referencia && (
                                <div className="mt-4">
                                    <a
                                        href={exp.referencia.href}
                                        className="inline-block px-4 py-1 text-sm border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {exp.referencia.label}
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
