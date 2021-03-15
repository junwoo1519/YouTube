import {all, call, put, select, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";
import {YOUTUBE_KEY} from "../../constants";

const saga = function* () {
    yield all([
        yield takeLatest(Action.Types.GET_VIDEOS, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading: true}))

            const result = yield call(API.getVideos, payload);
            console.log("@@ [Saga] getVideos", result);

            const resultWithChannel = yield all(result.data.items.map((item) => {
                const channelId = item?.snippet?.channelId;
                return call(async () => {
                    const channelData = await API.getChannels({
                        key: YOUTUBE_KEY,
                        part: "snippet",
                        id: channelId
                    })
                    item.channels = channelData.data.items[0]?.snippet;
                    return item;
                })
            }))

            if (result.data) {
                const prevList = yield select(state => state.videos.list);
                yield put(Action.Creators.setVideos({
                    ...prevList,
                    ...result.data,
                    items: [
                        ...prevList.items,
                        ...resultWithChannel
                    ]
                }))
            }
            yield put(Action.Creators.updateState({isLoading: false}))
        })
    ])
}

export default saga;