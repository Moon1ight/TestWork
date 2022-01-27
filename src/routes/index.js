import React from 'react'
import LoginPage from '../pages/LoginPage/LoginPage'
import OrdersPage from '../pages/OrdersPage/OrdersPage'
import OrderDetailsPage from '../pages/OrderDetailsPage/OrderDetailsPage'

export const publicRoutes = [{ path: '/login', exact: true, component: LoginPage }]

export const privateRoutes = [
    { path: '/orders', exact: true, component: OrdersPage },
    { path: '/orders/:id', exact: true, component: OrderDetailsPage },
]
