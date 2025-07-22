import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const enlaces = [
    { nombre: "Inicio", ruta: "/" },
    { nombre: "Sobre mí", ruta: "/sobre-mi" },
    { nombre: "Experiencia", ruta: "/experiencia" },
    { nombre: "Proyectos", ruta: "/proyectos" },
    { nombre: "Contacto", ruta: "/contacto" },
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
                scrolling
                    ? "bg-white/90 dark:bg-gray-900/90 shadow"
                    : "bg-transparent"
            } backdrop-blur-md`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo o nombre */}
                <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    Roberto Vasquez
                </Link>

                {/* Menú desktop */}
                <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
                    {enlaces.map((enlace) => (
                        <li key={enlace.ruta}>
                            <Link
                                to={enlace.ruta}
                                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                                    pathname === enlace.ruta ? "text-blue-600 dark:text-blue-400" : ""
                                }`}
                            >
                                {enlace.nombre}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Botón móvil */}
                <button
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className="md:hidden text-gray-700 dark:text-gray-200"
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
                        className="md:hidden px-6 overflow-hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200"
                    >
                        {enlaces.map((enlace) => (
                            <li key={enlace.ruta} className="py-3 border-b dark:border-gray-700">
                                <Link
                                    to={enlace.ruta}
                                    className={`block hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                                        pathname === enlace.ruta ? "text-blue-600 dark:text-blue-400" : ""
                                    }`}
                                >
                                    {enlace.nombre}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}
