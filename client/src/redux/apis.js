const BASE_URL = import.meta.env.VITE_APP_BASE_URL

export const endpoints = {
    SIGNUP_API: BASE_URL + "/api/v1/auth/signup",
    LOGIN_API: BASE_URL + "/api/v1/auth/login"
}

export const jobEndpoints = {
    FETCH_FILTERED_JOBS_API: BASE_URL + "/api/v1/job/getUserJobs",
    FETCH_JOB_API: BASE_URL + "/api/v1/job/getJob/"
}

export const uploadcareEndpoints = {
    GENERATE_UPLOADCARE_TOKEN_API: BASE_URL + "/api/v1/uploadcare/token"
}