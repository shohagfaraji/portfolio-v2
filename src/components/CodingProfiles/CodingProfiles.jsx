import React, { useState } from "react";
import { motion } from "framer-motion";
import { getEnvValue } from "../../config/env";
import codeforces2022 from "../../assets/coding-activity/codeforces-2022.png";
import codeforces2023 from "../../assets/coding-activity/codeforces-2023.png";
import codeforces2024 from "../../assets/coding-activity/codeforces-2024.png";
import codeforces2025 from "../../assets/coding-activity/codeforces-2025.png";
import "./CodingProfiles.css";

const CodingProfilesSection = () => {
    const [selectedYear, setSelectedYear] = useState("2025");

    const heatmaps = {
        2022: codeforces2022,
        2023: codeforces2023,
        2024: codeforces2024,
        2025: codeforces2025,
    };

    const activityStats = [
        { value: "Pupil", label: "Codeforces rank" },
        { value: "2200+", label: "Problems solved" },
        { value: "200+", label: "Virtual contests" },
    ];

    const codingProfiles = [
        {
            name: "LeetCode",
            link: "https://leetcode.com/u/shohagfaraji/",
            icon: getEnvValue(
                "REACT_APP_CODING_PROFILE_LEETCODE_ICON_URL",
                "https://cdn-1.webcatalog.io/catalog/leetcode/leetcode-social-preview.png?v=1714774949349",
            ),
        },
        {
            name: "Codeforces",
            link: "https://codeforces.com/profile/cse",
            icon: getEnvValue(
                "REACT_APP_CODING_PROFILE_CODEFORCES_ICON_URL",
                "https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-social-preview.png?v=1714773964567",
            ),
        },
        {
            name: "GitHub",
            link: "https://github.com/shohagfaraji/",
            icon: getEnvValue(
                "REACT_APP_CODING_PROFILE_GITHUB_ICON_URL",
                "https://i.postimg.cc/SNdDxxc2/github.jpg",
            ),
        },
        {
            name: "AtCoder",
            link: "https://atcoder.jp/users/shohagfaraji",
            icon: getEnvValue(
                "REACT_APP_CODING_PROFILE_ATCODER_ICON_URL",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOKfQMWgupGFJsJbrlHLt3oea4hmgg6Qq-g&s",
            ),
        },
        {
            name: "CodeChef",
            link: "https://www.codechef.com/users/shohagfaraji",
            icon: getEnvValue(
                "REACT_APP_CODING_PROFILE_CODECHEF_ICON_URL",
                "https://pbs.twimg.com/profile_images/1477930785537605633/ROTVNVz7_400x400.jpg",
            ),
        },
        {
            name: "GeeksforGeeks",
            link: "https://www.geeksforgeeks.org/user/shohagfaraji/?ref=header_profile",
            icon: getEnvValue(
                "REACT_APP_CODING_PROFILE_GFG_ICON_URL",
                "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
            ),
        },
    ];

    return (
        <div id="Coding-profiles" className="coding-profiles-section">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
            >
                <i className="fa-solid fa-code"></i> My Programming Profiles
            </motion.h2>

            <motion.section
                className="coding-activity-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                aria-labelledby="coding-activity-title"
            >
                <div className="coding-activity-intro">
                    <div>
                        <span className="coding-activity-eyebrow">
                            2022 — 2025
                        </span>
                        <h3 id="coding-activity-title">
                            Competitive Programming Activity
                        </h3>
                        <p>
                            Consistent problem-solving practice across online
                            judges and programming contests.
                        </p>
                    </div>
                    <div className="coding-activity-actions">
                        <a
                            href="https://codeforces.com/profile/cse"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Codeforces Profile
                            <span aria-hidden="true">↗</span>
                        </a>
                        <a
                            href="https://github.com/shohagfaraji"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Archive
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                <div className="coding-stats" aria-label="Programming statistics">
                    {activityStats.map((stat) => (
                        <div className="coding-stat" key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="heatmap-heading">
                    <div>
                        <h4>Codeforces activity</h4>
                        <p>Public submission activity by year</p>
                    </div>
                    <div className="heatmap-tabs" role="tablist" aria-label="Activity year">
                        {Object.keys(heatmaps).map((year) => (
                            <button
                                key={year}
                                type="button"
                                role="tab"
                                aria-selected={selectedYear === year}
                                aria-controls="codeforces-heatmap"
                                className={selectedYear === year ? "active" : ""}
                                onClick={() => setSelectedYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    id="codeforces-heatmap"
                    className="heatmap-frame"
                    role="tabpanel"
                >
                    <img
                        key={selectedYear}
                        src={heatmaps[selectedYear]}
                        alt={`Codeforces public activity heatmap for ${selectedYear}`}
                        loading="lazy"
                    />
                </div>

                <p className="archive-note">
                    Codeforces submissions are automatically archived on
                    GitHub using Harwest; the two profiles may therefore show
                    overlapping activity.
                </p>
            </motion.section>

            <motion.div
                className="coding-profiles-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "linear",
                }}
            >
                {codingProfiles.map((profile, index) => (
                    <motion.a
                        key={index}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="coding-profile-link"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.1 * index,
                        }}
                    >
                        <img
                            draggable="false"
                            src={profile.icon}
                            alt={`${profile.name} profile`}
                            className="coding-profile-icon"
                        />
                        <span className="coding-profile-name">
                            {profile.name}
                        </span>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default CodingProfilesSection;
