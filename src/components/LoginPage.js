import React, { Component } from 'react'

class LoginPage extends Component {
    render() {
        if (!this.props.status) {
            return (
                <div className="LoginPage">
                    <button onClick={ this.props.register }>
                        Register
                    </button>
                    <button onClick={ this.props.logIn }>
                        Login
                    </button>
                    <span>Wylogowałeś się</span>
                </div>
            )
        } else {
            return (
                <div className="LoginPage">
                    <button onClick={ this.props.logOut }>
                        Logout
                    </button>
                    <span>Zalogowałeś się</span>
                </div>
            )
        }
    }
}
export default LoginPage
