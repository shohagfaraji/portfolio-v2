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
                    "REACT_APP_SKILL_LOGO_JAVASCRIPT_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                ),
            },
            {
                name: "Python",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_PYTHON_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                ),
            },
            {
                name: "Java",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_JAVA_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                ),
            },
            {
                name: "C++",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_CPP_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
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
                    "REACT_APP_SKILL_LOGO_REACT_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                ),
            },
            {
                name: "HTML",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_HTML_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                ),
            },
            {
                name: "CSS",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_CSS_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                ),
            },
            {
                name: "Tailwind CSS",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_TAILWIND_URL",
                    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                ),
            },
            {
                name: "shadcn/ui",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_SHADCN_URL",
                    "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
                ),
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_NODEJS_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                ),
            },
            {
                name: "Express",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_EXPRESS_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                ),
            },
            {
                name: "Django REST Framework",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_DJANGO_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                ),
            },
            {
                name: "FastAPI",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_FASTAPI_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
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
                    "REACT_APP_SKILL_LOGO_MONGODB_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                ),
            },
            {
                name: "MySQL",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_MYSQL_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                ),
            },
            {
                name: "PostgreSQL",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_POSTGRESQL_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
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
                    "REACT_APP_SKILL_LOGO_GIT_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                ),
            },
            {
                name: "GitHub",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_GITHUB_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                ),
            },
            {
                name: "VS Code",
                logoUrl: getEnvValue(
                    "REACT_APP_SKILL_LOGO_VSCODE_URL",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
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
