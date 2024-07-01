import { API_BASE_URL } from "@/config/api";
import { GET_USER_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_SUCCESS } from "./ActionTypes"
import axios from "axios";

export const signup = userData => {
    async(dispatch) => {
        dispatch({type:SIGNUP_REQUEST})
        try {
            const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
            if(data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                dispatch({type:SIGNUP_SUCCESS, payload:data})
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const login = userData => {
    async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST })
        try {
            const { data } = await axios.post(`${API_BASE_URL}/auth/login`, userData);
            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                dispatch({ type: LOGIN_SUCCESS, payload: data })
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const getUser = () => {
    async (dispatch) => {
        dispatch({ type: GET_USER_REQUEST })
        try {
            const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                dispatch({ type: GET_USER_SUCCESS, payload: data })
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const logout = () => async(dispatch) => {
    dispatch({ type: LOGOUT_REQUEST })
    localStorage.clear();
}