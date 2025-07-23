import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { ServerCog, Code2, ShieldCheck } from "lucide-react";
import PageTransition from "../components/PagesTransition.jsx";

const proyectos = [
    {
        nombre: "Sistema de gestión de campañas",
        descripcion:
            "Control de flotas publicitarias, campañas, y sincronización de archivos con scripts en equipos embebidos.",
        tecnologias: ["Node.js", "SQL Server", "Bash", "MikroTik"],
        icono: <ServerCog className="w-5 h-5 text-green-400" />,
        repo: "#",
    },
    {
        nombre: "Tasklist con autenticación",
        descripcion:
            "Backend completo con operaciones CRUD, autenticación JWT y base de datos relacional.",
        tecnologias: ["Java", "Spring Boot", "MySQL", "JWT"],
        icono: <Code2 className="w-5 h-5 text-blue-400" />,
        repo: "#",
    },
    {
        nombre: "Monitor de dispositivos",
        descripcion:
            "Script en Python que automatiza monitoreo y alertas de redes basadas en MikroTik.",
        tecnologias: ["Python", "MikroTik", "Redes", "Automatización"],
        icono: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
        repo: "#",
    },
];

export default function Proyectos() {
    return (
        <PageTransition>
        <SectionWrapper className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen px-4 sm:px-10 pt-32 font-mono">
            <motion.h2
                className="text-green-400 text-2xl mb-10 flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <span className="text-xl">🖥️</span>
                <span className="text-green-400">&gt;</span> Proyectos
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Lista de proyectos */}
                <div className="flex-1 space-y-8">
                    {proyectos.map((proyecto, i) => (
                        <motion.div
                            key={i}
                            className="border border-neutral-800 bg-neutral-950 rounded-xl p-6 shadow-md hover:shadow-green-600/10 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex gap-3 items-center mb-2">
                                {proyecto.icono}
                                <h3 className="font-bold text-lg text-white">{proyecto.nombre}</h3>
                            </div>
                            <p className="text-gray-300 text-base mb-4">{proyecto.descripcion}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {proyecto.tecnologias.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-black border border-green-500 text-green-400 text-xs px-2 py-0.5 rounded"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <a
                                href={proyecto.repo}
                                className="text-green-400 text-sm hover:underline inline-block"
                            >
                                Ver repositorio →
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Panel lateral */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="w-full lg:max-w-xs bg-neutral-950 border border-green-900 rounded-xl p-6 font-mono text-base text-green-400 shadow-md shadow-green-800/5 self-start"
                >
                    <p className="mb-4 text-green-500 font-semibold text-base"># resumen técnico</p>
                    <ul className="space-y-3 pl-2 leading-relaxed">
                        <li>
                            <span className="text-white">🧰 Stacks:</span>{" "}
                            <span className="text-green-300">Java, Node.js, C#, SQL</span>
                        </li>
                        <li>
                            <span className="text-white">📊 Proyectos:</span>{" "}
                            <span className="text-green-300">3 públicos, 2 internos</span>
                        </li>
                        <li>
                            <span className="text-white">🌐 Infraestructura:</span>{" "}
                            <span className="text-green-300">MikroTik, Docker, Syncthing</span>
                        </li>
                        <li>
                            <span className="text-white">🧠 Preferencias:</span>{" "}
                            <span className="text-green-300">APIs REST, rendimiento, scripting</span>
                        </li>
                        <li>
                            <span className="text-white">📁 Repositorios:</span>{" "}
                            <span className="text-green-300">GitHub privado/público</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </SectionWrapper>
        </PageTransition>
    );
}
