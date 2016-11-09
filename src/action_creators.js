// Action Creators

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


// Actions

export const fetchUserData = user => dispatch => {
    dispatch(requestUser(user));

    var url = `https://wind-bow.hyperdev.space/twitch-api/users/${user}`;

    var cors = process.env.NODE_ENV === 'development' ?
        `http://localhost:3001/${url}`
    :
        `https://gordon2012-cors-anywhere.herokuapp.com/${url}`;

    return fetch(cors)
        .then(res => res.json())
        .then(json => dispatch(receiveUser(user, json)));
}
