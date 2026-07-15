import { getEnvValue } from "../config/env";

export const PROJECTS = {
    ecommerce: {
        image: getEnvValue(
            "REACT_APP_PROJECT_ECOMMERCE_IMAGE_URL",
            "https://i.postimg.cc/K8ktK5M4/winkelo.png",
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_ECOMMERCE_VIDEO_URL",
            "https://res.cloudinary.com/shohagfaraji/video/upload/v1779376693/ecommerce.mp4",
        ),
    },

    thesis_1: {
        image: getEnvValue(
            "REACT_APP_PROJECT_FALL_DETECTION_IMAGE_URL",
            "https://i.postimg.cc/FKr43pB0/thesis-sample.png",
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_FALL_DETECTION_VIDEO_URL",
            "https://res.cloudinary.com/shohagfaraji/video/upload/v1784129546/Output_Fall_Detection_in_Surveillance_Systems_zpd35z.mp4",
        ),
    },

    copeforces: {
        image: getEnvValue(
            "REACT_APP_PROJECT_COPEFORCES_IMAGE_URL",
            "https://i.postimg.cc/pTjrqG5t/Cope-Forces.png",
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_COPEFORCES_VIDEO_URL",
            "https://res.cloudinary.com/shohagfaraji/video/upload/v1783025888/copeforces_sample_graph_r1sbgq.mp4",
        ),
    },

    claypot: {
        image: getEnvValue(
            "REACT_APP_PROJECT_CLAYPOT_IMAGE_URL",
            "https://i.postimg.cc/Xq859Hjv/claypot.png",
        ),
        video: getEnvValue("REACT_APP_PROJECT_CLAYPOT_VIDEO_URL", null),
    },

    blank: {
        image: getEnvValue(
            "REACT_APP_PROJECT_BLANK_IMAGE_URL",
            "https://i.postimg.cc/bJsN2PCy/blank.png",
        ),
        video: getEnvValue("REACT_APP_PROJECT_BLANK_VIDEO_URL", null),
    },

    national_martyrs_monument: {
        image: getEnvValue(
            "REACT_APP_PROJECT_NATIONAL_MARTYRS_MONUMENT_IMAGE_URL",
            "https://i.postimg.cc/k44B2dzL/national-martyrs-monument.png",
        ),
        video: getEnvValue(
            "REACT_APP_PROJECT_NATIONAL_MARTYRS_MONUMENT_VIDEO_URL",
            null,
        ),
    },

    traffic_system: {
        image: getEnvValue(
            "REACT_APP_PROJECT_TRAFFIC_SYSTEM_IMAGE_URL",
            "https://i.postimg.cc/RFDqfDzV/traffic-system.png",
        ),
        video: getEnvValue("REACT_APP_PROJECT_TRAFFIC_SYSTEM_VIDEO_URL", null),
    },
};
