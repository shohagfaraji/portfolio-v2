import { useState } from "react";
import { motion } from "framer-motion";
import "./Projectitem.css";

const Projectitem = (props) => {
    const {
        sourceCodeLink,
        deployedLink,
        name,
        description,
        languages,
        image,
        index,
        projectType,
    } = props;

    const [expanded, setExpanded] = useState(false);
    const SHORT_LIMIT = 120;
    const isLong = description.length > SHORT_LIMIT;

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
        >
            <div className="image-wrapper">
                <img src={image} alt={`${name} screenshot`} />
            </div>

            <div className="project-details">
                <p className="project-type">— {projectType}</p>
                <h3 className="project-title">{name}</h3>

                <div className="tech-tags">
                    {languages.split("|").map((lang, tagIndex) => (
                        <span key={tagIndex} className="tech-tag">
                            {lang.trim()}
                        </span>
                    ))}
                </div>

                <p className="project-desc">
                    {expanded || !isLong
                        ? description
                        : `${description.substring(0, SHORT_LIMIT)}...`}
                    {isLong && (
                        <span
                            className="toggle-desc"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? " See Less" : " See More"}
                        </span>
                    )}
                </p>

                <div className="project-buttons">
                    <motion.a
                        href={sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-code shine-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        href={deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-live shine-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Live Demo
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default Projectitem;
