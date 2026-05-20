import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import renderLogo from "../../assets/render.svg";

const skills = [
    // Languages
    {
        name: "JavaScript",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        logoColor: "#f7df1e",
    },
    {
        name: "Python",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        logoColor: "#3776ab",
    },
    {
        name: "Java",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        logoColor: "#007396",
    },
    {
        name: "C++",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        logoColor: "#00599C",
    },

    // Frontend
    {
        name: "React",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        logoColor: "#61dafb",
    },
    {
        name: "HTML",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        logoColor: "#e34f26",
    },
    {
        name: "CSS",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        logoColor: "#1572b6",
    },
    {
        name: "Tailwind CSS",
        logoUrl:
            "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        logoColor: "#38BDF8",
    },
    {
        name: "Bootstrap",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        logoColor: "#563d7c",
    },

    // Backend
    {
        name: "Node.js",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        logoColor: "#68a063",
    },
    {
        name: "Express",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        logoColor: "#000000",
    },
    {
        name: "Django REST Framework",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        logoColor: "#ff1709",
    },

    // Databases
    {
        name: "MongoDB",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        logoColor: "#47a248",
    },
    {
        name: "MySQL",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        logoColor: "#00758F",
    },
    {
        name: "PostgreSQL",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        logoColor: "#336791",
    },

    // API Testing
    {
        name: "Postman",
        logoUrl:
            "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        logoColor: "#FF6C37",
    },
    {
        name: "Thunder Client",
        logoUrl:
            "https://raw.githubusercontent.com/rangav/thunder-client-support/main/images/thunder-icon.png",
        logoColor: "#7B61FF",
    },

    // Deployment
    {
        name: "Netlify",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
        logoColor: "#00C7B7",
    },
    {
        name: "Render",
        logoUrl: renderLogo,
        logoColor: "#46E3B7",
    },

    // Auth / Concepts
    {
        name: "JWT",
        logoUrl: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
        logoColor: "#000000",
    },

    // Version Control / Tools
    {
        name: "Git",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        logoColor: "#f05032",
    },
    {
        name: "GitHub",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        logoColor: "#181717",
    },
    {
        name: "VS Code",
        logoUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        logoColor: "#007ACC",
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
        y: -10,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
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

            <div className="skill-grid">
                {skills.map((skill, index) => (
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
                            <div className="skill-name">{skill.name}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
