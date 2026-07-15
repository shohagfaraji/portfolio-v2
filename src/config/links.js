import { getEnvValue } from "./env";

export const RESUME_URL = getEnvValue(
    "REACT_APP_RESUME_URL",
    "https://drive.google.com/drive/folders/1tyc-BUoseWXr5AbAJv8skPZkHeJI7WJm?usp=sharing",
);

export const DEPLOY_LINKS = {
    fallDetection: getEnvValue(
        "REACT_APP_FALL_DETECTION_DEPLOY_URL",
        "https://drive.google.com/file/d/1GU_vjUQroNSZIp4hhGGMNORGwB2vAfj2/view?usp=sharing",
    ),
    ecommerce: getEnvValue(
        "REACT_APP_ECOMMERCE_DEPLOY_URL",
        "https://winkelo.netlify.app/",
    ),
    copeforces: getEnvValue(
        "REACT_APP_COPEFORCES_DEPLOY_URL",
        "https://copeforces.netlify.app/",
    ),
    recipeBlog: getEnvValue(
        "REACT_APP_RECIPE_BLOG_DEPLOY_URL",
        "https://claypot.netlify.app/",
    ),
    graphicsLab: getEnvValue(
        "REACT_APP_GRAPHICS_LAB_DEPLOY_URL",
        "https://www.youtube.com/playlist?list=PLxi-FW-37nrXWuxjpmq0iJrB9EfK4loiw",
    ),
    dlsdProject: getEnvValue(
        "REACT_APP_DLSD_PROJECT_DEPLOY_URL",
        "https://github.com/shohagfaraji/dlsd-lab-final-project/tree/main/videos",
    ),
};
