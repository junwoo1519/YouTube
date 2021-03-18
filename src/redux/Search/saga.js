import {all, call, put, select, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";
import {YOUTUBE_KEY} from "../../constants";

const saga = function* () {
    yield all([
        yield takeLatest(Action.Types.GET_SEARCH_LIST, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading: true}));

            const result = yield call(API.getSearch, payload);
            console.log("@@ [Saga] getSearch", result);

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
            }));

            if (result.data) {
                yield select(state => state.search.searchList);
                yield put(Action.Creators.setSearch({
                    ...result.data,
                    items: [
                        ...resultWithChannel
                    ]
                }))
            };
            yield put(Action.Creators.updateState({isLoading: false}));
        })
    ])
};

export default saga;