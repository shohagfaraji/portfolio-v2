import { motion } from "framer-motion";
import "./LoadingScreen.css";
const load = "https://i.postimg.cc/MZ3r7YsM/loading.gif";

const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <motion.img
                src={load}
                alt="Logo"
                className="loading-logo"
                initial={{ scale: 1.5 }}
                animate={{ scale: [1.5, 1.5, 1.5] }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </div>
    );
};

export default LoadingScreen;
