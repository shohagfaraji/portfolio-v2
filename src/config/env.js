export const getEnvValue = (key, fallback = "") => {
    const value = process.env[key];
    return value && value.trim() ? value.trim() : fallback;
};
