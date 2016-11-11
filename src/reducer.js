export default function(state = {}, action) {
    switch(action.type) {
        case 'SET_STATE':
            return Object.assign({}, state, action.state);
        case 'SELECT_USER':
            return Object.assign({}, state, {
                user: action.user
            });
        case 'RECEIVE_USER':
            return Object.assign({}, state, {
                users: Object.assign({}, state.users, {
                    [action.user]: action.data
                })
            });
        case 'RECEIVE_STREAM':
            return Object.assign({}, state, {
                streams: Object.assign({}, state.streams, {
                    [action.user]: action.data.stream
                })
            });
        default:
            return state;
    }
}
