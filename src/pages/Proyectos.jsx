import ProyectoCard from "../components/ProyectoCard";
import SectionWrapper from "../components/SectionWrapper";

export default function Proyectos() {
    const proyectos = [
        {
            titulo: "Tasklist API",
            descripcion:
                "Aplicación backend con Spring Boot que permite crear, editar y eliminar tareas, con endpoints protegidos, validaciones, estructura modular y persistencia con MySQL. Incluye buenas prácticas de desarrollo limpio.",
            repo: "https://github.com/robertovasquez/tasklist-api",
            tecnologias: ["Java", "Spring Boot", "MySQL"],
        },
        {
            titulo: "Ecosistema WDS Autónomo",
            descripcion:
                "Automatización de enlaces WDS entre dispositivos embebidos con MikroTik y Rockchip. Sincronización de archivos mediante Syncthing y control de procesos remotos, con criterios de RSSI y CCQ.",
            repo: "https://github.com/robertovasquez/ecosistema-wds",
            tecnologias: ["Python", "Bash", "MikroTik", "Rockchip", "Syncthing"],
        },
    ];

    return (
        <SectionWrapper>
            <section className="px-6 py-12 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-600 mb-10">Proyectos</h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {proyectos.map((p, i) => (
                        <ProyectoCard key={i} {...p} />
                    ))}
                </div>
            </section>
        </SectionWrapper>
    );
}
