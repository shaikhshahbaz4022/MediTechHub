import { CART_FALURE, CART_GET_FALURE, CART_GET_REQUEST, CART_GET_SUCCESS, CART_REQUEST, CART_SUCCESS, CATEGORY_FALURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, DECREMENT_FALURE, DECREMENT_REQUEST, DECREMENT_SUCCESS, DELETE_CART_FALURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, INCREMENT_FALURE, INCREMENT_REQUEST, INCREMENT_SUCCESS, PARTICULAR_FALURE, PARTICULAR_REQUEST, PARTICULAR_SUCCESS, PRODUCT_FALURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";

const initState = {
    data: [],
    isLoading: false,
    isError: false,
    particular: {},
    cart: []

}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST:
            return { ...state, isError: false, isLoading: true }
        case PRODUCT_SUCCESS:
            localStorage.setItem("length", Math.ceil(payload.length / 6))
            return { ...state, isError: false, isLoading: false, data: payload.data }
        case PRODUCT_FALURE:
            return { ...state, isError: true, isLoading: false }
        case CATEGORY_REQUEST:
            return { ...state, isLoading: true }
        case CATEGORY_SUCCESS:
            localStorage.setItem("length", Math.ceil(payload.length / 6))
            return { ...state, isLoading: false, data: payload }
        case CATEGORY_FALURE:
            return { ...state, isLoading: false, isError: true }
        case PARTICULAR_REQUEST:
            return { ...state, isLoading: true }
        case PARTICULAR_SUCCESS:
            return { ...state, isLoading: false, particular: payload }
        case PARTICULAR_FALURE:
            return { ...state, isLoading: false, isError: true }
        case CART_REQUEST:
            return { ...state, isLoading: true }
        case CART_SUCCESS:
            return { ...state, isLoading: false }
        case CART_FALURE:
            return { ...state, isLoading: false, isError: true }
        case CART_GET_REQUEST:
            return { ...state, isLoading: true }
        case CART_GET_SUCCESS:
            return { ...state, isLoading: false, cart: payload }
        case CART_GET_FALURE:
            return { ...state, isLoading: false, isError: true }
        case INCREMENT_REQUEST:
            return { ...state }
        case INCREMENT_SUCCESS:
            return { ...state, isLoading: false }
        case INCREMENT_FALURE:
            return { ...state, isLoading: false, isError: false }
        case DECREMENT_REQUEST:
            return { ...state }
        case DECREMENT_SUCCESS:
            return { ...state, isLoading: false }
        case DECREMENT_FALURE:
            return { ...state, isLoading: false, isError: false }
        case DELETE_CART_REQUEST:
            return { ...state }
        case DELETE_CART_SUCCESS:
            return { ...state, isLoading: false }
        case DELETE_CART_FALURE:
            return { ...state, isLoading: false, isError: false }


        default:
            return state
    }
}