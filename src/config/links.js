const getEnvLink = (key, fallback) => {
    const value = process.env[key];
    return value && value.trim() ? value.trim() : fallback;
};

export const RESUME_URL = getEnvLink(
    "REACT_APP_RESUME_URL",
    "https://drive.google.com/drive/folders/1tyc-BUoseWXr5AbAJv8skPZkHeJI7WJm?usp=sharing",
);

export const DEPLOY_LINKS = {
    fallDetection: getEnvLink(
        "REACT_APP_FALL_DETECTION_DEPLOY_URL",
        "https://drive.google.com/file/d/1GU_vjUQroNSZIp4hhGGMNORGwB2vAfj2/view?usp=sharing",
    ),
    ecommerce: getEnvLink(
        "REACT_APP_ECOMMERCE_DEPLOY_URL",
        "https://winkelo.netlify.app/",
    ),
    copeforces: getEnvLink(
        "REACT_APP_COPEFORCES_DEPLOY_URL",
        "https://copeforces.netlify.app/",
    ),
    recipeBlog: getEnvLink(
        "REACT_APP_RECIPE_BLOG_DEPLOY_URL",
        "https://claypot.netlify.app/",
    ),
    graphicsLab: getEnvLink(
        "REACT_APP_GRAPHICS_LAB_DEPLOY_URL",
        "https://www.youtube.com/playlist?list=PLxi-FW-37nrXWuxjpmq0iJrB9EfK4loiw",
    ),
    dlsdProject: getEnvLink(
        "REACT_APP_DLSD_PROJECT_DEPLOY_URL",
        "https://github.com/shohagfaraji/dlsd-lab-final-project/tree/main/videos",
    ),
};
