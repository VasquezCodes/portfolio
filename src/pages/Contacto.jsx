import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
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

    return (
        <PageTransition>
            <SectionWrapper className="relative text-white min-h-screen pt-32 px-4 sm:px-10">

                {/* Título */}
                <motion.h2
                    className="text-purple-300 text-xl mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                     contacto
                </motion.h2>

                {/* Contenido principal */}
                <motion.div
                    className="max-w-4xl glass rounded-xl p-6 mx-auto space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-indigo-200 text-sm sm:text-base">
                        Si querés contactarme por oportunidades laborales, colaboraciones o consultas, podés hacerlo por cualquiera de estos medios:
                    </p>

                    <ul className="space-y-4 text-sm sm:text-base">
                        <li className="flex items-center gap-3">
                            <Mail className="text-purple-400 w-5 h-5" />
                            <button
                                onClick={copiarEmail}
                                className="hover:underline text-white"
                            >
                                robertojesusvasquez@gmail.com
                            </button>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-purple-400 w-5 h-5" />
                            <span className="text-white">+54 9 11 3609 3041</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Github className="text-purple-400 w-5 h-5" />
                            <a
                                href="https://github.com/VasquezCodes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-white"
                            >
                                github.com/VasquezCodes
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Linkedin className="text-purple-400 w-5 h-5" />
                            <a
                                href="https://www.linkedin.com/in/roberto-vasquez-404729241/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-white"
                            >
                                linkedin.com/in/robertovasquez
                            </a>
                        </li>
                    </ul>
                </motion.div>

                {/* Toasts flotantes */}
                <AnimatePresence>
                    {copiado && (
                        <motion.div
                            className="fixed bottom-6 right-6 bg-purple-600 text-white px-4 py-2 rounded shadow-lg text-sm"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.3 }}
                        >
                            📋 Email copiado al portapapeles
                        </motion.div>
                    )}

                    {abriendoCV && (
                        <motion.div
                            className="fixed bottom-20 right-6 bg-purple-600 text-white px-4 py-2 rounded shadow-lg text-sm"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.3 }}
                        >
                            Abriendo CV...
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CV */}
                <motion.div
                    className="mt-16 max-w-4xl mx-auto glass rounded-xl p-6 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm sm:text-base text-indigo-200 mb-4">
                        ¿Querés ver mi CV?
                    </p>
                    <button
                        onClick={verCV}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-400 transition text-sm"
                    >
                        Ver CV
                    </button>
                </motion.div>
            </SectionWrapper>
        </PageTransition>
    );
}
