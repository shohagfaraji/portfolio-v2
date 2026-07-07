import { useState, useRef } from "react";
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
        video,
        index,
        projectType,
    } = props;

    const [hovered, setHovered] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const videoRef = useRef(null);
    const SHORT_LIMIT = 120;
    const isLong = description.length > SHORT_LIMIT;

    const handleMouseEnter = () => {
        if (!video) return;
        setHovered(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Hover previews can be interrupted when the cursor leaves quickly.
                });
            }
        }
    };

    const handleMouseLeave = () => {
        if (!video) return;
        setHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
        >
            <div
                className="image-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={image}
                    alt={`${name} screenshot`}
                    className={hovered && video ? "media-hidden" : ""}
                />
                {video && (
                    <video
                        ref={videoRef}
                        src={video}
                        muted
                        loop
                        playsInline
                        className={hovered ? "media-visible" : "media-hidden"}
                    />
                )}
            </div>

            <div className="project-details">
                <p className="project-type">- {projectType}</p>
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
