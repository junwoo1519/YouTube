import {call, all} from "redux-saga/effects";
import videoSaga from "./videos/saga";
import authSaga from "./auth/saga";
import appSaga from "./app/saga";
import searchSaga from "./Search/saga";

const saga = function* () {
    yield all(
        [
            call(appSaga),
            call(authSaga),
            call(videoSaga),
            call(searchSaga),
        ]
    )
}

export default saga;