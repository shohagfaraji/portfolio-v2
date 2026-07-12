const getEnvLink = (key, fallback) => {
    const value = process.env[key];
    return value && value.trim() ? value.trim() : fallback;
};

export const RESUME_URL = getEnvLink(
    "RESUME_URL",
    "https://drive.google.com/drive/folders/1tyc-BUoseWXr5AbAJv8skPZkHeJI7WJm?usp=sharing",
);

export const DEPLOY_LINKS = {
    fallDetection: getEnvLink(
        "FALL_DETECTION_URL",
        "https://www.linkedin.com/feed/update/urn:li:activity:7401675334401892352/",
    ),
    ecommerce: getEnvLink(
        "REACT_APP_ECOMMERCE_DEPLOY_URL",
        "https://voltedgeshop.netlify.app/",
    ),
    copeforces: getEnvLink(
        "REACT_APP_COPEFORCES_DEPLOY_URL",
        "https://copeforces.netlify.app/",
    ),
    recipeBlog: getEnvLink(
        "REACT_APP_RECIPE_BLOG_DEPLOY_URL",
        "https://github.com/shohagfaraji/food-recipe-mern",
    ),
    graphicsLab: getEnvLink(
        "GRAPHICS_LAB_URL",
        "https://www.youtube.com/playlist?list=PLxi-FW-37nrXWuxjpmq0iJrB9EfK4loiw",
    ),
    dlsdProject: getEnvLink(
        "DLSD_PROJECT_URL",
        "https://github.com/shohagfaraji/dlsd-lab-final-project/tree/main/videos",
    ),
};
