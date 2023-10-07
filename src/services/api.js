import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, data) {
        return axiosInstance.post(endpoint, data);
    },
    put(endpoint, data) {
        return axiosInstance.put(endpoint, data);
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint);
    }
}