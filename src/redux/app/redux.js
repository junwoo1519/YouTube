const initialState = {
    btn: false
};

export const appAction = {
    Types: {
        UPDATE_STATE: "APP/UPDATE_STATE"
    },

    Creators: {
        updateState: (props) => ({
            type: appAction.Types.UPDATE_STATE,
            props
        })
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case appAction.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
    }
};

export default reducer;