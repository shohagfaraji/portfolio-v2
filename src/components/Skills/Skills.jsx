import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
    {
        title: "Languages",
        skills: [
            {
                name: "JavaScript",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
                name: "Python",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
                name: "Java",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
                name: "C++",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            },
        ],
    },
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "HTML",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
                name: "CSS",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
                name: "Tailwind CSS",
                logoUrl:
                    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
            },
            {
                name: "Bootstrap",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Express",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
                name: "Django REST Framework",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            },
        ],
    },
    {
        title: "Databases",
        skills: [
            {
                name: "MongoDB",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
                name: "MySQL",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
                name: "PostgreSQL",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
        ],
    },
    {
        title: "Tools",
        skills: [
            {
                name: "Git",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
                name: "GitHub",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            },
            {
                name: "VS Code",
                logoUrl:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            },
        ],
    },
];

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
    hover: {
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 10 },
    },
};

export default function SkillGrid() {
    return (
        <div id="Skills" className="skills-section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <i className="fa fa-cogs" aria-hidden="true"></i> Skills
            </motion.h2>

            <div className="skill-groups">
                {skillGroups.map((group) => (
                    <motion.section
                        className="skill-group"
                        key={group.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        <h3>{group.title}</h3>
                        <div className="skill-grid">
                            {group.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name + index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                    viewport={{ amount: 0.2 }}
                                    className="skill-item"
                                >
                                    <div className="skill-card">
                                        <div className="skill-icon-container">
                                            <img
                                                src={skill.logoUrl}
                                                alt={`${skill.name} logo`}
                                                className="skill-logo-img"
                                            />
                                        </div>
                                        <div className="skill-name">
                                            {skill.name}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>
        </div>
    );
}
