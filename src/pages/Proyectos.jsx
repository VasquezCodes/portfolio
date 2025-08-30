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
        icono: <ServerCog className="w-5 h-5 text-primary-500" />,
        repo: "#",
    },
    {
        nombre: "Tasklist con autenticación",
        descripcion:
            "Backend completo con operaciones CRUD, autenticación JWT y base de datos relacional.",
        tecnologias: ["Java", "Spring Boot", "MySQL", "JWT"],
        icono: <Code2 className="w-5 h-5 text-blue-500" />,
        repo: "#",
    },
    {
        nombre: "Monitor de dispositivos",
        descripcion:
            "Script en Python que automatiza monitoreo y alertas de redes basadas en MikroTik.",
        tecnologias: ["Python", "MikroTik", "Redes", "Automatización"],
        icono: <ShieldCheck className="w-5 h-5 text-green-500" />,
        repo: "#",
    },
];

export default function Proyectos() {
    return (
        <PageTransition>
        <div className="min-h-screen bg-slate-900">
            <SectionWrapper className="px-4 sm:px-10 pt-32 pb-32">
            
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm font-medium mb-6 text-slate-300"
                >
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    Portfolio Activo
                </motion.div>
                
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                    Mis <span className="text-gradient">Proyectos</span>
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                >
                    Una selección de proyectos que demuestran mi experiencia en <span className="text-primary-400 font-semibold">desarrollo backend</span>, 
                    automatización y arquitecturas escalables
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Proyectos Grid */}
                <div className="lg:col-span-2 space-y-6">
                      {proyectos.map((proyecto, i) => (
                          <motion.div
                              key={i}
                              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-slate-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.15 }}
                              whileHover={{ y: -8, scale: 1.02 }}
                          >
                              {/* Background decoration */}
                              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                              
                              <div className="relative z-10">
                                  <div className="flex items-center gap-4 mb-6">
                                      <div className="p-3 bg-slate-700 rounded-xl border border-slate-600 group-hover:border-primary-500/50 transition-colors duration-300">
                                          {proyecto.icono}
                                      </div>
                                      <div>
                                          <h3 className="font-bold text-xl text-white group-hover:text-primary-400 transition-colors duration-300">
                                              {proyecto.nombre}
                                          </h3>
                                          <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                      </div>
                                  </div>
                                  
                                  <p className="text-slate-300 text-base mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                                      {proyecto.descripcion}
                                  </p>
                                  
                                  <div className="flex flex-wrap gap-2 mb-6">
                                      {proyecto.tecnologias.map((tech, idx) => (
                                          <span
                                              key={idx}
                                              className="bg-slate-700/50 border border-slate-600 text-slate-300 text-xs px-3 py-1.5 rounded-full hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                                          >
                                              {tech}
                                          </span>
                                      ))}
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                      <a
                                          href={proyecto.repo}
                                          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300 group/link"
                                      >
                                          <span>Ver proyecto</span>
                                          <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                          </svg>
                                      </a>
                                      <div className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                          {i === 0 ? 'En producción' : 'Proyecto personal'}
                                      </div>
                                  </div>
                              </div>
                          </motion.div>
                      ))}
                  </div>

                {/* Sidebar con stats y skills */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    {/* Tech Stack Card */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary-500/20 rounded-lg">
                                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold">Tech Stack</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {['Java', 'Node.js', 'Python', 'SQL'].map((tech, idx) => (
                                <div key={tech} className="bg-slate-700/50 p-3 rounded-lg text-center border border-slate-600 hover:border-primary-500/50 transition-colors duration-300">
                                    <div className="text-sm font-medium text-white">{tech}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Stats Card */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-500/20 rounded-lg">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold">Estadísticas</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">Proyectos Activos</span>
                                <span className="text-white font-bold">3</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">En Producción</span>
                                <span className="text-green-400 font-bold">1</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">Tecnologías</span>
                                <span className="text-blue-400 font-bold">8+</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Info Card */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                        <h3 className="text-white font-bold mb-6">Información adicional</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">Estado actual</span>
                                <span className="text-green-400 font-bold">Disponible</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">Enfoque principal</span>
                                <span className="text-blue-400 font-bold">Backend</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">Modalidad</span>
                                <span className="text-purple-400 font-bold">Remoto</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
        </SectionWrapper>
        </div>
        </PageTransition>
    );
}