import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/clients/Login'
import Dashboard from '../pages/clients/Dashboard'
import ProductDetails from '../pages/clients/ProductDetails'

import LoginAdmin from '../pages/admins/Login'
import NewOffer from '../pages/admins/NewOffer'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/product-details/:offer_id" component={ProductDetails} />

            <Route path="/admin" component={LoginAdmin} exact />
            <Route path='/new-offer' component={NewOffer} />
        </Switch>
    )
}

export default Routes;