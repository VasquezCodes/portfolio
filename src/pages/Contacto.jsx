import SectionWrapper from "../components/SectionWrapper";


export default function Contacto() {
    return (
        <SectionWrapper>
            <section className="bg-slate-50 dark:bg-[#0a0a0a] px-6 py-12 max-w-xl mx-auto text-center text-gray-800 dark:text-white">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Contacto</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
                ¿Querés hablar sobre proyectos backend, automatización o redes?
                Estoy disponible para nuevas oportunidades y colaboraciones técnicas.
            </p>

            <div className="flex flex-col items-center gap-4">
                <a
                    href="mailto:robertovasquez.dev@gmail.com"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Enviame un correo
                </a>

                <div className="flex gap-6 mt-4 text-blue-600 dark:text-blue-400">
                    <a
                        href="https://www.linkedin.com/in/robertovasquez" // Reemplazá por tu link real
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-sm"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/robertovasquez" // Reemplazá por tu GitHub real
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-sm"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
     </SectionWrapper>
    );
}
