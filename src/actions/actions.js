function register(user) {
    return {
        type: 'REGISTER',
        user: user
    }
}

function logIn(user) {
    return {
        type: 'LOGIN',
        user: user
    }
}

function logOut(user) {
    return {
        type: 'LOGOUT',
        user: user
    }
}