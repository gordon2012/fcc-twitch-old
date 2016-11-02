// function getUserData(state, action) {
// }

export default function(state = {}, action) {
    switch(action.type) {
    case 'SET_STATE':
        return Object.assign({}, state, action.state);
    case 'SELECT_USER':
        return Object.assign({}, state, {
            user: action.user
        });
    // case 'RECEIVE_USER':
    // case 'REQUEST_USER':
    default:
        return state;
    }
}
