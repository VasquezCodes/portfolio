import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const enlaces = [
    { nombre: "home", ruta: "/" },
    { nombre: "sobre-mi", ruta: "/sobre-mi" },
    { nombre: "experiencia", ruta: "/experiencia" },
    { nombre: "proyectos", ruta: "/proyectos" },
    { nombre: "contacto", ruta: "/contacto" },
];

export default function Navbar() {
    const { pathname } = useLocation();
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolling(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMenuAbierto(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolling ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm">
                <Link
                    to="/"
                    className="flex items-center text-xl font-bold text-purple-300 hover:text-purple-200 transition"
                >
                    <Code2 className="w-5 h-5" />
                    <span className="ml-2">rv.dev</span>
                </Link>

                {/* Menú desktop */}
                <ul className="hidden md:flex gap-6 font-medium">
                    {enlaces.map((enlace) => (
                        <li key={enlace.ruta} className="relative pl-4">
                            {/* Línea animada izquierda si está activo */}
                            {pathname === enlace.ruta && (
                                <motion.span
                                    layoutId="link-active"
                                    className="absolute left-0 top-[calc(50%-0.625rem)] h-[1.25rem] w-[2px] bg-purple-400 rounded"
                                    initial={{ opacity: 0, scaleY: 0.5 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            )}
                            <Link
                                to={enlace.ruta}
                                className={`transition-colors ${
                                    pathname === enlace.ruta
                                        ? "text-purple-300"
                                        : "text-blue-200 hover:text-purple-200"
                                }`}
                            >
                                ./{enlace.nombre}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Botón móvil */}
                <button
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className="md:hidden text-white"
                >
                    {menuAbierto ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Menú móvil */}
            <AnimatePresence>
                {menuAbierto && (
                    <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="md:hidden px-6 overflow-hidden bg-white/10 backdrop-blur-md text-sm text-white"
                    >
                        {enlaces.map((enlace) => (
                            <li key={enlace.ruta} className="py-3 border-b border-zinc-700">
                                <Link
                                    to={enlace.ruta}
                                    className={`block transition-colors ${
                                        pathname === enlace.ruta
                                            ? "text-purple-300"
                                            : "text-blue-200 hover:text-purple-200"
                                    }`}
                                >
                                    ./{enlace.nombre}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}
