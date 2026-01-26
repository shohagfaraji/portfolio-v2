import { motion } from "framer-motion";
import "./LoadingScreen.css";

const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <motion.div
                className="orbit"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    ease: "linear",
                }}
            >
                <span className="dot dot-1" />
                <span className="dot dot-2" />
                <span className="dot dot-3" />
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
