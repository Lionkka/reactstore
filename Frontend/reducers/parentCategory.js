const InitialState = null;
export default function (state = InitialState, action) {
    switch (action.type) {
        case 'SET_PARENT_CATEGORY':
            return action.payload;
        default:
            return state;

    }
}