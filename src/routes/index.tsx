import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/employees/Login'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
        </Switch>
    )
}

export default Routes;