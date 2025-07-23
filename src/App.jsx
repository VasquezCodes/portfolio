import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Experiencia from "./pages/Experiencia";
import Contacto from "./pages/Contacto";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre-mi" element={<SobreMi />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/experiencia" element={<Experiencia />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Route>
            </Routes>
        </Router>
    );
}
