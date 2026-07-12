import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Achievement.css";
import icpc from "../../assets/contests/icpc-1.webp";
import buet from "../../assets/contests/buet-1.webp";
import kuet from "../../assets/contests/kuet-2.webp";
import cuet from "../../assets/contests/cuet-1.webp";
import duet from "../../assets/contests/duet-1.webp";
import uiu from "../../assets/contests/uiu-2.webp";
import aust from "../../assets/contests/aust-1.webp";
import uu from "../../assets/contests/uu-1.webp";
import mu from "../../assets/contests/mu-1.webp";
import nwu from "../../assets/contests/nwu-1.webp";

const achievementsData = [
    {
        date: "Jun 2026",
        title: "ICPC JRC Scholarship",
        category: "Scholarship",
        details:
            "Received the ICPC JRC Scholarship across consecutive award cycles. The program awards two students each semester and is arranged annually.",
        meta: "Also awarded in May 2025 and Sep 2024",
    },
    {
        date: "Oct 2025",
        title: "Vice Chancellor's Honour Award",
        category: "Academic Honour",
        details:
            "Recognized for strong academic performance in the Fall 2024 semester.",
    },
    {
        date: "Aug 2025",
        title: "Math Olympiad Participation",
        category: "Competition",
        details:
            "Participated in university-level math olympiad events to strengthen analytical and problem-solving skills.",
        meta: "Also participated in Jan 2025",
    },
    {
        date: "29 Mar 2025",
        title: "Codeforces Pupil Rank Achieved",
        category: "Competitive Programming",
        details:
            "Reached Pupil rank on Codeforces while maintaining regular practice and contest participation.",
        link: "https://codeforces.com/profile/cse",
    },
    {
        date: "Oct 2024",
        title: "Dean's Honour Award",
        category: "Academic Honour",
        details:
            "Received Dean's Honour Award for academic excellence across multiple semesters.",
        meta: "Also awarded in Apr 2023 and Mar 2024",
    },
    {
        date: "Jan 2024",
        title: "Best UAP Team",
        category: "Programming Contest",
        details:
            "Recognized as the Best UAP Team in the Inter-University Collaborative Programming Contest 2024.",
    },
    {
        date: "Dec 2023",
        title: "Winner - Digital Logic & System Design Lab Project",
        category: "Project Award",
        details:
            "Won for the final lab project in Digital Logic & System Design.",
    },
    {
        date: "21 Feb 2023",
        title: "Champion - অমর একুশে Programming Contest",
        category: "Programming Contest",
        details: "Champion at the UAP অমর একুশে Programming Contest 2023.",
    },
    {
        date: "2022 - 2025",
        title: "Solved 2200+ Programming Problems",
        category: "Problem Solving",
        details:
            "Solved 2200+ problems across online judges during the full university period, with 200+ virtual contest participations.",
    },
];

const contestData = [
    {
        title: "ICPC | ASIA DHAKA REGIONAL CONTEST 2025",
        image: icpc,
    },
    {
        title: "United Group Presents BUET CSE Fest 2024",
        image: buet,
    },
    {
        title: "MIAKI PRESENTS KUET IUPC 2025",
        image: kuet,
    },
    {
        title: "CUET CSE Fest 2025",
        image: cuet,
    },
    {
        title: "Betopia Group Presents DUET IUPC 2025",
        image: duet,
    },
    {
        title: "UIU Inter-University Programming Contest 2025",
        image: uiu,
    },
    {
        title: "MTB Presents AUST Inter University Programming Contest 2025",
        image: aust,
    },
    {
        title: "Hi-Fi Computer Presents MU CSE Fest 2025",
        image: mu,
    },
    {
        title: "Uttara University Inter-University Programming Contest 2025",
        image: uu,
    },
    {
        title: "NWU CSE Fest 2025",
        image: nwu,
    },
];

const itemVariants = {
    hidden: { y: 22, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
};

const Achievements = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div id="Achievement" className="achievements-section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <i className="fa-solid fa-medal section-icon"></i> Achievements
            </motion.h2>

            <div className="achievement-timeline">
                {achievementsData.map((achievement, index) => (
                    <motion.article
                        key={`${achievement.date}-${achievement.title}`}
                        className="achievement-timeline-item"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                    >
                        <div className="achievement-marker">
                            <span>{index + 1}</span>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-card-header">
                                <span className="achievement-date">
                                    {achievement.date}
                                </span>
                                <span className="achievement-category">
                                    {achievement.category}
                                </span>
                            </div>
                            <h3>{achievement.title}</h3>
                            <p>{achievement.details}</p>
                            {achievement.meta && (
                                <p className="achievement-meta">
                                    {achievement.meta}
                                </p>
                            )}
                            {achievement.link && (
                                <a
                                    href={achievement.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="achievement-link"
                                >
                                    View profile
                                </a>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>

            <h2 className="contest-title">
                <i className="fa-solid fa-trophy section-icon"></i> Contest
                Participation
            </h2>

            <div className="contest-grid">
                {contestData.map((contest, index) => (
                    <div
                        key={index}
                        className="contest-card"
                        onClick={() => setSelectedImage(contest)}
                    >
                        <img src={contest.image} alt={contest.title} />
                        <p>{contest.title}</p>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="image-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                        />
                        <p>{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievements;
