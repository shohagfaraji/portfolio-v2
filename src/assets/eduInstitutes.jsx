import { getEnvValue } from "../config/env";

export const EDU_INSTITUTE_IMAGES = {
    uap: getEnvValue(
        "REACT_APP_EDU_UAP_IMAGE_URL",
        "https://i.postimg.cc/mZQJ5Z6m/uap-plaza.webp",
    ),
    milestone: getEnvValue(
        "REACT_APP_EDU_MILESTONE_IMAGE_URL",
        "https://i.postimg.cc/NG1SzGPz/milestone.webp",
    ),
    dhalla: getEnvValue(
        "REACT_APP_EDU_DHALLA_IMAGE_URL",
        "https://i.postimg.cc/mgMmtmfX/hi-school.webp",
    ),
    modelAcademy: getEnvValue(
        "REACT_APP_EDU_MODEL_ACADEMY_IMAGE_URL",
        "https://i.postimg.cc/2j4MKjXt/model-academy.webp",
    ),
    newSproutSchool: getEnvValue(
        "REACT_APP_EDU_NEW_SPROUT_SCHOOL_IMAGE_URL",
        "https://i.postimg.cc/FHPsnZdw/new-Sprout-School.webp",
    ),
};
