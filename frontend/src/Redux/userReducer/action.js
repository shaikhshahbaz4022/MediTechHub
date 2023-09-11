import { CART_FALURE, CART_GET_FALURE, CART_GET_REQUEST, CART_GET_SUCCESS, CART_REQUEST, CART_SUCCESS, CATEGORY_FALURE, CATEGORY_REQUEST, CATEGORY_SUCCESS, DECREMENT_FALURE, DECREMENT_REQUEST, DECREMENT_SUCCESS, DELETE_CART_FALURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, INCREMENT_FALURE, INCREMENT_REQUEST, INCREMENT_SUCCESS, PARTICULAR_FALURE, PARTICULAR_REQUEST, PARTICULAR_SUCCESS, PRODUCT_FALURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";
import axios from 'axios'
const url = `https://meditechhub.onrender.com`
export const getData = (page) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.get(`${url}/product/paginate?page=${page}&limit=6`)
        .then((data) => {
            console.log(data);
            dispatch({ type: PRODUCT_SUCCESS, payload: data.data })
        })
        .catch((e) => {
            console.log(e);
            dispatch({ type: PRODUCT_FALURE })
        })
}

export const getCategory = (category) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_REQUEST })
        let res = await axios.get(`${url}/product/filter?category=${category}`)
        dispatch({ type: CATEGORY_SUCCESS, payload: res.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CATEGORY_FALURE })
    }
}

export const getParticular = (id) => async (dispatch) => {
    try {
        dispatch({ type: PARTICULAR_REQUEST })
        const res = await axios.get(`${url}/product/byid/${id}`)
        dispatch({ type: PARTICULAR_SUCCESS, payload: res.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: PARTICULAR_FALURE })
    }

}

export const addToCart = (id, token) => async (dispatch) => {



    dispatch({ type: CART_REQUEST })
    try {
        let res = await axios.post(`${url}/cart/create/${id}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: CART_SUCCESS })
        return res.data

    } catch (error) {
        console.log(error);
        dispatch({ type: CART_FALURE })
        return error.response.data
    }
}

export const getCartData = (token) => async (dispatch) => {
    try {
        dispatch({ type: CART_GET_REQUEST })
        const res = await axios.get(`${url}/cart/get`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: CART_GET_SUCCESS, payload: res.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CART_GET_FALURE })
    }
}

export const IncrementProd = (id, token) => async (dispatch) => {
    try {
        dispatch({ type: DECREMENT_REQUEST })
        const res = await axios.patch(`${url}/cart/inc/${id}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: DECREMENT_SUCCESS })
        return res.data
    } catch (error) {
        console.log(error);
        dispatch({ type: DECREMENT_FALURE })
        return error.response.data
    }

}

export const DecrementProd = (id, token) => async (dispatch) => {
    try {
        dispatch({ type: INCREMENT_REQUEST })
        const res = await axios.patch(`${url}/cart/desc/${id}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: INCREMENT_SUCCESS })
        return res.data
    } catch (error) {
        console.log(error);
        dispatch({ type: INCREMENT_FALURE })
        return error.response.data
    }

}
export const DeleteCartProd = (id, token) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_CART_REQUEST })
        const res = await axios.delete(`${url}/cart/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: DELETE_CART_SUCCESS })
        return res.data
    } catch (error) {
        console.log(error);
        dispatch({ type: DELETE_CART_FALURE })
        return error.response.data
    }

}