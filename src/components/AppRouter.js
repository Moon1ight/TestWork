import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes/'

const AppRouter = () => {
    const { isAuth } = useSelector((state) => state.auth)

    return isAuth ? (
        <Switch>
            {privateRoutes.map((route) => (
                <Route path={route.path} component={route.component} exact={route.exact} key={route.path} />
            ))}
            <Redirect to="/orders" />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map((route) => (
                <Route path={route.path} component={route.component} exact={route.exact} key={route.path} />
            ))}
            <Redirect to="/login" />
        </Switch>
    )
}

export default AppRouter
