import { getEnvValue } from "../config/env";

export const PROJECTS = {
    ecommerce: {
        image: getEnvValue(
            "REACT_APP_PROJECT_ECOMMERCE_IMAGE_URL",
            "https://res.cloudinary.com/shohagfaraji/image/upload/v1786610193/winkelo-1_vung4t.webp"
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_ECOMMERCE_VIDEO_URL",
            "https://res.cloudinary.com/shohagfaraji/video/upload/v1779376693/ecommerce.mp4",
        ),
    },

    thesis_1: {
        image: getEnvValue(
            "REACT_APP_PROJECT_FALL_DETECTION_IMAGE_URL",
            "https://res.cloudinary.com/shohagfaraji/image/upload/v1786610607/thesis-sample_eeyzb1.webp",
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_FALL_DETECTION_VIDEO_URL",
            "https://res.cloudinary.com/shohagfaraji/video/upload/v1784129546/Output_Fall_Detection_in_Surveillance_Systems_zpd35z.mp4",
        ),
    },

    copeforces: {
        image: getEnvValue(
            "REACT_APP_PROJECT_COPEFORCES_IMAGE_URL",
            "https://res.cloudinary.com/shohagfaraji/image/upload/v1786610607/Cope-Forces_lifw0k.webp",
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_COPEFORCES_VIDEO_URL",
            "https://res.cloudinary.com/shohagfaraji/video/upload/v1783025888/copeforces_sample_graph_r1sbgq.mp4",
        ),
    },

    claypot: {
        image: getEnvValue(
            "REACT_APP_PROJECT_CLAYPOT_IMAGE_URL",
            "https://res.cloudinary.com/shohagfaraji/image/upload/v1786610193/claypot_y8nnv5.webp",
        ),
        video: getEnvValue("REACT_APP_PROJECT_CLAYPOT_VIDEO_URL", null),
    },

    blank: {
        image: getEnvValue(
            "REACT_APP_PROJECT_BLANK_IMAGE_URL",
            "https://res.cloudinary.com/shohagfaraji/image/upload/v1786610607/blank_un5mlg.webp",
        ),
        video: getEnvValue("REACT_APP_PROJECT_BLANK_VIDEO_URL", null),
    },

    national_martyrs_monument: {
        image: getEnvValue(
            "REACT_APP_PROJECT_NATIONAL_MARTYRS_MONUMENT_IMAGE_URL",
            "https://res.cloudinary.com/shohagfaraji/image/upload/v1786610607/national-martyrs-monument_gr3ywd.webp",
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_NATIONAL_MARTYRS_MONUMENT_VIDEO_URL",
            null,
        ),
    },

    traffic_system: {
        image: getEnvValue(
            "REACT_APP_PROJECT_TRAFFIC_SYSTEM_IMAGE_URL",
            "https://res.cloudinary.com/shohagfaraji/image/upload/v1786610608/traffic-system_jpniyq.webp",
        ),
        video: getEnvValue("REACT_APP_PROJECT_TRAFFIC_SYSTEM_VIDEO_URL", null),
    },

    hfr24: {
        image: getEnvValue(
            "REACT_APP_PROJECT_HFR24_IMAGE_URL",
            "https://res.cloudinary.com/shohagfaraji/image/upload/v1786626377/cse316_peripheral_and_interfacing_lab_project_bhzsib.webp",
        ),
        video: getEnvValue("REACT_APP_PROJECT_HFR24_VIDEO_URL", null),
    },

    mini_c_compiler: {
        image: getEnvValue(
            "REACT_APP_PROJECT_MINI_C_COMPILER_IMAGE_URL",
            "https://placehold.co/1200x675?text=Mini-C+Compiler",
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_MINI_C_COMPILER_VIDEO_URL",
            null,
        ),
    },
};
