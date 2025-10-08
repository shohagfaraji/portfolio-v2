import React from "react";
import "./Project.css";
import Projectitem from "./Projectitem";
import { PROJECTS_IMAGES } from "../../assets/projects";

const Project = () => {
    const projectData = [
        {
            sourceCodeLink: "",
            deployedLink: "",
            name: "Fall Detection in Surveillance Systems Using YOLO and Pose-Based Analysis",
            description:
                "A functional vision based fall detection system has been developed for monitoring human activity in surveillance footage. It can classify human states such as walking, sitting, and falling using YOLO-based object detection and verifies posture using pose estimation techniques.",
            languages:
                "Python | OpenCV | Deep Learning | YOLOv8 | YOLOv11 | Pose Estimation",
            image: PROJECTS_IMAGES.thesis_1,
            projectType: "Thesis",
        },
        {
            sourceCodeLink: "https://github.com/shohagfaraji/react-text-tool",
            deployedLink: "https://shifttext.netlify.app/",
            name: "📚 ShiftText – Text Utility & Encoding Tool",
            description:
                "ShiftText is a React-based text utility tool offering live word/character count, case conversion, word replacement, Morse code & Caesar cipher encoding/decoding, link extraction, space cleanup, and export to .txt or PDF. It also includes a customizable countdown timer for study sessions or exam prep.",
            languages: "React JS | React Router | HTML | CSS | Bootstrap",
            image: PROJECTS_IMAGES.ShiftTextLogoLight,
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
            image: PROJECTS_IMAGES.national_martyrs_monument,
            projectType: "",
        },
        {
            sourceCodeLink:
                "https://github.com/shohagfaraji/dlsd-lab-final-project",
            deployedLink:
                "https://github.com/shohagfaraji/dlsd-lab-final-project/tree/main/videos",
            name: "CSE 426: Computer Graphics Lab",
            description:
                "A collection of creative graphics programs developed as part of the Computer Graphics Lab course. The project includes custom-designed scenes such as the National Martyrs' Monument and other illustrative diagrams. Implemented using core graphics concepts including transformations, drawing algorithms, and user interaction, with a final project showcasing advanced rendering and scene composition.",
            languages:
                "Johnson Counter | 555 timer | LEDs | Resistors | Capacitors | Potentiometer | Breadboard | DC/battery input",
            image: PROJECTS_IMAGES.traffic_system,
            projectType: "",
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
