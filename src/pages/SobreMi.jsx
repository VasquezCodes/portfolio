import SectionWrapper from "../components/SectionWrapper";


export default function SobreMi() {
    return (
        <SectionWrapper>
        <section className="px-6 py-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-10">Sobre mí</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Imagen */}
                <img
                    src="/assets/roberto-profile.jpg"
                    alt="Foto de Roberto Vasquez"
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-md"
                />

                {/* Texto */}
                <div className="flex-1 text-gray-800 dark:text-gray-300 space-y-5">
                    <p>
                        Soy desarrollador backend con experiencia en el diseño e implementación de <strong>APIs REST</strong>, automatización de procesos y administración de infraestructura de red. Trabajo actualmente con <strong>Node.js + Express</strong> desarrollando soluciones de control de flotas y campañas.
                    </p>

                    <p>
                        Tengo experiencia práctica con <strong>Java (Spring Boot)</strong>, <strong>C# (.NET)</strong> y <strong>Python</strong> para scripting embebido, especialmente sobre dispositivos <strong>Rockchip</strong>. Me interesan los entornos que combinan software, hardware y redes.
                    </p>

                    <p>
                        En el plano de redes, gestiono infraestructura basada en <strong>MikroTik</strong> con túneles EoIP/WDS, bridges segmentados, y sincronización distribuida con <strong>Syncthing</strong>.
                    </p>

                    <p>
                        Busco seguir creciendo como backend engineer, optimizando soluciones del lado del servidor, y participando en proyectos con fuerte lógica de negocio, automatización e integración técnica.
                    </p>

                    {/* Grilla de tecnologías */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-blue-500 mb-3">Stack principal:</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Node.js", "Spring Boot", "C# / .NET", "Python",
                                "MySQL", "SQL Server", "MikroTik", "Syncthing",
                                "APIs REST", "Automatización", "Dispositivos embebidos"
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full font-medium text-gray-800 dark:text-gray-100"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </SectionWrapper>
    );
}
