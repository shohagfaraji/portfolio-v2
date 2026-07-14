import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import shohagWebp from "../../assets/shohag.webp";

const AboutMe = () => {
    return (
        <>
            <div id="AboutMe" className="about-section">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <h1>
                        <i className="fa-regular fa-user"></i> About Me
                    </h1>
                    <p>
                        Hi, I'm <b className="about-name">Shohag Faraji</b>, a
                        Computer Science graduate, competitive programmer, and
                        aspiring software engineer with a strong foundation in
                        algorithms, data structures, and full-stack development.
                        I am a Codeforces Pupil, have solved 2200+ programming
                        problems, and have represented my university in ICPC and
                        multiple Inter-University Programming Contests.
                    </p>
                    <p>
                        Alongside competitive programming, I build web
                        applications with technologies such as Django REST
                        Framework and the MERN stack. I also mentor junior
                        students through programming classes, helping them
                        strengthen their problem-solving skills. My goal is to
                        build reliable, user-focused software by combining
                        analytical thinking with practical engineering.
                    </p>
                </motion.div>
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 80,
                        damping: 11,
                    }}
                >
                    <motion.img
                        src={shohagWebp}
                        alt="Profile"
                        draggable="false"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 150 }}
                    />
                </motion.div>
            </div>
        </>
    );
};

export default AboutMe;
