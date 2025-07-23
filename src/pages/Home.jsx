import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SectionWrapper from "../components/SectionWrapper";
import TerminalBackground from "../components/TerminalBackground";
import { Link } from "react-router-dom";
import heroImg from "../assets/undraw_dev-environment_n5by.svg";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import PageTransition from "../components/PagesTransition.jsx";

export default function Home() {
    return (
        <PageTransition>
        <SectionWrapper className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-black text-white min-h-screen flex items-center justify-center px-4 sm:px-10 pt-32">
            <TerminalBackground />

            <section className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                <div className="flex flex-col-reverse md:flex-row items-center gap-16 bg-white/5 backdrop-blur-sm border border-white/10 transition-shadow shadow-lg rounded-2xl p-6 md:p-10 md:px-12 w-full duration-300 ease-in-out">

                    {/* Texto principal */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.h1
                            className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Hola, soy Roberto 👋
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-gray-300 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Desarrollador Backend con experiencia en{" "}
                            <span className="text-blue-400">Java</span>,{" "}
                            <span className="text-yellow-400">Node.js</span> y{" "}
                            <span className="text-green-400">automatización con Python</span>.
                        </motion.p>

                        <motion.p
                            className="font-mono text-[#00c853] drop-shadow-md text-lg sm:text-xl h-[30px] sm:h-[36px] mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <Typewriter
                                words={[
                                    "curl http://localhost:8080/api/status █",
                                    "ssh roberto@192.168.0.1 █",
                                    "journalctl -xe --no-pager █",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="█"
                                typeSpeed={70}
                                deleteSpeed={25}
                                delaySpeed={2000}
                            />
                        </motion.p>

                        {/* Botones */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap justify-center md:justify-start gap-4"
                        >
                            <a
                                href="https://github.com/VasquezCodes?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition inline-flex items-center gap-2"
                            >
                                <Github size={18} /> GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/roberto-vasquez-404729241/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition inline-flex items-center gap-2"
                            >
                                <Linkedin size={18} /> LinkedIn
                            </a>

                            <Link
                                to="/sobre-mi"
                                className="px-5 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition inline-flex items-center gap-2"
                            >
                                Conocer más <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        <div className="mt-12 text-green-500 font-mono text-sm opacity-30">
                            ↓ scroll
                        </div>
                    </div>

                    {/* Imagen técnica */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    >
                        <img
                            src={heroImg}
                            alt="Desarrollador Backend"
                            className="w-full h-auto max-w-md mx-auto"
                        />
                    </motion.div>
                </div>
            </section>
        </SectionWrapper>
        </PageTransition>
    );
}
