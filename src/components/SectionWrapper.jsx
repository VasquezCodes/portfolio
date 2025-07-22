import { motion } from "framer-motion";

export default function SectionWrapper({ children, delay = 0.1, className = "" }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
