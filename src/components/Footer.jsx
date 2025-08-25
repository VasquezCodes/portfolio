export default function Footer() {
    return (
        <footer className="text-purple-200 text-sm px-4 py-6 border-t border-white/20">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p>© {new Date().getFullYear()} Roberto Vasquez · Portafolio Fullstack</p>
                <p className="text-xs text-blue-200">Construido con React, Node y amor.</p>
            </div>
        </footer>
    );
}
