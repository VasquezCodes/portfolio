import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowRight, ExternalLink } from "lucide-react";
import PageTransition from "../components/PagesTransition.jsx";

export default function Home() {
    const [apiMessage, setApiMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/api/hello")
            .then((res) => res.json())
            .then((data) => setApiMessage(data.message))
            .catch(() => {});
    }, []);

    const skills = [
        { name: "Frontend Development", description: "React, Next.js, TypeScript" },
        { name: "Backend Development", description: "Node.js, Express, Python" },
        { name: "Database Design", description: "PostgreSQL, MongoDB, Redis" },
        { name: "Cloud & DevOps", description: "AWS, Docker, CI/CD" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-900">
                {/* Hero Section */}
                <SectionWrapper className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 pt-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Status */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm text-slate-300 bg-slate-800 border border-slate-700 rounded-full"
                        >
                            <span className="status-dot status-online animate-pulse"></span>
                            Disponible para proyectos
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                Hola, soy <span className="text-gradient">Roberto</span>
                            </h1>
                            
                            <div className="text-xl sm:text-2xl text-slate-300 h-8 mb-6">
                                <Typewriter
                                    words={[
                                        "Desarrollador Fullstack",
                                        "Especialista en APIs",
                                        "Automatización con Python",
                                        "Arquitecturas escalables"
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
                        >
                            Construyo aplicaciones web modernas y APIs robustas. 
                            Me especializo en crear soluciones escalables con tecnologías 
                            como React, Node.js y Python.
                        </motion.p>

                        {/* Backend Status */}
                        {apiMessage && (
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 px-3 py-2 mb-8 text-sm text-green-300 bg-green-900/20 border border-green-700 rounded-lg"
                            >
                                <span className="status-dot status-online"></span>
                                Backend conectado: {apiMessage}
                            </motion.div>
                        )}

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            <a
                                href="https://github.com/VasquezCodes?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2 no-underline"
                            >
                                <Github size={18} />
                                Ver proyectos
                            </a>

                            <a
                                href="https://www.linkedin.com/in/roberto-vasquez-404729241/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center gap-2 no-underline"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>

                            <Link
                                to="/contacto"
                                className="btn-secondary inline-flex items-center gap-2 no-underline"
                            >
                                Contacto
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            variants={itemVariants}
                            className="text-sm text-slate-500 animate-pulse"
                        >
                            ↓ Conoce más sobre mi trabajo
                        </motion.div>
                    </motion.div>
                </SectionWrapper>

                {/* Skills Section */}
                <SectionWrapper className="py-20 bg-slate-800">
                    <div className="max-w-6xl mx-auto px-6 sm:px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Especialidades técnicas
                            </h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                Tecnologías y herramientas con las que trabajo día a día
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card p-6 text-center hover:shadow-lg transition-all duration-300"
                                >
                                    <h3 className="font-semibold text-white mb-2">
                                        {skill.name}
                                    </h3>
                                    <p className="text-sm text-slate-300">
                                        {skill.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center mt-16"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">
                                ¿Trabajamos juntos?
                            </h3>
                            <p className="text-lg text-slate-300 mb-6 max-w-xl mx-auto">
                                Siempre estoy abierto a nuevas oportunidades y proyectos interesantes.
                            </p>
                            <Link
                                to="/sobre-mi"
                                className="btn-primary inline-flex items-center gap-2 no-underline"
                            >
                                Conocer más
                                <ExternalLink size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </div>
        </PageTransition>
    );
}