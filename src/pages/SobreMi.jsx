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
        <SectionWrapper className="text-white min-h-screen px-6 sm:px-10 pt-40 pb-32 flex items-start justify-center">
            <section className="w-full max-w-5xl">

                {/* Encabezado */}
                <motion.h2
                    className="text-purple-300 text-xl mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    Sobre mí
                </motion.h2>

                {/* Intro técnica */}
                <motion.p
                    className="text-indigo-100 text-base sm:text-lg leading-relaxed mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Soy <span className="font-semibold">desarrollador backend</span> con experiencia real en el desarrollo de APIs REST, automatización de tareas con Python, infraestructura de redes y administración de bases de datos relacionales.
                    Trabajo con stacks como <span className="text-purple-300">Java + Spring Boot</span>, <span className="text-blue-300">Node.js</span>, y uso <span className="text-indigo-300">Linux</span> como entorno de trabajo diario.
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
                        { icon: <TerminalSquare className="text-purple-300 w-6 h-6" />, label: "APIs REST" },
                        { icon: <Code2 className="text-indigo-300 w-6 h-6" />, label: "Java + Spring Boot" },
                        { icon: <Cpu className="text-blue-300 w-6 h-6" />, label: "Node.js + Express" },
                        { icon: <Database className="text-pink-300 w-6 h-6" />, label: "SQL (MySQL, SQL Server)" },
                    ].map(({ icon, label }, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-center gap-3 glass p-3 rounded-lg hover:border-purple-400 transition"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {icon}
                            <span className="text-sm">{label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Diferenciales */}
                <motion.div
                    className="glass rounded-xl p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-purple-300 mb-2">Mi diferencial</p>
                    <ul className="list-disc list-inside text-indigo-100 text-base leading-relaxed">
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
                    className="mt-8 p-6 glass rounded-xl"
                >
                    <h3 className="text-purple-300 text-base mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Idiomas
                    </h3>

                    <ul className="text-sm sm:text-base text-indigo-100 space-y-1 list-disc list-inside pl-2">
                        <li><span className="font-semibold text-white">Español:</span> Nativo</li>
                        <li><span className="font-semibold text-white">Inglés:</span> Avanzado (verbal y escrito)</li>
                    </ul>
                </motion.div>

                {/* Educación */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-16 p-6 glass rounded-xl"
                >
                    <motion.h3
                        className="text-purple-300 text-base mb-4 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                    >
                        <GraduationCap className="w-4 h-4" />
                        Educación
                    </motion.h3>

                    <p className="text-white font-semibold mb-2">
                        🎓 Tecnicatura Universitaria en Desarrollo de Software
                    </p>
                    <p className="text-indigo-200 text-sm mb-6">
                        UADE – Ingreso 2024 · Graduación esperada: 2026
                    </p>

                    {/* Conceptos clave aprendidos con íconos */}
                      <div className="text-sm sm:text-base text-indigo-100 space-y-3 mt-6">
                          <div className="flex items-start gap-3">
                              <Code2 className="text-purple-300 w-5 h-5 mt-0.5" />
                              <p><span className="text-white font-semibold">POO:</span> Paradigma orientado a objetos — <span className="text-indigo-200">Paradigmas y Algoritmos II</span></p>
                          </div>
                          <div className="flex items-start gap-3">
                              <Database className="text-pink-300 w-5 h-5 mt-0.5" />
                              <p><span className="text-white font-semibold">SQL:</span> Consultas, modelado y normalización — <span className="text-indigo-200">Ingeniería de Datos I</span></p>
                          </div>
                          <div className="flex items-start gap-3">
                              <CupSoda className="text-blue-300 w-5 h-5 mt-0.5" />
                              <p><span className="text-white font-semibold">Java:</span> Backend estructurado y algoritmos — <span className="text-indigo-200">Paradigmas y Algoritmos II</span></p>
                          </div>
                          <div className="flex items-start gap-3">
                              <UsersRound className="text-indigo-300 w-5 h-5 mt-0.5" />
                              <p><span className="text-white font-semibold">Scrum:</span> Roles, sprints, retrospectivas — <span className="text-indigo-200">Testing de Aplicaciones</span></p>
                          </div>
                          <div className="flex items-start gap-3">
                              <Network className="text-purple-300 w-5 h-5 mt-0.5" />
                              <p><span className="text-white font-semibold">APIs REST:</span> Diseño y consumo de endpoints — <span className="text-indigo-200">Algoritmos III / Aplicaciones Interactivas</span></p>
                          </div>
                      </div>

                </motion.div>

            </section>
        </SectionWrapper>
        </PageTransition>
    );
}
