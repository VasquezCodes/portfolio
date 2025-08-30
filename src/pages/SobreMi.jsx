import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";
import {
    TerminalSquare,
    Cpu,
    Network,
    Database,
    Code2,
    GraduationCap,
    Globe,
    CupSoda,
    UsersRound,
    Star,
    Award,
    Target,
    Zap,
    Brain,
    Heart
} from "lucide-react";
import PageTransition from "../components/PagesTransition.jsx";

export default function SobreMi() {
    const heroRef = useRef(null);
    const skillsRef = useRef(null);
    const educationRef = useRef(null);
    
    const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
    const skillsInView = useInView(skillsRef, { once: true, threshold: 0.2 });
    const educationInView = useInView(educationRef, { once: true, threshold: 0.2 });

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const techStack = [
        { icon: TerminalSquare, label: "APIs REST", color: "text-primary-400", level: 90 },
        { icon: Code2, label: "Java + Spring Boot", color: "text-orange-400", level: 85 },
        { icon: Cpu, label: "Node.js + Express", color: "text-green-400", level: 88 },
        { icon: Database, label: "SQL (MySQL, SQL Server)", color: "text-blue-400", level: 80 },
        { icon: Network, label: "Linux & DevOps", color: "text-purple-400", level: 75 },
        { icon: Zap, label: "Python Automation", color: "text-yellow-400", level: 82 }
    ];

    const strengths = [
        {
            icon: Brain,
            title: "Automatización Inteligente",
            description: "Scripts bash y Python para optimizar procesos",
            color: "text-purple-400"
        },
        {
            icon: Target,
            title: "Backend Escalable",
            description: "Soluciones orientadas a rendimiento y escalabilidad",
            color: "text-blue-400"
        },
        {
            icon: Network,
            title: "Infraestructura de Red",
            description: "Experiencia real con WDS, túneles y bridges",
            color: "text-green-400"
        },
        {
            icon: Heart,
            title: "Código de Calidad",
            description: "Documentación clara y código mantenible",
            color: "text-red-400"
        }
    ];

    const education = [
        {
            icon: Code2,
            skill: "POO (Programación Orientada a Objetos)",
            course: "Paradigmas y Algoritmos II",
            color: "text-purple-400"
        },
        {
            icon: Database,
            skill: "SQL - Consultas, modelado y normalización",
            course: "Ingeniería de Datos I",
            color: "text-blue-400"
        },
        {
            icon: CupSoda,
            skill: "Java - Backend estructurado y algoritmos",
            course: "Paradigmas y Algoritmos II",
            color: "text-orange-400"
        },
        {
            icon: UsersRound,
            skill: "Scrum - Roles, sprints, retrospectivas",
            course: "Testing de Aplicaciones",
            color: "text-green-400"
        },
        {
            icon: Network,
            skill: "APIs REST - Diseño y consumo de endpoints",
            course: "Algoritmos III / Aplicaciones Interactivas",
            color: "text-indigo-400"
        }
    ];

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-900">
                <SectionWrapper className="px-6 sm:px-10 pt-28 pb-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Section */}
                        <motion.div
                            ref={heroRef}
                            variants={containerVariants}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                            className="text-center mb-20"
                        >
                            <motion.div variants={itemVariants} className="mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm font-medium mb-6 text-slate-300">
                                    <Star className="w-4 h-4 text-yellow-500" />
                                    Desarrollador Fullstack
                                </div>
                                
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
                                    <span className="text-gradient">Sobre</span> <span className="text-white">Mí</span>
                                </h1>
                                
                                <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                    Desarrollador <span className="text-primary-600 font-semibold">backend especializado</span> en crear 
                                    APIs robustas, automatizar procesos y diseñar arquitecturas escalables
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Technical Skills */}
                        <motion.div
                            ref={skillsRef}
                            variants={containerVariants}
                            initial="hidden"
                            animate={skillsInView ? "visible" : "hidden"}
                            className="mb-20"
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-white">
                                <span className="text-gradient">Stack</span> Técnico
                            </motion.h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                                {techStack.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <motion.div
                                            key={tech.label}
                                            variants={itemVariants}
                                            className="card p-6 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-slate-700 rounded-xl border border-slate-600">
                                                    <Icon className={`w-6 h-6 ${tech.color}`} />
                                                </div>
                                                <h3 className="font-semibold text-white">{tech.label}</h3>
                                            </div>
                                            
                                            {/* Progress bar */}
                                            <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                                                <motion.div
                                                    className={`h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600`}
                                                    initial={{ width: 0 }}
                                                    animate={skillsInView ? { width: `${tech.level}%` } : { width: 0 }}
                                                    transition={{ duration: 1.5, delay: index * 0.2 }}
                                                />
                                            </div>
                                            <span className="text-sm text-slate-300">{tech.level}% experiencia</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Strengths */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, threshold: 0.2 }}
                            className="mb-20"
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-white">
                                <span className="text-gradient">Mis</span> Fortalezas
                            </motion.h2>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                {strengths.map((strength) => {
                                    const Icon = strength.icon;
                                    return (
                                        <motion.div
                                            key={strength.title}
                                            variants={itemVariants}
                                            className="card p-8 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`p-3 bg-slate-700 rounded-xl border border-slate-600`}>
                                                    <Icon className={`w-6 h-6 ${strength.color}`} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-2">{strength.title}</h3>
                                                    <p className="text-slate-300 leading-relaxed">{strength.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Languages & Education Grid */}
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Languages */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, threshold: 0.3 }}
                                className="card p-8"
                            >
                                <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                                    <Globe className="w-6 h-6 text-blue-500" />
                                    <span className="text-gradient">Idiomas</span>
                                </motion.h3>
                                
                                <div className="space-y-4">
                                    <motion.div variants={itemVariants} className="flex justify-between items-center">
                                        <span className="text-white font-semibold">Español</span>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex justify-between items-center">
                                        <span className="text-white font-semibold">Inglés</span>
                                        <div className="flex gap-1">
                                            {[...Array(4)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                            <Star className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Education */}
                            <motion.div
                                ref={educationRef}
                                variants={containerVariants}
                                initial="hidden"
                                animate={educationInView ? "visible" : "hidden"}
                                className="card p-8"
                            >
                                <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                                    <GraduationCap className="w-6 h-6 text-purple-500" />
                                    <span className="text-gradient">Educación</span>
                                </motion.h3>
                                
                                <motion.div variants={itemVariants} className="mb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Award className="w-5 h-5 text-yellow-500" />
                                        <h4 className="text-lg font-bold text-white">
                                            Tecnicatura Universitaria en Desarrollo de Software
                                        </h4>
                                    </div>
                                    <p className="text-slate-300 ml-8">
                                        UADE • 2024 - 2026 (en curso)
                                    </p>
                                </motion.div>
                                
                                <div className="space-y-3">
                                    {education.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={item.skill}
                                                variants={itemVariants}
                                                className="flex gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                                            >
                                                <Icon className={`w-4 h-4 mt-1 ${item.color}`} />
                                                <div className="text-sm">
                                                    <span className="text-white font-semibold">{item.skill}</span>
                                                    <p className="text-slate-300">{item.course}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </PageTransition>
    );
}
