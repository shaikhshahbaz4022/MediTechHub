import axios from "axios";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";
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
//we have to use try catch only , because .then .catch is blocked Scoped