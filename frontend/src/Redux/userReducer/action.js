import { PRODUCT_FALURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";
import axios from 'axios'
const url = `https://meditechhub.onrender.com`
export const getData = () => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.get(`${url}/product/`)
        .then((data) => {
            console.log(data);
            dispatch({ type: PRODUCT_SUCCESS, payload: data.data })
        })
        .catch((e) => {
            console.log(e);
            dispatch({ type: PRODUCT_FALURE })
        })
}