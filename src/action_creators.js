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

// export function requestUser(user) {
//     return {
//         type: 'REQUEST_USER',
//         user
//     }
// }

// export function receiveUser(user, json) {
//     return {
//         type: 'RECEIVE_USER',
//         user,
//         data: json,
//         receivedAt: Date.now()
//     }
// }
