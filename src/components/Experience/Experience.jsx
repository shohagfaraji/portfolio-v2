import React, { useState } from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            role: "🧑‍💻 Competitive Programming Trainer at UAP",
            organization: "University of Asia Pacific",
            duration: "2023 - Present",
            details:
                "I conduct competitive programming classes for junior students at our university, focusing on key areas such as number theory, time and memory optimization, graph and tree algorithms, data structures, and problem-solving techniques. I aim to make complex topics engaging and accessible, while helping students develop strong algorithmic thinking and coding skills.",
        },
    ];

    const [expanded, setExpanded] = useState({});

    const toggleExpanded = (index) => {
        setExpanded((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <section id="Experience" className="experience-section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <i className="fa-solid fa-business-time"></i> Experience
            </motion.h2>
            <motion.div
                className="experience-timeline"
                initial="hidden"
                whileInView="show"
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                            delay: 0.15 * index,
                        }}
                    >
                        <div className="timeline-content">
                            <h3>{experience.role}</h3>
                            <p className="organization">
                                {experience.organization}
                            </p>
                            <span className="duration">
                                {experience.duration}
                            </span>
                            <p className="details">
                                {expanded[index]
                                    ? experience.details
                                    : `${experience.details.substring(
                                          0,
                                          250
                                      )}...`}{" "}
                                <span
                                    className="toggle-button"
                                    onClick={() => toggleExpanded(index)}
                                    style={{
                                        color: "#0078d4",
                                        cursor: "pointer",
                                    }}
                                >
                                    {expanded[index] ? "See Less" : "See More"}
                                </span>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
