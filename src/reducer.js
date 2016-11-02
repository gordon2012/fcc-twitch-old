export default function(state = {}, action) {
    switch(action.type) {
    case 'SET_STATE':
        return Object.assign({}, state, action.state);
    default:
        return state;
    }
}
