import axios from "axios";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actionType";
const url = `https://meditechhub.onrender.com`
export const LoginPostData = (userInput) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST })
        let res = await axios.post(`${url}/user/login`, userInput)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data }) // action dispatcher
        return res.data
    } catch (e) {
        console.log(e)
        dispatch({ type: LOGIN_FAILURE })
        return e.response.data
    }


}

export const RegisterPostData = (userInput) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST })
        const res = await axios.post(`${url}/user/register`, userInput)
        dispatch({ type: REGISTER_SUCCESS })
        return res.data
    } catch (error) {
        console.log(error);
        dispatch({ type: REGISTER_FAILURE })
        return error.response.data
    }
}
//we have to use try catch only , because .then .catch is blocked Scoped

