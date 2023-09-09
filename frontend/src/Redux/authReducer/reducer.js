import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType";

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
        default:
            return state
    }
} 