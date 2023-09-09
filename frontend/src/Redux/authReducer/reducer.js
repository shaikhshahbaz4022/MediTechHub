import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actionType";

const initState = {
    dataLogin: {},
    isLoading: false,
    isError: false,
    isAuth: false
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true, }
        case LOGIN_SUCCESS:
            localStorage.setItem('userDetails', JSON.stringify({ token: payload.token, user: payload.user }))
            return { ...state, isLoading: false, dataLogin: payload, isAuth: true }
        case LOGIN_FAILURE:
            return { ...state, isError: true, isLoading: false }
        case REGISTER_REQUEST:
            return { ...state, isLoading: true, isError: false }
        case REGISTER_SUCCESS:
            return { ...state, isLoading: false, isError: false }
        case REGISTER_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
} 