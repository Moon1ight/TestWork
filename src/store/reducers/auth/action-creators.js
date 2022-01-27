import axios from 'axios'
import { OrdersActionCreators } from '../orders/action-creators'

export const AuthActionCreators = {
    setClient: (client) => ({ type: 'SET_CLIENT', payload: client }),
    setIsAuth: (auth) => ({ type: 'SET_AUTH', payload: auth }),
    setIsLoading: (payload) => ({ type: 'SET_IS_LOADING', payload }),
    login: (login, password) => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            // Имитация задержки
            setTimeout(async () => {
                const response = await axios.get('./clients.json')
                const mockClient = response.data.find(
                    (client) => client.login === login && client.password === password
                )
                if (mockClient) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('clientId', mockClient.id)
                    dispatch(AuthActionCreators.setClient(mockClient))
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(OrdersActionCreators.getOrders(mockClient.id))
                } else {
                    alert('Пользователь не найден')
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
        } catch (e) {
            console.log(e)
        }
    },
}
