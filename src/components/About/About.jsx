import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import shohagWebp from "../../assets/shohag.webp";

const AboutMe = () => {
    return (
        <section id="AboutMe" className="about-section">
            <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <h1>
                    <i className="fa-regular fa-user"></i> About Me
                </h1>

                <p>
                    Hi, I'm <b className="about-name">Shohag Faraji</b>, a
                    Computer Science graduate with a strong foundation in
                    competitive programming and full-stack development. I am a
                    Codeforces Pupil, have solved 2200+ programming problems,
                    and have represented my university in ICPC and multiple
                    Inter-University Programming Contests.
                </p>

                <p>
                    I also mentor junior students through competitive
                    programming classes, helping them build confidence in
                    algorithms, data structures, and problem-solving. I enjoy
                    turning analytical thinking into practical, reliable
                    software solutions.
                </p>

                <div className="about-highlights">
                    <span>Full-Stack Development</span>
                    <span>2200+ Problems</span>
                    <span>Codeforces Pupil</span>
                    <span>ICPC Participant</span>
                </div>
            </motion.div>

            <motion.div
                className="about-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 80,
                    damping: 11,
                }}
            >
                <motion.img
                    src={shohagWebp}
                    alt="Shohag Faraji"
                    draggable="false"
                    whileHover={{ scale: 1.025 }}
                    transition={{ type: "spring", stiffness: 150 }}
                />
            </motion.div>
        </section>
    );
};

export default AboutMe;
