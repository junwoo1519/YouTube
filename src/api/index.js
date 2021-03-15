import {FetchJson} from "../lib/Fetch";

const API = {
    getVideos: (data) => FetchJson.get("/videos", data),
    getChannels: (data) => FetchJson.get("/channels", data),
    getSearch: (data) => FetchJson.get("/search", data),
};

export default API;
