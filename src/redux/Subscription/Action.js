import api from "@/config/api";
import * as actionTypes from "./ActionTypes"

export const getSubscription = () => {
    async(dispatch) => {
        dispatch({type: actionTypes.GET_USER_SUBSCRIPTION_REQUEST})
        try {
            const {data} = await api.get(`api/subscription/user`);
            dispatch({type: actionTypes.GET_USER_SUBSCRIPTION_SUCCESS, payload: data})
            console.log("user subscription ",data)
        } catch (error) {
            console.log(error)
            dispatch({type: actionTypes.GET_USER_SUBSCRIPTION_FAILURE, error: error.message}) 
        }
    }
}

export const upgradeSubscription = ({planType}) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.UPGRADE_SUBSCRIPTION_REQUEST })
        try {
            const { data } = await api.patch(`/api/subscription/upgrade`, null, {params: {planType: planType}});
            dispatch({ type: actionTypes.UPGRADE_SUBSCRIPTION_SUCCESS, payload: data })
            console.log("upgraded subscription ", data)
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.UPGRADE_SUBSCRIPTION_FAILURE, error: error.message })
        }
    }
}