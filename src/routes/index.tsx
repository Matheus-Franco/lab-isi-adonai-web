import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/employees/Login'
import Dashboard from '../pages/employees/Dashboard'

import LoginAdmin from '../pages/admins/Login'
import NewOffer from '../pages/admins/NewOffer'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} />

            <Route path="/admin" component={LoginAdmin} exact />
            <Route path='/new-offer' component={NewOffer} />
        </Switch>
    )
}

export default Routes;