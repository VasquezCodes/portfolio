import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { TerminalSquare, Cpu, Network, Database, Code2, FileCode2 } from "lucide-react";
import { Globe } from "lucide-react";


export default function SobreMi() {
    return (
        <SectionWrapper className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen px-6 sm:px-10 pt-40 flex items-start justify-center">
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
                >
                </motion.p>

                {/* Intro técnica */}
                <motion.p
                    className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Soy <span className="text-white font-semibold">desarrollador backend</span> con experiencia real en el desarrollo de APIs REST, automatización de tareas con Python, infraestructura de red con <span className="text-cyan-400">MikroTik</span>, y administración de bases de datos relacionales.
                    Trabajo con stacks como <span className="text-blue-400">Java + Spring Boot</span>, <span className="text-purple-400">.NET</span>, <span className="text-yellow-400">Node.js</span>, y uso <span className="text-green-400">Linux</span> como entorno de trabajo diario.
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
                        { icon: <FileCode2 className="text-purple-400 w-6 h-6" />, label: "C# + .NET" },
                        { icon: <Cpu className="text-yellow-400 w-6 h-6" />, label: "Node.js + Express" },
                        { icon: <Database className="text-pink-400 w-6 h-6" />, label: "SQL (MySQL, SQL Server)" },
                        { icon: <Network className="text-cyan-400 w-6 h-6" />, label: "MikroTik + túneles" },
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
                        <li>Manejo infraestructura de red real con MikroTik (WDS, túneles, bridges)</li>
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
                        <li>
                            <span className="font-semibold">Español:</span> Nativo
                        </li>
                        <li>
                            <span className="font-semibold">Inglés:</span> Avanzado (verbal y escrito)
                        </li>
                    </ul>
                </motion.div>



            </section>
        </SectionWrapper>
    );
}
