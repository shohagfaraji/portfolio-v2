import React from "react";
import "./Project.css";
import Projectitem from "./Projectitem.jsx";
import { PROJECTS } from "../../assets/projects";
import thesis_1 from "../../assets/projects/thesis-sample.webp";
import ecommerce_django_react from "../../assets/projects/ecommerce.webp";
import ShiftTextLogoLight from "../../assets/projects/Shift-Text-Logo-Light.webp";
import national_martyrs_monument from "../../assets/projects/national-martyrs-monument.webp";
import traffic_system from "../../assets/projects/traffic-system.webp";

const Project = () => {
    const projectData = [
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/Fall-Detection-in-Surveillance-Systems-Using-YOLO-and-Pose-Based-Analysis",
            deployedLink:
                "https://www.linkedin.com/feed/update/urn:li:activity:7401675334401892352/",
            name: "Fall Detection in Surveillance Systems Using YOLO and Pose-Based Analysis",
            description:
                "A functional vision based fall detection system has been developed for monitoring human activity in surveillance footage. It can classify human states such as walking, sitting, and falling using YOLO-based object detection and verifies posture using pose estimation techniques.",
            languages:
                "Python | OpenCV | Deep Learning | YOLOv8 | YOLOv11 | Pose Estimation",
            image: thesis_1,
            video: PROJECTS.thesis_1.video,
            projectType: "Thesis",
        },
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/react-django-ecommerce",
            deployedLink: "https://evoltedge.netlify.app/",
            name: "Full-Stack E-Commerce Web Application",
            description:
                "A full-stack e-commerce web application built as a learning project using Django and React. The application features user authentication, product management, shopping cart functionality, and order processing, backed by a PostgreSQL database (managed via pgAdmin 4) and a responsive UI built with Tailwind CSS.",
            languages:
                "JavaScript | Python | Django REST Framework | React | Tailwind CSS | PostgreSQL",
            image: ecommerce_django_react,
            video: PROJECTS.ecommerce.video,
            projectType: "Project",
        },
        {
            sourceCodeLink: "https://github.com/shohagfaraji/food-recipe-mern",
            deployedLink: "https://github.com/shohagfaraji/food-recipe-mern",
            name: "Full-Stack Recipe Blog Application",
            description:
                "A full-stack recipe blog application built with the MERN stack.",
            languages: "MongoDB | Express.js | React | Node.js",
            image: PROJECTS.blank.image,
            video: null,
            projectType: "Project",
        },
        {
            sourceCodeLink: "https://github.com/shohagfaraji/react-text-tool",
            deployedLink: "https://shifttext.netlify.app/",
            name: "📚 ShiftText – Text Utility & Encoding Tool",
            description:
                "ShiftText is a React-based text utility tool offering live word/character count, case conversion, word replacement, Morse code & Caesar cipher encoding/decoding, link extraction, space cleanup, and export to .txt or PDF. It also includes a customizable countdown timer for study sessions or exam prep.",
            languages: "React JS | React Router | HTML | CSS | Bootstrap",
            image: ShiftTextLogoLight,
            video: null,
            projectType: "Exam Preparation Portal",
        },
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/computer-graphics-lab-works",
            deployedLink:
                "https://www.youtube.com/playlist?list=PLxi-FW-37nrXWuxjpmq0iJrB9EfK4loiw",
            name: "CSE 426: Computer Graphics Lab",
            description:
                "A collection of creative graphics programs developed as part of the Computer Graphics Lab course. The project includes custom-designed scenes such as the National Martyrs' Monument and other illustrative diagrams. Implemented using core graphics concepts including transformations, drawing algorithms, and user interaction, with a final project showcasing advanced rendering and scene composition.",
            languages: "C++ | OpenGL | Glut | Data Structures | Algorithms",
            image: national_martyrs_monument,
            video: null,
            projectType: "Personal Project",
        },
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/dlsd-lab-final-project",
            deployedLink:
                "https://github.com/shohagfaraji/dlsd-lab-final-project/tree/main/videos",
            name: "Winner - DLSD Lab Final Project",
            description:
                "This project demonstrates a simple yet effective 4-way traffic light system designed using digital logic ICs, primarily the 74HC4017 Johnson Decade Counter and a 555 timer in astable mode. It cycles through standard traffic light sequences for four directions, simulating a real-world traffic intersection.",
            languages:
                "Johnson Counter | 555 timer | LEDs | Resistors | Capacitors | Potentiometer | Breadboard | DC/battery input",
            image: traffic_system,
            video: null,
            projectType: "Academic Project",
        },
    ];

    return (
        <>
            <div id="Projects" className="projects-section">
                <h2>
                    <i className="fas fa-project-diagram"></i> Projects
                </h2>
                <div className="projects-container">
                    {projectData.map((project, index) => (
                        <Projectitem
                            key={`${project.name}-${index}`}
                            index={index}
                            name={project.name}
                            description={project.description}
                            languages={project.languages}
                            image={project.image}
                            video={project.video}
                            sourceCodeLink={project.sourceCodeLink}
                            deployedLink={project.deployedLink}
                            projectType={project.projectType}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
