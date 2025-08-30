import {
    ServerCog,
    Database,
    Code2,
    ChevronsUpDown,
    Calendar,
    MapPin,
    ExternalLink
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
        periodo: "6 meses",
        ubicacion: "Buenos Aires, Argentina",
        icono: <ServerCog className="w-5 h-5 text-primary-500" />,
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
        logros: [
            "Automatización del 80% de procesos manuales",
            "Reducción del tiempo de despliegue en 70%",
            "Implementación de sistema de monitoreo en tiempo real"
        ],
        referencia: {
            label: "Ver esquema lógico",
            href: "#",
        },
        imagen: "/images/microtv.gif",
        tipo: "trabajo"
    },
    {
        empresa: "Proyecto académico — Ingeniería de Datos",
        rol: "Diseñador de base de datos",
        fecha: "2025",
        periodo: "4 meses",
        ubicacion: "UADE",
        icono: <Database className="w-5 h-5 text-blue-500" />,
        tecnologias: ["SQL Server", "Stored Procedures", "Triggers", "KPIs"],
        descripcionCorta:
            "Diseño de base de datos relacional para control de infracciones de tránsito.",
        descripcionLarga: [
            "Modelado lógico y físico de base de datos para una empresa municipal de control vehicular.",
            "Implementación de procedimientos almacenados, funciones y triggers para automatización de reportes.",
            "Consultas optimizadas para reportes mensuales y dashboards de gestión.",
            "Documentación y entrega de scripts SQL para deploy automático.",
        ],
        logros: [
            "Optimización de consultas con mejora del 60% en rendimiento",
            "Automatización completa de reportes mensuales",
            "Documentación técnica completa del sistema"
        ],
        referencia: {
            label: "Ver ER + scripts",
            href: "#",
        },
        imagen: "/images/sql-diagram.gif",
        tipo: "academico"
    },
    {
        empresa: "Proyecto personal",
        rol: "Desarrollador Backend",
        fecha: "2024",
        periodo: "2 meses",
        ubicacion: "Remoto",
        icono: <Code2 className="w-5 h-5 text-green-500" />,
        tecnologias: ["Java", "Spring Boot", "MySQL", "JWT"],
        descripcionCorta:
            "Aplicación CRUD de gestión de tareas con autenticación y API REST.",
        descripcionLarga: [
            "Endpoints protegidos con JWT para login, registro y autorización.",
            "CRUD completo con persistencia y validaciones en backend.",
            "Base de datos relacional modelada con relaciones Usuario ↔ Tareas.",
            "Pruebas con Postman y documentación técnica de endpoints.",
        ],
        logros: [
            "Implementación completa de seguridad JWT",
            "API RESTful siguiendo mejores prácticas",
            "Cobertura de pruebas del 85%"
        ],
        referencia: {
            label: "Ver repo",
            href: "https://github.com/robertovasquez-dev",
        },
        imagen: "/images/todo.gif",
        tipo: "personal"
    },
];

const tipoColors = {
    trabajo: "bg-green-500/10 text-green-400 border-green-500/20",
    academico: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    personal: "bg-purple-500/10 text-purple-400 border-purple-500/20"
};

const tipoLabels = {
    trabajo: "Experiencia Laboral",
    academico: "Proyecto Académico",
    personal: "Proyecto Personal"
};

export default function Experiencia() {
    const [expandido, setExpandido] = useState(null);

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-900">
                <SectionWrapper className="px-4 sm:px-10 pt-32 pb-32">
                    
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm font-medium mb-6 text-slate-300"
                        >
                            <Calendar className="w-4 h-4 text-primary-400" />
                            Trayectoria Profesional
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                        >
                            Mi <span className="text-gradient">Experiencia</span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Un recorrido por mis proyectos más significativos en <span className="text-primary-400 font-semibold">desarrollo backend</span>, 
                            desde experiencias laborales hasta proyectos académicos y personales
                        </motion.p>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-6xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-slate-700 to-transparent"></div>
                            
                            <div className="space-y-12">
                                {experiencias.map((exp, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.2, duration: 0.6 }}
                                        className="relative"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-6 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-slate-900 shadow-lg shadow-primary-500/50"></div>
                                        
                                        {/* Content card */}
                                        <div className="ml-20 group">
                                            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 ${expandido === i ? 'border-primary-500/50' : ''}`}>
                                                
                                                {/* Header */}
                                                <div className="p-8 pb-6">
                                                    <div className="flex items-start justify-between mb-6">
                                                        <div className="flex items-center gap-4">
                                                            <div className="p-3 bg-slate-700 rounded-xl border border-slate-600">
                                                                {exp.icono}
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-2">
                                                                    <h3 className="text-xl font-bold text-white">{exp.empresa}</h3>
                                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${tipoColors[exp.tipo]}`}>
                                                                        {tipoLabels[exp.tipo]}
                                                                    </span>
                                                                </div>
                                                                <p className="text-primary-400 font-semibold text-lg">{exp.rol}</p>
                                                                <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                                                                    <div className="flex items-center gap-1">
                                                                        <Calendar className="w-4 h-4" />
                                                                        {exp.fecha} • {exp.periodo}
                                                                    </div>
                                                                    <div className="flex items-center gap-1">
                                                                        <MapPin className="w-4 h-4" />
                                                                        {exp.ubicacion}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <button
                                                            onClick={() => setExpandido(expandido === i ? null : i)}
                                                            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-primary-500 text-slate-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
                                                        >
                                                            <ChevronsUpDown className="w-4 h-4" />
                                                            {expandido === i ? 'Menos detalles' : 'Más detalles'}
                                                        </button>
                                                    </div>
                                                    
                                                    <p className="text-slate-300 text-lg leading-relaxed">
                                                        {exp.descripcionCorta}
                                                    </p>
                                                </div>

                                                {/* Expanded content */}
                                                <AnimatePresence>
                                                    {expandido === i && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="border-t border-slate-700 px-8 pb-8"
                                                        >
                                                            <div className="pt-6 grid md:grid-cols-2 gap-8">
                                                                <div>
                                                                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                                                        Responsabilidades
                                                                    </h4>
                                                                    <ul className="space-y-3">
                                                                        {exp.descripcionLarga.map((responsabilidad, idx) => (
                                                                            <li key={idx} className="text-slate-300 text-sm leading-relaxed pl-4 relative">
                                                                                <div className="absolute left-0 top-2 w-1 h-1 bg-slate-500 rounded-full"></div>
                                                                                {responsabilidad}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                
                                                                <div>
                                                                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                                        Logros principales
                                                                    </h4>
                                                                    <ul className="space-y-3">
                                                                        {exp.logros.map((logro, idx) => (
                                                                            <li key={idx} className="text-slate-300 text-sm leading-relaxed pl-4 relative">
                                                                                <div className="absolute left-0 top-2 w-1 h-1 bg-green-500 rounded-full"></div>
                                                                                {logro}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Technologies */}
                                                            <div className="mt-8">
                                                                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                                    Tecnologías utilizadas
                                                                </h4>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {exp.tecnologias.map((tech, idx) => (
                                                                        <span
                                                                            key={idx}
                                                                            className="bg-slate-700/50 border border-slate-600 text-slate-300 text-xs px-3 py-1.5 rounded-full hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                                                                        >
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Reference link */}
                                                            {exp.referencia && (
                                                                <div className="mt-6">
                                                                    <a
                                                                        href={exp.referencia.href}
                                                                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <ExternalLink className="w-4 h-4" />
                                                                        {exp.referencia.label}
                                                                    </a>
                                                                </div>
                                                            )}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </SectionWrapper>
            </div>
        </PageTransition>
    );
}