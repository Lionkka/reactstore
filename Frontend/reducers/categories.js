const InitialState = [];
export default function (state = InitialState, action) {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                action.cat
            ];

        default:
            return state;

    }
}
