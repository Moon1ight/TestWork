const initialState = {
    isLoading: false,
    orders: [],
}

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ORDERS':
            return { ...state, orders: action.payload, isLoading: false }

        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.payload }

        case 'CANCEL_ORDER':
            return { ...state, orders: state.orders.filter((o) => o.id !== action.orderId) }

        case 'DUPLICATE_ORDER': {
            let newOrder = action.duplicatedOrder
            return { ...state, orders: [...state.orders, newOrder] }
        }

        default:
            return state
    }
}
