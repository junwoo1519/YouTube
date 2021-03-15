const initialState = {
    list: {
        items: []
    }
};

export const Action = {
    Types: {
        UPDATE_STATE: "UPDATE_STATE",
        GET_VIDEOS: "VIDEOS/GET_VIDEOS",
        SET_VIDEOS: "VIDEOS/SET_VIDEOS"
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getVideos: (payload) => ({
            type: Action.Types.GET_VIDEOS,
            payload
        }),
        setVideos: (payload) => ({
            type: Action.Types.SET_VIDEOS,
            payload
        }),
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_VIDEOS: {
            return {
                ...state,
                list: action.payload
            }
        }

    }
}

export default reducer;
