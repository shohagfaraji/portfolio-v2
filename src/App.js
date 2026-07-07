import { useEffect, useState } from "react";

import AboutMe from "./components/About/About.jsx";
import Achievement from "./components/Achievement/Achievement.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Education from "./components/Education/Education.jsx";
import HeroSection from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Project from "./components/Project/Project.jsx";
import Skills from "./components/Skills/Skills.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.jsx";
import CodingProfilesSection from "./components/CodingProfiles/CodingProfiles.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Form from "./components/Form/Form.jsx";
import TapeSection from "./components/Tape/TapeSection.jsx";
import BackgroundParticles from "./components/BackgroundEffect/BackgroundParticles.jsx";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LoadingScreen />;

    return (
        <>
            <BackgroundParticles />
            <Navbar />
            <HeroSection />
            <AboutMe />
            <Skills />
            <Experience />
            <Project />
            {/* <TapeSection /> */}
            <Achievement />
            <Education />
            <CodingProfilesSection />
            <Form />
            <Contact />
            <ScrollToTopButton />
        </>
    );
}

export default App;
