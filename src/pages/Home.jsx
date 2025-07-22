import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SectionWrapper from "../components/SectionWrapper";
import heroImg from "../assets/undraw_dev-environment_n5by.svg";

export default function Home() {
    return (
        <SectionWrapper className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center px-4 sm:px-10 pt-32">
            <section className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-16">
                {/* Texto principal */}
                <div className="flex-1 text-center md:text-left">
                    <motion.h1
                        className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6"
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
                        Desarrollador Backend con experiencia en Java, .NET, Node.js, Python y redes con MikroTik.
                    </motion.p>

                    {/* Comando animado */}
                    <motion.p
                        className="font-mono text-green-400 drop-shadow-md text-lg sm:text-xl h-[30px] sm:h-[36px] mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <Typewriter
                            words={[
                                "curl http://localhost:8080/api/data_",
                                "ping microtv.router.lan_",
                                "ssh admin@192.168.1.1_",
                                "system reboot force_",
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
                        className="flex justify-center md:justify-start"
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

                {/* Imagen técnica derecha */}
                <motion.div
                    className="flex-1"
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
