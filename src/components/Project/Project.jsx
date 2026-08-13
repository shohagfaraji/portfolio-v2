import React from "react";
import "./Project.css";
import Projectitem from "./Projectitem.jsx";
import { PROJECTS } from "../../assets/projects";
import { DEPLOY_LINKS } from "../../config/links";
import thesis_1 from "../../assets/projects/thesis-sample.webp";
import national_martyrs_monument from "../../assets/projects/national-martyrs-monument.webp";
import traffic_system from "../../assets/projects/traffic-system.webp";

const Project = () => {
    const projectData = [
        {
            sourceCodeLink: "https://github.com/shohagfaraji/copeforces",
            deployedLink: DEPLOY_LINKS.copeforces,
            name: "CopeForces | Problem Solving Toolkit",
            description:
                "Developed a web-based competitive programming toolkit used by competitive programmers from 40+ countries, featuring 80+ interactive tools for online contests including debugging utilities, graph and tree visualizers, number theory tools, and implementations of common data structures and algorithms.",
            languages:
                "React | JavaScript | Tailwind CSS | HTML | CSS | Data Structures & Algorithms | Competitive Programming",
            image: PROJECTS.copeforces.image,
            video: PROJECTS.copeforces.video,
            projectType: "Project",
        },
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/react-django-ecommerce",
            deployedLink: DEPLOY_LINKS.ecommerce,
            name: "Winkelo | Full-Stack E-Commerce Platform",
            description:
                "Developed a full-stack e-commerce platform featuring JWT authentication, product management, shopping cart, and order processing using Django REST Framework, React, PostgreSQL, and Tailwind CSS.",
            languages:
                "JavaScript | Python | Django REST Framework | React | Tailwind CSS | PostgreSQL",
            image: PROJECTS.ecommerce.image,
            video: PROJECTS.ecommerce.video,
            projectType: "Project",
        },
        {
            sourceCodeLink: "https://github.com/shohagfaraji/food-recipe-mern",
            deployedLink: DEPLOY_LINKS.recipeBlog,
            name: "Claypot | Full-Stack Recipe Sharing Platform",
            description:
                "Developed a full-stack recipe blog application using the MERN stack, enabling users to create, edit, browse, and share recipes through a responsive web interface.",
            languages: "MongoDB | Express.js | React | Node.js",
            image: PROJECTS.claypot.image,
            video: PROJECTS.claypot.video,
            projectType: "Project",
        },
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/Fall-Detection-in-Surveillance-Systems-Using-YOLO-and-Pose-Based-Analysis",
            deployedLink: DEPLOY_LINKS.fallDetection,
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
                "https://github.com/shohagfaraji/dlsd-lab-final-project",
            deployedLink: DEPLOY_LINKS.dlsdProject,
            name: "Winner - DLSD Lab Final Project",
            description:
                "This project demonstrates a simple yet effective 4-way traffic light system designed using digital logic ICs, primarily the 74HC4017 Johnson Decade Counter and a 555 timer in astable mode. It cycles through standard traffic light sequences for four directions, simulating a real-world traffic intersection.",
            languages:
                "Johnson Counter | 555 timer | LEDs | Resistors | Capacitors | Potentiometer | Breadboard | DC/battery input",
            image: traffic_system,
            video: null,
            projectType: "Academic Project",
        },
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/autonomous-human-following-robot",
            deployedLink: null,
            name: "Autonomous Human-Following Robot (CSE 316)",
            description:
                "Developed an Arduino Uno-based robot that follows a person using an ultrasonic sensor and two IR sensors. An L293D motor driver controls its dual motors for real-time directional tracking and automatic stopping when the subject moves out of range. Built for the CSE 316 Peripheral & Interfacing Lab in Spring 2024, earning an A+ (GPA 4.00).",
            languages:
                "Arduino Uno | Embedded C/C++ | HC-SR04 | IR Sensors | L293D Motor Driver | PWM | Robotics",
            image: PROJECTS.hfr24.image,
            video: PROJECTS.hfr24.video,
            projectType: "Academic Project • Peripheral & Interfacing Lab",
        },
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/computer-graphics-lab-works",
            deployedLink: null,
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
                "https://github.com/shohagfaraji/compiler-design-lab-works/tree/main/Mini-C-Compiler",
            deployedLink: null,
            name: "Mini-C-Compiler | Compiler Design Lab",
            description:
                "Developed a compiler for a subset of the C language using Flex and Bison. It performs lexical and syntax analysis, manages identifiers through a symbol table, builds an abstract syntax tree, and generates three-address intermediate code and assembly-style output.",
            languages:
                "C | Flex/Lex | Bison/Yacc | Compiler Design | Symbol Table | AST | Three-Address Code",
            image: PROJECTS.mini_c_compiler.image,
            video: PROJECTS.mini_c_compiler.video,
            projectType: "Academic Project • Compiler Design Lab",
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
