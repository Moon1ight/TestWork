import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import AppRouter from './components/AppRouter'
import { AuthActionCreators } from './store/reducers/auth/action-creators'
import { OrdersActionCreators } from './store/reducers/orders/action-creators'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(AuthActionCreators.setClient({ clientId: localStorage.getItem('clientId' || '') }))
            dispatch(AuthActionCreators.setIsAuth(true))
            const clientId = Number(localStorage?.getItem('clientId'))
            dispatch(OrdersActionCreators.getOrders(clientId))
        }
    }, [])

    return (
        <div>
            <AppRouter />
        </div>
    )
}

export default App
