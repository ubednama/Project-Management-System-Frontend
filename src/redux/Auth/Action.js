import { API_BASE_URL } from "@/config/api";
import * as actionTypes from "./ActionTypes"
import axios from "axios";

export const signup = userData => {
    return async(dispatch) => {
        dispatch({type: actionTypes.SIGNUP_REQUEST})
        try {
            const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
            if(data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                dispatch({type: actionTypes.SIGNUP_SUCCESS, payload:data})
            }
        } catch (error) {
            console.log("Error in signup",error)
            dispatch({ type: actionTypes.SIGNUP_FAILURE, payload: error.message });
        }
    }
}

export const login = userData => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.LOGIN_REQUEST })
        try {
            const { data } = await axios.post(`${API_BASE_URL}/auth/login`, userData);
            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: data })
                dispatch(getUser());
            } else {
                dispatch({ type: actionTypes.LOGIN_FAILURE, payload: "No JWT in response" })
            }
        } catch (error) {
            console.log("Error in login", error)
            dispatch({ type: actionTypes.LOGIN_FAILURE, payload: error.message })
        }
    }
}

export const getUser = () => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.GET_USER_REQUEST })
        try {
            const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: data })
        } catch (error) {
            console.log("Error in getUser", error)
            dispatch({ type: actionTypes.GET_USER_FAILURE, payload: error.message })
        }
    }
}

export const logout = () => async(dispatch) => {
    dispatch({ type: actionTypes.LOGOUT_SUCCESS })
    localStorage.clear();
}