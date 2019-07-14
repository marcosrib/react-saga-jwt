import React from 'react'
import ActionCreators from './redux/actionCreators'
import { connect } from 'react-redux'
import logo from './logo.svg';
const Header = props => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signin: (email, passwd) => ActionCreators.signinRequest(email, passwd)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
