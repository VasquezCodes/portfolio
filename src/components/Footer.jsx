import { motion } from "framer-motion";
import { Heart, Code, Coffee, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/VasquezCodes?tab=repositories",
            icon: Github,
            color: "hover:text-purple-400"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/roberto-vasquez-404729241/",
            icon: Linkedin,
            color: "hover:text-blue-400"
        },
        {
            name: "Email",
            url: "mailto:roberto.vasquez.dev@gmail.com",
            icon: Mail,
            color: "hover:text-green-400"
        }
    ];
    
    const techStack = [
        { name: "React", color: "text-blue-400" },
        { name: "Node.js", color: "text-green-400" },
        { name: "Tailwind", color: "text-cyan-400" },
        { name: "Framer Motion", color: "text-purple-400" }
    ];

    return (
        <footer className="relative mt-20 bg-slate-800">
            {/* Gradiente superior */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mb-8" />
            
            <div className="card mx-4 rounded-2xl mb-4">
                <div className="max-w-6xl mx-auto p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Información personal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <h3 className="text-lg font-bold text-gradient mb-2">
                                Roberto Vasquez
                            </h3>
                            <p className="text-slate-300 text-sm mb-3">
                                Desarrollador Fullstack
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-400">
                                <span>Construido con</span>
                                <div className="flex items-center gap-1">
                                    {techStack.map((tech, index) => (
                                        <span key={tech.name}>
                                            <span className={`${tech.color} font-semibold`}>{tech.name}</span>
                                            {index < techStack.length - 1 && <span className="mx-1">·</span>}
                                        </span>
                                    ))}
                                </div>
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <Heart size={12} className="text-red-400 fill-current" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Enlaces sociales */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="flex items-center gap-4">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            target={link.name !== "Email" ? "_blank" : "_self"}
                                            rel={link.name !== "Email" ? "noopener noreferrer" : ""}
                                            className={`p-3 bg-slate-700 border border-slate-600 rounded-full text-slate-300 transition-all duration-300 ${link.color} hover:scale-110 hover:shadow-lg no-underline`}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon size={18} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Copyright y estado */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center md:text-right space-y-2"
                        >
                            <div className="flex items-center justify-center md:justify-end gap-2 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-slate-300">Disponible para proyectos</span>
                            </div>
                            <p className="text-xs text-slate-400">
                                © {currentYear} Roberto Vasquez
                            </p>
                            <p className="text-xs text-slate-500">
                                Todos los derechos reservados
                            </p>
                        </motion.div>
                    </div>
                    
                    {/* Línea divisoria */}
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-6" />
                    
                    {/* Mensaje final */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                            <Code size={12} />
                            <span>Hecho con pasión y muchas tazas de</span>
                            <Coffee size={12} className="text-amber-400" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
