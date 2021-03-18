const initialState = {
    searchList: {
        items: []
    }
};

export const Action = {
    Types: {
        UPDATE_STATE: "SEARCH/UPDATE_STATE",
        GET_SEARCH_LIST: "SEARCH/GET_SEARCH_LIST",
        SET_SEARCH_LIST: "SEARCH/SET_SEARCH_LIST",
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getSearch: function (payload) {
            return {
                type: Action.Types.GET_SEARCH_LIST,
                payload
            }
        },
        setSearch: function (payload) {
            return {
                type: Action.Types.SET_SEARCH_LIST,
                payload
            }
        }
    }
};

const reducer = function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_SEARCH_LIST: {
            return {
                ...state,
                searchList: action.payload
            }
        }
    }
};

export default reducer;