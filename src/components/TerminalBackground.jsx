import { useEffect, useState } from "react";

const comandos = [
    "> sudo systemctl restart backend.service",
    "> tail -f /var/log/syslog",
    "> ssh roberto@api-server.local",
    "> node server.js --prod",
    "> top | head -n 5",
    "> ping -c 4 192.168.0.10",
    "> curl https://api.internal.local/status",
    "> journalctl -xe | grep error",
    "> docker ps -a",
    "> htop",
];

export default function TerminalBackground() {
    const [lineaActual, setLineaActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setLineaActual((prev) => (prev < comandos.length - 1 ? prev + 1 : 0));
        }, 2500); // más rápido
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="absolute inset-y-0 right-0 z-0 pointer-events-none flex items-start justify-end pr-4 sm:pr-10 pt-24">
            <div
                className="text-green-500 font-mono text-base sm:text-lg opacity-20 leading-6 whitespace-pre-wrap text-right"
                style={{
                    maxWidth: "50ch",
                }}
            >
                {comandos.slice(0, lineaActual + 1).map((cmd, idx) => (
                    <div key={idx}>{cmd}</div>
                ))}
            </div>
        </div>
    );
}
