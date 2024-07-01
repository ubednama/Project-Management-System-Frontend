import * as actionTypes from "./ActionTypes"

const initialState = {
    userSubscription:null,
    loading:null,
    error:null,
}

export const subscriptionReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USER_SUBSCRIPTION_REQUEST:
        case actionTypes.UPGRADE_SUBSCRIPTION_REQUEST:
            return {...state, loading:true, error:null}
        
        case actionTypes.GET_USER_SUBSCRIPTION_SUCCESS:
            return {...state, loading: false, error: null, userSubscription: action.payload}
        case actionTypes.UPGRADE_SUBSCRIPTION_SUCCESS:
            return {...state, loading: false, error: null, userSubscription: action.payload}
        case actionTypes.GET_USER_SUBSCRIPTION_FAILURE:
        case actionTypes.UPGRADE_SUBSCRIPTION_FAILURE:
            return {...state, loading: false, error: null, error: action.error}
        default:
            state;
    }
}