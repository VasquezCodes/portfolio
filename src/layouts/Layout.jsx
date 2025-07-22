import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
