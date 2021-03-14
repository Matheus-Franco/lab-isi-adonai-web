import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/employees/Login'
import Dashboard from '../pages/employees/Dashboard'
import LoginAdmin from '../pages/admins/Login'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/admin" component={LoginAdmin} exact />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}

export default Routes;