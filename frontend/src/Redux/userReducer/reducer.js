import { PRODUCT_FALURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";

const initState = {
    data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST:
            return { ...state, isError: false, isLoading: true }
        case PRODUCT_SUCCESS:
            return { ...state, isError: false, isLoading: false, data: payload }
        case PRODUCT_FALURE:
            return { ...state, isError: true, isLoading: false }
        default:
            return state
    }
}