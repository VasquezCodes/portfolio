export default function Footer() {
    return (
        <footer className="bg-black text-green-400 font-mono text-sm px-4 py-6 mt-12 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="mb-3">
                    <span className="text-white">roberto@portfolio:</span>
                    <span className="text-green-400">~</span>
                    <span className="text-white">$</span> <span> cat contacto.txt</span>
                </div>

                <p>
                    <span className="text-white">Nombre:</span> Roberto Vasquez
                </p>
                <p>
                    <span className="text-white">Rol:</span> Backend Developer
                </p>
                <p>
                    <span className="text-white">Email:</span>{" "}
                    <a
                        href="mailto:robertovasquez.dev@gmail.com"
                        className="underline hover:text-green-300"
                    >
                        robertovasquez.dev@gmail.com
                    </a>
                </p>

                <div className="mt-4 text-gray-400 text-xs border-t border-gray-700 pt-2">
                    © {new Date().getFullYear()} Roberto Vasquez · Portfolio técnico backend
                </div>
            </div>
        </footer>
    );
}
