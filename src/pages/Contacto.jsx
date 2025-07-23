import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Terminal } from "lucide-react";
import TerminalBackground from "../components/TerminalBackground";
import SectionWrapper from "../components/SectionWrapper";

export default function Contacto() {
    const [copiado, setCopiado] = useState(false);

    const copiarEmail = () => {
        navigator.clipboard.writeText("robertovasquez.dev@gmail.com");
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    return (
        <SectionWrapper className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen pt-32 px-4 sm:px-10 font-mono">
            <TerminalBackground />

            {/* Título */}
            <motion.h2
                className="text-green-400 text-xl mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                > contacto
            </motion.h2>

            {/* Contenido principal */}
            <motion.div
                className="max-w-4xl bg-neutral-950 border border-neutral-800 rounded-xl p-6 shadow-md mx-auto space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-gray-300 text-sm sm:text-base">
                    Si querés contactarme por oportunidades laborales, colaboraciones o consultas, podés hacerlo por cualquiera de estos medios:
                </p>

                <ul className="space-y-4 text-sm sm:text-base">
                    <li className="flex items-center gap-3">
                        <Mail className="text-green-400 w-5 h-5" />
                        <button
                            onClick={copiarEmail}
                            className="hover:underline text-white"
                        >
                            robertovasquez.dev@gmail.com
                        </button>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="text-green-400 w-5 h-5" />
                        <span className="text-white">+54 9 11 1234 5678</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Github className="text-green-400 w-5 h-5" />
                        <a
                            href="https://github.com/robertovasquez-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                        >
                            github.com/robertovasquez-dev
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Linkedin className="text-green-400 w-5 h-5" />
                        <a
                            href="https://www.linkedin.com/in/robertovasquez-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                        >
                            linkedin.com/in/robertovasquez-dev
                        </a>
                    </li>
                </ul>
            </motion.div>

            {/* Toast flotante */}
            <AnimatePresence>
                {copiado && (
                    <motion.div
                        className="fixed bottom-6 right-6 bg-green-600 text-black px-4 py-2 rounded shadow-lg text-sm"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.3 }}
                    >
                        📋 Email copiado al portapapeles
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sección Descargar CV */}
            <motion.div
                className="mt-16 max-w-4xl mx-auto bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                    También podés descargar mi CV actualizado en PDF:
                </p>
                <a
                    href="/cv/RobertoVasquez-CV.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 border border-green-500 text-green-400 rounded hover:bg-green-500 hover:text-black transition font-mono text-sm"
                >
                    📄 Descargar CV
                </a>
            </motion.div>


            {/* Firma tipo shutdown */}
            <motion.div
                className="mt-20 text-green-500 text-sm sm:text-base flex items-center justify-center opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <Terminal className="w-4 h-4 mr-2" />
                <span className="tracking-tight">sudo shutdown -h now</span>
            </motion.div>
        </SectionWrapper>
    );
}
