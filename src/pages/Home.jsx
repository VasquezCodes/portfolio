import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Link } from "react-router-dom";
import heroImg from "../assets/undraw_dev-environment_n5by.svg";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import PageTransition from "../components/PagesTransition.jsx";

export default function Home() {
    const [apiMessage, setApiMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/api/hello")
            .then((res) => res.json())
            .then((data) => setApiMessage(data.message))
            .catch(() => {});
    }, []);

    return (
        <PageTransition>
        <SectionWrapper className="relative text-white min-h-screen flex items-center justify-center px-4 sm:px-10 pt-32">

            <section className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                <div className="flex flex-col-reverse md:flex-row items-center gap-16 glass rounded-2xl p-6 md:p-10 md:px-12 w-full duration-300 ease-in-out">

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
                            className="text-lg sm:text-xl text-indigo-200 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Desarrollador Fullstack con experiencia en{" "}
                            <span className="text-purple-300">React</span>,{" "}
                            <span className="text-blue-300">Node.js</span> y{" "}
                            <span className="text-indigo-300">automatización con Python</span>.
                        </motion.p>

                        <motion.p
                            className="font-mono text-indigo-300 drop-shadow-md text-lg sm:text-xl h-[30px] sm:h-[36px] mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <Typewriter
                                words={[
                                    "buildFrontend('React');",
                                    "createAPI('Node.js');",
                                    "deploy('cloud');",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={25}
                                delaySpeed={2000}
                            />
                        </motion.p>

                        {apiMessage && (
                            <motion.p
                                className="text-sm text-indigo-200 mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            >
                                Backend: {apiMessage}
                            </motion.p>
                        )}

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

                        <div className="mt-12 text-purple-300 font-mono text-sm opacity-30">
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
                            alt="Desarrollador Fullstack"
                            className="w-full h-auto max-w-md mx-auto"
                        />
                    </motion.div>
                </div>
            </section>
        </SectionWrapper>
        </PageTransition>
    );
}
