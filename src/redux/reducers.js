import {combineReducers} from "redux";

import appReducer from "./app/redux"
import authReducer from "./auth/redux"
import videosReducer from "./videos/redux"
import searchReducer from "./Search/redux"

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    videos: videosReducer,
    search: searchReducer
})

export default reducers;