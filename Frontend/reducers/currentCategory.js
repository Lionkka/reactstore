const InitialState = 0;
export default function (state = InitialState, action) {
    switch (action.type) {
        case 'SET':
            if(action.payload)
                return action.payload;
            else
                return state;
        default:
            return state;

    }
}
