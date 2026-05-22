import React from "react";
import { motion } from "framer-motion";
import "./Education.css";
import { EDU_INSTITUTE_IMAGES } from "../../assets/eduInstitutes";

const educationData = [
    {
        institute: "University of Asia Pacific",
        location: "Green Road, Dhaka",
        degree: "BSc - CSE",
        year: "2022 – 2025",
        image: EDU_INSTITUTE_IMAGES.uap,
    },
    {
        institute: "Milestone College",
        location: "Uttara, Dhaka",
        degree: "HSC - Science",
        year: "2018 - 2020",
        image: EDU_INSTITUTE_IMAGES.milestone,
    },
    {
        institute: "D. U. Council High School",
        location: "Manikganj",
        degree: "SSC - Science",
        year: "2015 - 2018",
        image: EDU_INSTITUTE_IMAGES.dhalla,
    },
    {
        institute: "Model Academy",
        location: "Mirpur, Dhaka",
        degree: "Junior School",
        year: "2013 - 2015",
        image: EDU_INSTITUTE_IMAGES.modelAcademy,
    },
    {
        institute: "New Sprout School",
        location: "Kalyanpur, Dhaka",
        degree: "Primary School",
        year: "2006 - 2012",
        image: EDU_INSTITUTE_IMAGES.newSproutSchool,
    },
];

const Education = () => {
    return (
        <div id="Education" className="education-section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <i className="fa-solid fa-user-graduate"></i> Education
            </motion.h2>

            <div className="education-grid">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="edu-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: index * 0.08,
                        }}
                        whileHover={{ y: -6 }}
                    >
                        <div className="edu-card-image">
                            <img src={item.image} alt={item.institute} />
                            <div className="edu-year-badge">{item.year}</div>
                        </div>
                        <div className="edu-card-body">
                            <span className="edu-degree">{item.degree}</span>
                            <h4 className="edu-institute">{item.institute}</h4>
                            <span className="edu-location">
                                <i className="fa-solid fa-location-dot"></i>{" "}
                                {item.location}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
