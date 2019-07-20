
import React from 'react'
import { Route, Link } from 'react-router-dom'

const Home = props => <h1>Home admin</h1>
const Users = props => <h1>Users admin</h1>
const Admin = props => {
    return (
        <div>
            <h1>Admin</h1>
            <p>
            <Link to='/admin'>Home</Link>
            <Link to='/admin/users'>Users</Link>
            </p>
            <div>
                <Route exact path={`${props.match.path}/`} component={Home} />
                <Route path={`${props.match.path}/users`} component={Users} />
            </div>
        </div>

    )
}

export default Admin