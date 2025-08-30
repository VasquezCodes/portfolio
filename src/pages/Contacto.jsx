import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
    Mail, 
    Phone, 
    Github, 
    Linkedin, 
    MessageCircle,
    MapPin,
    Clock,
    Send,
    Download,
    ExternalLink
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import PageTransition from "../components/PagesTransition";

export default function Contacto() {
    const [copiado, setCopiado] = useState(false);
    const [abriendoCV, setAbriendoCV] = useState(false);

    const copiarEmail = () => {
        navigator.clipboard.writeText("robertojesusvasquez@gmail.com");
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    const verCV = () => {
        setAbriendoCV(true);
        setTimeout(() => {
            window.open("/cv/RobertoVasquez-CV.pdf", "_blank");
            setAbriendoCV(false);
        }, 1500);
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "robertojesusvasquez@gmail.com",
            description: "Respuesta en 24 horas",
            action: copiarEmail,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10 border-blue-500/20"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Teléfono",
            value: "+54 9 11 3609 3041",
            description: "WhatsApp disponible",
            action: () => window.open("tel:+5491136093041"),
            color: "text-green-400",
            bgColor: "bg-green-500/10 border-green-500/20"
        },
        {
            icon: <Github className="w-6 h-6" />,
            title: "GitHub",
            value: "github.com/VasquezCodes",
            description: "Ver repositorios",
            action: () => window.open("https://github.com/VasquezCodes", "_blank"),
            color: "text-slate-400",
            bgColor: "bg-slate-500/10 border-slate-500/20"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            title: "LinkedIn",
            value: "linkedin.com/in/robertovasquez",
            description: "Red profesional",
            action: () => window.open("https://www.linkedin.com/in/roberto-vasquez-404729241/", "_blank"),
            color: "text-blue-500",
            bgColor: "bg-blue-600/10 border-blue-600/20"
        }
    ];

    const availability = [
        { icon: <Clock className="w-5 h-5" />, text: "Lunes a Viernes: 9:00 - 18:00" },
        { icon: <MapPin className="w-5 h-5" />, text: "Buenos Aires, Argentina (GMT-3)" },
        { icon: <MessageCircle className="w-5 h-5" />, text: "Respuesta rápida por email" }
    ];

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
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            Disponible para proyectos
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                        >
                            <span className="text-gradient">Hablemos</span> de tu proyecto
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            ¿Tienes una idea que necesita <span className="text-primary-400 font-semibold">desarrollo backend</span>? 
                            Me encantaría conocer tu proyecto y ver cómo puedo ayudarte
                        </motion.p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Contact Methods Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    onClick={method.action}
                                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 border ${method.bgColor} hover:border-primary-500/50 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:scale-105`}
                                >
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                                    
                                    <div className="relative z-10">
                                        <div className={`p-3 rounded-xl ${method.bgColor} ${method.color} mb-4 w-fit`}>
                                            {method.icon}
                                        </div>
                                        
                                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300">
                                            {method.title}
                                        </h3>
                                        
                                        <p className="text-slate-300 text-sm mb-2 font-medium break-all">
                                            {method.value}
                                        </p>
                                        
                                        <p className="text-slate-400 text-xs">
                                            {method.description}
                                        </p>
                                        
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ExternalLink className="w-4 h-4 text-primary-400" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-3 gap-8 mb-16">
                            {/* Contact Form / Info */}
                            <div className="lg:col-span-2">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-3 bg-primary-500/20 rounded-xl">
                                            <Send className="w-6 h-6 text-primary-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">¿Listo para empezar?</h2>
                                            <p className="text-slate-400">Cuéntame sobre tu proyecto</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600">
                                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                                Áreas de especialización
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {[
                                                    "APIs REST robustas",
                                                    "Automatización con Python",
                                                    "Bases de datos SQL",
                                                    "Integración de sistemas",
                                                    "Scripts y herramientas",
                                                    "Arquitectura backend"
                                                ].map((service, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                                                        <span className="text-slate-300 text-sm">{service}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600">
                                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                Mi proceso de trabajo
                                            </h3>
                                            <div className="space-y-3">
                                                {[
                                                    { step: "1", text: "Análisis de requerimientos y definición de alcance" },
                                                    { step: "2", text: "Diseño de arquitectura y documentación técnica" },
                                                    { step: "3", text: "Desarrollo iterativo con feedback constante" },
                                                    { step: "4", text: "Testing, deployment y documentación final" }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 text-xs font-bold mt-0.5">
                                                            {item.step}
                                                        </div>
                                                        <span className="text-slate-300 text-sm leading-relaxed">{item.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={copiarEmail}
                                                className="btn-primary inline-flex items-center gap-2"
                                            >
                                                <Mail className="w-4 h-4" />
                                                Copiar Email
                                            </button>
                                            <a
                                                href="https://wa.me/5491136093041"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-secondary inline-flex items-center gap-2 no-underline"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Availability Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-green-500/20 rounded-lg">
                                            <Clock className="w-5 h-5 text-green-400" />
                                        </div>
                                        <h3 className="text-white font-bold">Disponibilidad</h3>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {availability.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="text-slate-400">
                                                    {item.icon}
                                                </div>
                                                <span className="text-slate-300 text-sm">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* CV Download Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 p-6 rounded-2xl border border-primary-500/20"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-primary-500/20 rounded-lg">
                                            <Download className="w-5 h-5 text-primary-400" />
                                        </div>
                                        <h3 className="text-white font-bold">Mi CV</h3>
                                    </div>
                                    
                                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                        Descarga mi currículum completo con experiencia detallada, proyectos y competencias técnicas.
                                    </p>
                                    
                                    <button
                                        onClick={verCV}
                                        className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        Descargar CV
                                    </button>
                                </motion.div>

                                {/* Quick Stats */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1 }}
                                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700"
                                >
                                    <h3 className="text-white font-bold mb-6">En números</h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Tiempo de respuesta</span>
                                            <span className="text-green-400 font-bold">&lt; 24h</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Proyectos completados</span>
                                            <span className="text-blue-400 font-bold">15+</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Años de experiencia</span>
                                            <span className="text-purple-400 font-bold">2+</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* CTA Final */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Información adicional
                                </h2>
                                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                                    Si necesitas más detalles sobre mi experiencia, puedes revisar mi currículum completo 
                                    o explorar mis proyectos en GitHub.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <button
                                        onClick={verCV}
                                        className="btn-primary inline-flex items-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        Descargar CV
                                    </button>
                                    <a 
                                        href="https://github.com/VasquezCodes?tab=repositories"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2 no-underline"
                                    >
                                        Ver GitHub
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Toast Notifications */}
                    <AnimatePresence>
                        {copiado && (
                            <motion.div
                                className="fixed bottom-6 right-6 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2"
                                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 40, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Mail className="w-4 h-4" />
                                Email copiado al portapapeles
                            </motion.div>
                        )}

                        {abriendoCV && (
                            <motion.div
                                className="fixed bottom-20 right-6 bg-slate-700 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2"
                                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 40, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Download className="w-4 h-4 animate-bounce" />
                                Preparando CV...
                            </motion.div>
                        )}
                    </AnimatePresence>
                </SectionWrapper>
            </div>
        </PageTransition>
    );
}