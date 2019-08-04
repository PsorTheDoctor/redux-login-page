function loginPage(state, action) {
    if (state === undefined) {
        return { isLogged: false }
    }
    switch (action.type) {
        case 'REGISTER':
            return { isLogged: true }
        case 'LOGIN':
            return { isLogged: true }
        case 'LOGOUT':
            return { isLogged: false }
        default:
            return state
    }
}
export default loginPage
