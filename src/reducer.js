export default function(state = {}, action) {
    switch(action.type) {
        case 'SET_STATE':
            return Object.assign({}, state, action.state);
        case 'SELECT_USER':
            return Object.assign({}, state, {
                user: action.user
            });
        // case 'REQUEST_USER':
        case 'RECEIVE_USER':
            return Object.assign({}, state, {
                users: Object.assign({}, state.users, {
                    [action.user]: action.data
                })
            });
        default:
            return state;
    }
}
