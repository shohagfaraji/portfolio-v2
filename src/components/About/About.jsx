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
                        Hi, I'm{" "}
                        <b style={{ color: "#4a90e2", fontSize: "1.2em" }}>
                            Shohag
                        </b>
                        . I am a competitive programmer and a computer science
                        graduate. I am a Pupil on Codeforces and have
                        participated in over 8 Inter-University Programming
                        Contests (IUPCs) as well as ICPC. I also conduct
                        competitive programming classes for juniors at my
                        university. I am passionate about solving problems
                        through code and building impactful software solutions.
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
