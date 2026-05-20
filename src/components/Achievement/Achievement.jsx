import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Achievement.css";
// import { PROJECTS_IMAGES } from "../../assets/projects";
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
        text: (
            <>
                <span className="highlight1">Pupil</span> on{" "}
                <span className="highlight2">Codeforces</span> with a maximum
                rating of <span className="highlight1">1205</span>.
            </>
        ),
        link: "https://codeforces.com/profile/cse",
    },
    {
        text: (
            <>
                <span className="highlight2">Champion</span> -{" "}
                <span className="highlight1">
                    অমর একুশে প্রোগ্রামিং কনটেস্ট ২০২৩, ইউএপি
                </span>
            </>
        ),
        link: "",
    },
    {
        text: (
            <>
                <span className="highlight2">Best UAP Team</span> Inter
                University Collaborative Programing Contest (IUCPC) 2024.
            </>
        ),
        link: "",
    },
    {
        text: (
            <>
                <span className="highlight2">Winner</span> - Digital Logic &
                System Design Lab Final Project.
            </>
        ),
        link: "",
    },
    {
        text: (
            <>
                Solved <span className="highlight2">2200+ Problems</span> on top
                platforms,{" "}
                <span className="highlight2">
                    Participated in 200+ Virtual Contests
                </span>
                .
            </>
        ),
        link: "",
    },
    {
        text: (
            <>
                Received the{" "}
                <span className="highlight2">
                    Vice Chancellor's Honour Award
                </span>{" "}
                for Fall - 2024 achieving a{" "}
                <span className="highlight2"> GPA of 3.91.</span>
            </>
        ),
        link: "",
    },
    {
        text: (
            <>
                Received the{" "}
                <span className="highlight2">Dean's Honour Award </span> x3
                times for academic excellence.
            </>
        ),
        link: "",
    },
    {
        text: (
            <>
                Participated in multiple{" "}
                <span className="highlight2">Math Olympiads</span>.
            </>
        ),
        link: "",
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
        title: "Hi-Fi Computer  Presents MU CSE Fest 2025",
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
    hidden: { y: 20, opacity: 0 },
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

            <div className="achievements-container">
                {achievementsData.map((achievement, index) => (
                    <motion.div
                        key={index}
                        className="achievement-item"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                    >
                        <i className="fa-solid fa-award achievement-icon"></i>

                        <p className="achievement-text">
                            {achievement.text}{" "}
                            {achievement.link && (
                                <a
                                    href={achievement.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="achievement-link"
                                >
                                    [Link]
                                </a>
                            )}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Contest Participation Section */}

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

            {/* Image Popup */}

            {selectedImage && (
                <div
                    className="image-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
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
