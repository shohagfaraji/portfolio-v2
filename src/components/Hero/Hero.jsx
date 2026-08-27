import React, { useState, useEffect } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import TechGlobe from "../TechGlobe/TechGlobe.jsx";
import { RESUME_URL } from "../../config/links";

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typeText = () => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prevIndex) => prevIndex + 1);
            }
        };

        const interval = setInterval(typeText, speed);

        return () => clearInterval(interval);
    }, [index, text, speed]);

    return <motion.span>{displayedText}</motion.span>;
};

const HeroSection = () => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                });
            },
            { threshold: 0.3 },
        );

        const heroSection = document.querySelector(".hero-section");
        observer.observe(heroSection);

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div className="hero-section">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y: isInView ? 0 : 50,
                        }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                        }}
                    >
                        <TypingEffect
                            text="Hi, I am Shohag Faraji"
                            speed={200}
                        />
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y: isInView ? 0 : 50,
                        }}
                        transition={{
                            duration: 1.2,
                            type: "spring",
                            stiffness: 100,
                        }}
                    >
                        Aspiring Software Engineer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        Solved over 2200 problems on Codeforces (Pupil).
                        Interested in Building and Exploring Technology
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 1.7 }}
                    >
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="join-button"
                        >
                            Resume
                        </a>
                        <a
                            href="mailto:shohagfaraji2@gmail.com"
                            className="contact-link"
                        >
                            Mail Me
                        </a>
                    </motion.div>
                </div>
                <TechGlobe />
            </div>
        </div>
    );
};

export default HeroSection;
