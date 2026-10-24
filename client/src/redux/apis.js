const BASE_URL = import.meta.env.VITE_APP_BASE_URL

export const endpoints = {
    SIGNUP_API: BASE_URL + "/api/v1/auth/signup",
    LOGIN_API: BASE_URL + "/api/v1/auth/login"
}