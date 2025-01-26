import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <motion.section
            className="p-8 bg-gradient-to-r from-blue-500 to-green-500 text-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-lg">
                I build responsive, modern web applications using React.js.
            </p>
        </motion.section>
    );
};
