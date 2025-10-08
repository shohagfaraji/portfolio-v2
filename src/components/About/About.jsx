import React from "react";
import "./About.css";
import { motion } from "framer-motion";
const shohag = "https://i.postimg.cc/tgtVb211/shohag.jpg";

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
                        . I am a Competitive Programmer and a Computer Science
                        student. Pupil at Codeforces . Participated in over 6
                        Inter-University Programming Contests (IUPCs). I also
                        conduct competitive programming classes for juniors at
                        my university. Passionate about solving problems through
                        code and building impactful software solutions.
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
                        src={shohag}
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
