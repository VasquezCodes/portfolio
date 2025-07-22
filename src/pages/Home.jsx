import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SectionWrapper from "../components/SectionWrapper";
import heroImg from "../assets/undraw_dev-environment_n5by.svg";
import TerminalBackground from "../components/TerminalBackground";

export default function Home() {
    return (
        <SectionWrapper>
            <section className="relative px-6 sm:px-10 py-16 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Consola de fondo */}
                <TerminalBackground/>
                {/* Texto principal */}
                <div className="flex-1 text-center md:text-left relative z-10">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hola, soy Roberto 👋
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Desarrollador Backend con experiencia en Java, .NET, Node.js, Python y redes con MikroTik.
                    </motion.p>

                    {/* Consola animada */}
                    <motion.p
                        className="text-md sm:text-lg text-gray-500 dark:text-gray-400 font-mono h-[30px] sm:h-[36px] mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <Typewriter
                            words={[
                                "npm run backend",
                                "curl http://localhost:8080/api/data",
                                "ping microtv.router.lan",
                                "ssh admin@192.168.1.1",
                                "system reboot force"
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={2000}
                        />
                    </motion.p>

                    {/* Botón CV */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 justify-center"
                    >
                        <a
                            href="/RobertoVasquez-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Ver CV
                        </a>
                    </motion.div>
                </div>

                {/* Imagen / Ilustración */}
                <motion.div
                    className="flex-1 relative z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <img
                        src={heroImg}
                        alt="Desarrollador Backend"
                        className="w-full h-auto max-w-md mx-auto"
                    />
                </motion.div>
            </section>
        </SectionWrapper>
    );
}
