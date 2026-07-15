import React from "react";
import { motion } from "framer-motion";
import { getEnvValue } from "../../config/env";
import "./Skills.css";

const skillGroups = [
    {
        title: "Languages",
        skills: [
            {
                name: "JavaScript",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    "REACT_APP_SKILL_LOGO_JAVASCRIPT_URL",
                ),
            },
            {
                name: "Python",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                    "REACT_APP_SKILL_LOGO_PYTHON_URL",
                ),
            },
            {
                name: "Java",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                    "REACT_APP_SKILL_LOGO_JAVA_URL",
                ),
            },
            {
                name: "C++",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
                    "REACT_APP_SKILL_LOGO_CPP_URL",
                ),
            },
        ],
    },
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    "REACT_APP_SKILL_LOGO_REACT_URL",
                ),
            },
            {
                name: "HTML",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    "REACT_APP_SKILL_LOGO_HTML_URL",
                ),
            },
            {
                name: "CSS",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                    "REACT_APP_SKILL_LOGO_CSS_URL",
                ),
            },
            {
                name: "Tailwind CSS",
                logoUrl: getEnvValue(
                    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                    "REACT_APP_SKILL_LOGO_TAILWIND_URL",
                ),
            },
            {
                name: "Bootstrap",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                    "REACT_APP_SKILL_LOGO_BOOTSTRAP_URL",
                ),
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Express",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                    "REACT_APP_SKILL_LOGO_EXPRESS_URL",
                ),
            },
            {
                name: "Django REST Framework",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                    "REACT_APP_SKILL_LOGO_DJANGO_URL",
                ),
            },
        ],
    },
    {
        title: "Databases",
        skills: [
            {
                name: "MongoDB",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                    "REACT_APP_SKILL_LOGO_MONGODB_URL",
                ),
            },
            {
                name: "MySQL",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                    "REACT_APP_SKILL_LOGO_MYSQL_URL",
                ),
            },
            {
                name: "PostgreSQL",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                    "REACT_APP_SKILL_LOGO_POSTGRESQL_URL",
                ),
            },
        ],
    },
    {
        title: "Tools",
        skills: [
            {
                name: "Git",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                    "REACT_APP_SKILL_LOGO_GIT_URL",
                ),
            },
            {
                name: "GitHub",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                    "REACT_APP_SKILL_LOGO_GITHUB_URL",
                ),
            },
            {
                name: "VS Code",
                logoUrl: getEnvValue(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
                    "REACT_APP_SKILL_LOGO_VSCODE_URL",
                ),
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
