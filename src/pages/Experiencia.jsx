import {
    ServerCog,
    Database,
    Code2,
    ChevronsUpDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { useState } from "react";
import PageTransition from "../components/PagesTransition.jsx";

const experiencias = [
    {
        empresa: "Micro TV Producciones S.A.",
        rol: "Backend Developer Jr.",
        fecha: "Jul 2025 - Actualidad",
        icono: <ServerCog className="w-5 h-5 text-green-400" />,
        tecnologias: ["Node.js", "Express", "SQL Server", "Bash", "MikroTik"],
        descripcionCorta:
            "Desarrollo backend real en un sistema de autogestión de flotas y contenido publicitario.",
        descripcionLarga: [
            "Desarrollo de una API REST con Node.js y Express para gestionar flotas, contenidos y campañas.",
            "Implementación de lógica ABM para sincronización de archivos `st_contenido` según operaciones realizadas.",
            "Consultas SQL complejas para obtención de equipos asignados a cada flota y estadísticas relevantes.",
            "Generación automática de archivos por flota (contenido multimedia y publicidad).",
            "Integración con scripts embebidos y herramientas internas para desplegar contenido en dispositivos físicos.",
        ],
        referencia: {
            label: "Ver esquema lógico",
            href: "#",
        },
        imagen: "/images/microtv.gif",
    },
    {
        empresa: "Proyecto académico — Ingeniería de Datos",
        rol: "Diseñador de base de datos",
        fecha: "2025",
        icono: <Database className="w-5 h-5 text-pink-400" />,
        tecnologias: ["SQL Server", "Stored Procedures", "Triggers", "KPIs"],
        descripcionCorta:
            "Diseño de base de datos relacional para control de infracciones de tránsito.",
        descripcionLarga: [
            "Modelado lógico y físico de base de datos para una empresa municipal de control vehicular.",
            "Implementación de procedimientos almacenados, funciones y triggers para automatización de reportes.",
            "Consultas optimizadas para reportes mensuales y dashboards de gestión.",
            "Documentación y entrega de scripts SQL para deploy automático.",
        ],
        referencia: {
            label: "Ver ER + scripts",
            href: "#",
        },
        imagen: "/images/sql-diagram.gif",
    },
    {
        empresa: "Proyecto personal",
        rol: "Desarrollador Backend",
        fecha: "2024",
        icono: <Code2 className="w-5 h-5 text-yellow-400" />,
        tecnologias: ["Java", "Spring Boot", "MySQL", "JWT"],
        descripcionCorta:
            "Aplicación CRUD de gestión de tareas con autenticación y API REST.",
        descripcionLarga: [
            "Endpoints protegidos con JWT para login, registro y autorización.",
            "CRUD completo con persistencia y validaciones en backend.",
            "Base de datos relacional modelada con relaciones Usuario ↔ Tareas.",
            "Pruebas con Postman y documentación técnica de endpoints.",
        ],
        referencia: {
            label: "Ver repo",
            href: "https://github.com/robertovasquez-dev",
        },
        imagen: "/images/todo.gif",
    },
];

export default function Experiencia() {
    const [expandido, setExpandido] = useState(null);

    const imagenActiva = expandido !== null ? experiencias[expandido].imagen : null;

    return (
        <PageTransition>
            <SectionWrapper className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen px-4 sm:px-10 pt-40 pb-32 font-mono">
                <motion.h2
                    className="text-green-400 text-xl mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    &gt; experiencia
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
                    {/* Cards de experiencia */}
                    <div className="w-full lg:w-2/3 space-y-8">
                        {experiencias.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="relative border-l-4 rounded-r-xl border-green-500 bg-neutral-950 p-6 shadow-lg hover:shadow-green-500/10 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex gap-3 items-center">
                                        {exp.icono}
                                        <div>
                                            <p className="text-base sm:text-lg font-bold text-white">{exp.empresa}</p>
                                            <p className="text-sm text-gray-400">{exp.rol} · {exp.fecha}</p>
                                        </div>
                                    </div>
                                    <button
                                        className="text-xs flex items-center gap-1 bg-zinc-800 hover:bg-green-500 hover:text-black text-gray-200 px-3 py-1 rounded transition-all"
                                        onClick={() => setExpandido(expandido === i ? null : i)}
                                    >
                                        <ChevronsUpDown className="w-3 h-3" />
                                        {expandido === i ? "menos" : "más"}
                                    </button>
                                </div>

                                <p className="text-gray-300 text-sm sm:text-base">{exp.descripcionCorta}</p>

                                {expandido === i && (
                                    <>
                                        <ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc list-inside pl-2">
                                            {exp.descripcionLarga.map((linea, idx) => (
                                                <li key={idx}>{linea}</li>
                                            ))}
                                        </ul>

                                        {/* Tecnologías */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.tecnologias.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs border border-green-400 text-green-300 px-2 py-0.5 rounded-full font-mono bg-black/40"
                                                >
                          {tech}
                         </span>
                                            ))}
                                        </div>

                                        {/* Referencia */}
                                        {exp.referencia && (
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
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Imagen lateral animada según experiencia */}
                    <div className="hidden lg:block w-full lg:w-1/3 flex justify-center">
                        <AnimatePresence mode="wait">
                            {imagenActiva && (
                                <motion.img
                                    key={imagenActiva}
                                    src={imagenActiva}
                                    alt="Ilustración de experiencia"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full max-w-sm rounded-xl border border-green-500 shadow-lg shadow-green-500/10"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </SectionWrapper>
        </PageTransition>
    );
}
