import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const educationData = [
    {
        institute: "University of Asia Pacific",
        location: "Green Road, Dhaka",
        degree: "BSc - Computer Science & Engineering",
        year: "2022 – 2025",
    },
    {
        institute: "Milestone College",
        location: "Uttara, Dhaka",
        degree: "HSC - Science",
        year: "2018 - 2020",
    },
    {
        institute: "Dhalla Union Council High School",
        location: "Manikganj",
        degree: "SSC - Science",
        year: "2015 - 2018",
    },
    {
        institute: "Model Academy",
        location: "Mirpur, Dhaka",
        degree: "Junior School",
        year: "2013 - 2015",
    },
    {
        institute:
            "New Sprout School, Korean Development Association in Bangladesh (KDAB)",
        location: "Kalyanpur, Dhaka",
        degree: "Primary School",
        year: "2006 - 2012",
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
    borderRadius: "0px",
  },
};

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

      <div className="education-list">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="education-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ amount: 0.2 }}
          >
            <div className="education-row">
              <span className="institute">{item.institute}</span>
              <span className="location">{item.location}</span>
            </div>
            <div className="education-row">
              <span className="degree">{item.degree}</span>
              <span className="year">{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
