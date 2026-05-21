import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./BackgroundParticles.css";

const PARTICLE_COUNT = 100;

const BackgroundParticles = () => {
    const particles = useMemo(
        () =>
            Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
                id: index,
                top: Math.random() * 100,
                left: Math.random() * 100,
                size: Math.random() * 3 + 2,
                directionX: (Math.random() - 0.5) * 10,
                directionY: (Math.random() - 0.5) * 10,
                duration: Math.random() * 3 + 12,
                delay: Math.random() * 2,
            })),
        [],
    );

    return (
        <div className="particle-background">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="particle"
                    initial={{ opacity: 1 }}
                    animate={{
                        x: [`0vw`, `${p.directionX * 10}vw`],
                        y: [`0vh`, `${p.directionY * 10}vh`],
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: p.delay,
                    }}
                    style={{
                        top: `${p.top}vh`,
                        left: `${p.left}vw`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: "var(--particle-color)",
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundParticles;
