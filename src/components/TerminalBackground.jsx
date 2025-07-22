import { useEffect, useState } from "react";

const comandos = [
    "> Connecting to Mikrotik router...",
    "> Route established ✅",
    "> Tunnel EoIP link up",
    "> Starting Syncthing...",
    "> Initializing distributed index",
    "> ssh admin@192.168.1.1",
    "> Welcome to backend console 🖥️",
    "> curl http://localhost"
];

export default function TerminalBackground() {
    const [lineaActual, setLineaActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setLineaActual((prev) => (prev < comandos.length - 1 ? prev + 1 : 0));
        }, 2000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-start">
            <div
                className="text-green-500 font-mono text-sm opacity-10 leading-6 whitespace-pre-wrap"
                style={{
                    transform: "translateX(5%)", // empuja un poco a la derecha
                    maxWidth: "30%",             // para que no ocupe mucho
                }}
            >
                {comandos.slice(0, lineaActual + 1).map((cmd, idx) => (
                    <div key={idx}>{cmd}</div>
                ))}
            </div>
        </div>
    );
}
