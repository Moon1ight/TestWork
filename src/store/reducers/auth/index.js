const initialState = {
    isAuth: false,
    isLoading: false,
    client: { login: '', password: '' },
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_AUTH':
            return { ...state, isAuth: action.payload, isLoading: false }

        case 'SET_CLIENT':
            return { ...state, client: action.payload }

        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.payload }

        default:
            return state
    }
}
