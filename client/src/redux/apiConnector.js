import axios from 'axios'
import store from './store'
import { logout } from './slices/authSlice';

export const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status;

        if(status === 401 || status === 403) {
            store.dispatch(logout());
            window.location.replace("/login")
        }

        return response.Promise.reject(error);
    }
);

export const apiConnector = (method, url, bodyData, headers, params) => {
    const token = JSON.parse(localStorage.getItem("token")) || null;
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            ...headers,
        },
        params: params ? params : null
    });
}