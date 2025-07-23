import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, TerminalSquare } from "lucide-react";
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
                scrolling ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo con ícono */}
                <Link
                    to="/"
                    className="flex items-center text-lg font-mono font-bold text-green-400 hover:text-green-300 transition"
                >
                    <TerminalSquare className="w-5 h-5" />
                    <span className="ml-2">dev@roberto</span>
                </Link>

                {/* Menú desktop */}
                <ul className="hidden md:flex gap-6 text-sm font-mono font-medium text-gray-300">
                    {enlaces.map((enlace) => (
                        <li key={enlace.ruta} className="relative pl-4">
                            {/* Línea verde animada al costado izquierdo del texto */}
                            {pathname === enlace.ruta && (
                                <motion.span
                                    layoutId="link-active"
                                    className="absolute left-0 top-[calc(50%-0.625rem)] h-[1.25rem] w-[2px] bg-green-400 rounded"
                                    initial={{ opacity: 0, scaleY: 0.5 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            )}
                            <Link
                                to={enlace.ruta}
                                className={`hover:text-green-400 transition-colors ${
                                    pathname === enlace.ruta ? "text-green-400" : ""
                                }`}
                            >
                                ./{
                                enlace.nombre
                            }
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Botón móvil */}
                <button
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className="md:hidden text-gray-200"
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
                        className="md:hidden px-6 overflow-hidden bg-black/90 text-sm text-gray-200 font-mono"
                    >
                        {enlaces.map((enlace) => (
                            <li key={enlace.ruta} className="py-3 border-b border-zinc-700">
                                <Link
                                    to={enlace.ruta}
                                    className={`block hover:text-green-400 transition-colors ${
                                        pathname === enlace.ruta ? "text-green-400" : ""
                                    }`}
                                >
                                    ./{
                                    enlace.nombre
                                }
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}
