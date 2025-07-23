export default function Footer() {
    return (
        <footer className="bg-black text-green-400 font-mono text-sm px-4 py-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto space-y-2">
                {/* Logout */}
                <div className="text-green-500">roberto@portfolio:~$ logout</div>
                <div className="text-gray-500">Connection to portfolio closed.</div>

                {/* Mensaje técnico */}
                <div className="text-gray-600 text-xs pt-1">
                    # Backend session terminated successfully ✔
                </div>

                {/* Cursor parpadeante personalizado */}
                <div className="text-green-500 text-base font-mono animate-blink leading-none">
                    _
                </div>

                {/* Legal */}
                <div className="mt-4 text-gray-600 text-xs border-t border-gray-800 pt-2">
                    © {new Date().getFullYear()} Roberto Vasquez · Portfolio técnico backend
                </div>
            </div>
        </footer>
    );
}
