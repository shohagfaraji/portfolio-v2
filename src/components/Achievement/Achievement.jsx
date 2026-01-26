import React from "react";
import { motion } from "framer-motion";
import "./Achievement.css";

const achievementsData = [
    {
        text: (
            <>
                <span className="highlight2">Pupil</span> on Codeforces with a
                maximum rating of <span className="highlight1">1205</span>.
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
                times for academic excellence.{" "}
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
    {
        text: (
            <>
                Participated in multiple{" "}
                <span className="highlight2">IUPCs</span> with a remarkable
                performance in BUET, KUET, CUET, DUET, AUST, UIU, MU, NWU, UU.
            </>
        ),
        link: "",
    },
    {
        text: (
            <>
                <span className="highlight2">
                    ICPC - Jamilur Reza Choudhury Scholarship:
                </span>{" "}
                I have achieved the JRC Scholarship
                <span className="highlight1"> x6 Times</span> for excellence in
                Competitive Programming
            </>
        ),
        link: "",
    },
    {
        text: (
            <>
                Achieved the top position{" "}
                <span className="highlight1">
                    (1<sup>st</sup> place)
                </span>{" "}
                in Bangladesh based on my consistent daily code streak in
                Stopstalk.
            </>
        ),
        link: "",
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
    return (
        <div id="Achievement" className="achievements-section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
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
                            <a
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="achievement-link"
                            >
                                [Link]
                            </a>
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
