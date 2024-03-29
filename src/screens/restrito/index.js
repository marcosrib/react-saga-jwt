
import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link, Route } from 'react-router-dom'
import Home from './Home'
import Runs from './Runs'
import Header from './elements/Header'
const Restrito = props => {
    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <h1>Restrito</h1>
            <Header />
                <Route exact path={`${props.match.path}/`} component={Home} />
                <Route path={`${props.match.path}/runs`} component={Runs} />
            
        </div>

    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, {})(Restrito)