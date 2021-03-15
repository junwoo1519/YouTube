import axios from "axios";
import {API_BASE_URL} from "../constants";

const FetchConsts = {
    GET: "get",
    POST: "post",
    put: "put",
    DELETE: "delete"
};

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 6000
});

const request = (method, url, data) => {
    try {
        const config = {
            method,
            url
        };

        if (method === "get") {
            config.params = data;
        } else {
            config.data = data;
        }
        return axiosInstance(config)
    } catch (e) {
        console.log("@@ e", e);
    }
};

export const FetchJson = {
    get: (url, data) => request(FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.POST, url, data),
    delete: (url, data) => request(FetchConsts.DELETE, url, data),
    put: (url, data) => request(FetchConsts.put, url, data)
};