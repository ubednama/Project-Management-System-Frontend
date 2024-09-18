import * as actionTypes from "./ActionTypes"

const initialState = {
    user:null,
    loading:null,
    error:null,
    jwt:null,
    projectSize:0
}

export const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SIGNUP_REQUEST:
        case actionTypes.LOGIN_REQUEST:
        case actionTypes.GET_USER_REQUEST:
            return {...state, loading:true, error:null}
        
        case actionTypes.SIGNUP_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {...state, loading: false, error: null, jwt: action.payload.jwt}
        
        case actionTypes.GET_USER_SUCCESS:
            return { ...state, loading: false, error: null, user: action.payload }

        case actionTypes.LOGOUT_SUCCESS:
            return initialState;

        default:
            return state;
    }
}