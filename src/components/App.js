import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

function mapStateToProps(state) {
    return { status: state.isLogged }
}

var registerAction = { type: 'REGISTER' }
var logInAction = { type: 'LOGIN' }
var logOutAction = { type: 'LOGOUT' }

function mapDispatchToProps(dispatch) {
    return {
        register: function() {
            return dispatch(registerAction)
        },
        logIn: function() {
            return dispatch(logInAction)
        },
        logOut: function() {
            return dispatch(logOutAction)
        }
    }
}

class App extends Component {
    render() {
        return (
            <div className="App"></div>
        )
    }
}

var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
) (LoginPage)

export default connectedComponent
