import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/sobre-mi" },
    { name: "Experiencia", path: "/experiencia" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? "bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 shadow-sm" 
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 text-xl font-bold text-white hover:text-primary-400 transition-all duration-300 no-underline group"
                >
                    <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg group-hover:shadow-primary-500/25 group-hover:scale-110 transition-all duration-300">
                        <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                            <span className="text-primary-600 font-black text-sm">RV</span>
                        </div>
                    </div>
                    <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                        Roberto Vásquez
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative py-2 text-sm font-medium transition-colors no-underline ${
                                    isActive
                                        ? "text-primary-400"
                                        : "text-slate-300 hover:text-white"
                                }`}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400 rounded-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:hidden bg-slate-800 border-t border-slate-700 shadow-lg"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.path;
                                
                                return (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <Link
                                            to={item.path}
                                            className={`block py-3 px-4 rounded-lg transition-colors no-underline ${
                                                isActive
                                                    ? "bg-primary-900/20 text-primary-400 font-medium"
                                                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}