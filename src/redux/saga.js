import {call, all} from "redux-saga/effects";
import videoSaga from "./videos/saga";
import authSaga from "./auth/saga";
import appSaga from "./app/saga";

const saga = function* () {
    yield all(
        [
            call(appSaga),
            call(authSaga),
            call(videoSaga),
        ]
    )
}

export default saga;