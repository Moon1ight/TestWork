import axios from 'axios'

export const OrdersActionCreators = {
    setOrders: (orders) => ({ type: 'SET_ORDERS', payload: orders }),
    setIsLoading: (payload) => ({ type: 'SET_IS_LOADING', payload }),
    duplicateOrder: (duplicatedOrder) => ({ type: 'DUPLICATE_ORDER', duplicatedOrder }),
    cancelOrder: (orderId) => ({ type: 'CANCEL_ORDER', orderId }),

    getOrders: (clientId) => async (dispatch) => {
        try {
            dispatch(OrdersActionCreators.setIsLoading(true))
            // Имитация задержки
            setTimeout(async () => {
                const response = await axios.get('./orders.json')
                const mockOrders = response.data.filter((order) => order.client_id === clientId)

                if (mockOrders) {
                    dispatch(OrdersActionCreators.setOrders(mockOrders))
                } else {
                    alert('Заказы не обнаружены')
                }

                dispatch(OrdersActionCreators.setIsLoading(false))
            }, 1000)
        } catch (e) {
            console.log(e)
        }
    },
}
