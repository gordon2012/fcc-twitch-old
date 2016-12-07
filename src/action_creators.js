// Action Creators
//
export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function selectUser(user) {
    return {
        type: 'SELECT_USER',
        user
    }
}

export function requestUser(user) {
    return {
        type: 'REQUEST_USER',
        user
    }
}

export function receiveUser(user, json) {
    return {
        type: 'RECEIVE_USER',
        user,
        data: json,
        receivedAt: Date.now()
    }
}

export function receiveStream(user, json) {
    return {
        type: 'RECEIVE_STREAM',
        user,
        data: json,
        receivedAt: Date.now()
    }
}


// Actions
//
function fetchUser(user, url) {
    return dispatch =>
        fetch(`${url}/users/${user}`)
        .then(res => res.json())
        .then(json => dispatch(receiveUser(user, json)));
}

function fetchStream(user, url) {
    return dispatch =>
        fetch(`${url}/streams/${user}`)
        .then(res => res.json())
        .then(json => dispatch(receiveStream(user, json)));
}

export const fetchUserData = user => dispatch => {
    var api = 'https://wind-bow.gomix.me/twitch-api';

    var cors = process.env.NODE_ENV === 'development' ?
        'http://localhost:3001'
    :
        'https://gordon2012-cors-anywhere.herokuapp.com';

    return Promise.all([
        dispatch(fetchUser(user, `${cors}/${api}`)),
        dispatch(fetchStream(user, `${cors}/${api}`))
    ]);
}
