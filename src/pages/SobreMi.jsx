import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import {
    TerminalSquare,
    Cpu,
    Network,
    Database,
    Code2,
    FileCode2,
    GraduationCap,
    Globe,
    BookOpenCheck,
    CupSoda,
    UsersRound
} from "lucide-react";
import PageTransition from "../components/PagesTransition.jsx";

export default function SobreMi() {
    return (
        <PageTransition>
        <SectionWrapper className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen px-6 sm:px-10 pt-40 pb-32 flex items-start justify-center">
            <section className="w-full max-w-5xl font-mono">

                {/* whoami */}
                <motion.h2
                    className="text-green-400 text-xl mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    &gt; whoami
                </motion.h2>
                <motion.p
                    className="text-lg text-white mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />

                {/* Intro técnica */}
                <motion.p
                    className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Soy <span className="text-white font-semibold">desarrollador backend</span> con experiencia real en el desarrollo de APIs REST, automatización de tareas con Python, infraestructura de <span className="text-cyan-400">redes</span> y administración de bases de datos relacionales.
                    Trabajo con stacks como <span className="text-blue-400">Java + Spring Boot</span>, <span className="text-yellow-400">Node.js</span>, y uso <span className="text-green-400">Linux</span> como entorno de trabajo diario.
                </motion.p>

                {/* Tech stack grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {[
                        { icon: <TerminalSquare className="text-green-400 w-6 h-6" />, label: "APIs REST" },
                        { icon: <Code2 className="text-blue-400 w-6 h-6" />, label: "Java + Spring Boot" },
                        { icon: <Cpu className="text-yellow-400 w-6 h-6" />, label: "Node.js + Express" },
                        { icon: <Database className="text-pink-400 w-6 h-6" />, label: "SQL (MySQL, SQL Server)" },
                    ].map(({ icon, label }, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-center gap-3 bg-[#111] p-3 rounded-lg border border-zinc-800 hover:border-green-500 transition"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {icon}
                            <span className="text-sm text-white">{label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Diferenciales */}
                <motion.div
                    className="bg-black/40 border border-zinc-800 rounded-xl p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-green-400 mb-2"># Mi diferencial</p>
                    <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed">
                        <li>Automatizo tareas con scripts bash o Python</li>
                        <li>Diseño soluciones backend orientadas a rendimiento y escalabilidad</li>
                        <li>Manejo infraestructura de red real (WDS, túneles, bridges)</li>
                        <li>Documentación clara, código mantenible y enfoque técnico real</li>
                    </ul>
                </motion.div>

                {/* Idiomas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-8 p-6 bg-black/40 backdrop-blur rounded-xl border border-white/10"
                >
                    <h3 className="text-green-400 font-mono text-base mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Idiomas
                    </h3>

                    <ul className="text-sm sm:text-base text-white space-y-1 list-disc list-inside pl-2">
                        <li><span className="font-semibold">Español:</span> Nativo</li>
                        <li><span className="font-semibold">Inglés:</span> Avanzado (verbal y escrito)</li>
                    </ul>
                </motion.div>

                {/* Simulación de terminal: comando */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 font-mono text-green-500 text-sm sm:text-base"
                >
                    <p className="mb-2">$ fetch academic_info --profile robertovasquez</p>
                </motion.div>

                {/* Educación */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-4 p-6 bg-black/40 backdrop-blur rounded-xl border border-white/10"
                >
                    <motion.h3
                        className="text-green-400 font-mono text-base mb-4 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                    >
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-green-400">
            <span className="text-white">&gt; </span>educación
        </span>
                        <span className="text-green-400 animate-pulse">█</span>
                    </motion.h3>

                    <p className="text-white font-semibold mb-2">
                        🎓 Tecnicatura Universitaria en Desarrollo de Software
                    </p>
                    <p className="text-gray-400 text-sm mb-6">
                        UADE – Ingreso 2024 · Graduación esperada: 2026
                    </p>

                    {/* Conceptos clave aprendidos con íconos */}
                    <div className="text-sm sm:text-base text-gray-300 space-y-3 mt-6">
                        <div className="flex items-start gap-3">
                            <Code2 className="text-green-400 w-5 h-5 mt-0.5" />
                            <p><span className="text-white font-semibold">POO:</span> Paradigma orientado a objetos — <span className="text-gray-400">Paradigmas y Algoritmos II</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Database className="text-pink-400 w-5 h-5 mt-0.5" />
                            <p><span className="text-white font-semibold">SQL:</span> Consultas, modelado y normalización — <span className="text-gray-400">Ingeniería de Datos I</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CupSoda className="text-yellow-400 w-5 h-5 mt-0.5" />
                            <p><span className="text-white font-semibold">Java:</span> Backend estructurado y algoritmos — <span className="text-gray-400">Paradigmas y Algoritmos II</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <UsersRound className="text-blue-400 w-5 h-5 mt-0.5" />
                            <p><span className="text-white font-semibold">Scrum:</span> Roles, sprints, retrospectivas — <span className="text-gray-400">Testing de Aplicaciones</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Network className="text-green-400 w-5 h-5 mt-0.5" />
                            <p><span className="text-white font-semibold">APIs REST:</span> Diseño y consumo de endpoints — <span className="text-gray-400">Algoritmos III / Aplicaciones Interactivas</span></p>
                        </div>
                    </div>

                </motion.div>

            </section>
        </SectionWrapper>
        </PageTransition>
    );
}
