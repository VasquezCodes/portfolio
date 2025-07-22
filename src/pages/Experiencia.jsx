import { Briefcase, ExternalLink, Minus, Plus } from "lucide-react";
import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

export default function Experiencia() {
    const experiencias = [
        {
            empresa: "Micro TV Producciones S.A.",
            rol: "Desarrollador Backend",
            periodo: "Mar 2024 – Presente",
            stack: ["Node.js", "Express", "SQL Server", "XML", "MikroTik", "Syncthing"],
            tareas: [
                "Diseño y mantenimiento de APIs REST para flotas publicitarias y campañas.",
                "Automatización de archivos XML y generación de índices desde base de datos.",
                "Integración de túneles EoIP/WireGuard y control de procesos remotos.",
                "Validaciones de conflictos y asignación dinámica de dispositivos.",
            ],
            link: "#", // reemplazá por tu demo, diagrama o GitHub
        },
        {
            empresa: "Tasklist API (proyecto técnico)",
            rol: "Dev Backend (freelance/prueba técnica)",
            periodo: "2024",
            stack: ["Java", "Spring Boot", "MySQL"],
            tareas: [
                "Desarrollo de endpoints CRUD con autenticación básica.",
                "Estructuración modular del proyecto siguiendo buenas prácticas.",
            ],
            link: "#",
        },
        {
            empresa: "Ecosistema WDS Autónomo",
            rol: "Automatización embebida",
            periodo: "2023",
            stack: ["Python", "Bash", "MikroTik", "Rockchip", "Syncthing"],
            tareas: [
                "Programación de scripts para establecer enlaces WDS según RSSI y CCQ.",
                "Gestión automática de procesos de sincronización y cierre.",
                "Registro y control de conectividad entre nodos embebidos.",
            ],
            link: "#",
        },
    ];

    const [expandido, setExpandido] = useState(null);

    return (
        <SectionWrapper>
            <section className="bg-slate-50 dark:bg-[#0a0a0a] px-6 py-12 max-w-6xl mx-auto text-gray-800 dark:text-white">
                <h2 className="text-3xl font-bold text-blue-600 mb-10">Experiencia</h2>

                <ol className="relative border-l border-gray-300 dark:border-gray-700">
                    {experiencias.map((exp, idx) => (
                        <li key={idx} className="mb-12 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-900 text-white">
                <Briefcase className="w-4 h-4" />
              </span>

                            <div className="flex justify-between items-start gap-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {exp.empresa}
                                    <span className="ml-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    ({exp.periodo})
                  </span>
                                </h3>

                                <button
                                    onClick={() => setExpandido(idx === expandido ? null : idx)}
                                    className="text-blue-500 hover:underline text-sm flex items-center gap-1"
                                >
                                    {idx === expandido ? <Minus size={16} /> : <Plus size={16} />}
                                    {idx === expandido ? "Ver menos" : "Ver más"}
                                </button>
                            </div>

                            <p className="mb-2 text-sm text-blue-500">{exp.rol}</p>

                            {expandido === idx && (
                                <>
                                    <ul className="list-disc list-inside mb-3 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                                        {exp.tareas.map((tarea, i) => (
                                            <li key={i}>{tarea}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {exp.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-1 rounded-full font-medium text-gray-800 dark:text-gray-100"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    {exp.link && (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                                        >
                                            Ver referencias / demo / diagrama <ExternalLink size={14} />
                                        </a>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </section>
        </SectionWrapper>
    );
}
