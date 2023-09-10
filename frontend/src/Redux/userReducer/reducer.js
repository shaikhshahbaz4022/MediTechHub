import { CATEGORY_FALURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, PRODUCT_FALURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";

const initState = {
    data: [],
    isLoading: false,
    isError: false,

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
        default:
            return state
    }
}