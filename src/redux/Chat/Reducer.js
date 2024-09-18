import * as actionTypes from "./ActionTypes"

const initialState = {
    messages: [],
    loading: false,
    error: null,
    chat: null,
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MESSAGES_REQUEST:
        case actionTypes.SEND_MESSAGE_REQUEST:
        case actionTypes.FETCH_CHAT_MESSAGES_REQUEST:
            return { ...state, loading: true, error: null }
        case actionTypes.FETCH_MESSAGES_SUCCESS:
        case actionTypes.FETCH_CHAT_MESSAGES_SUCCESS:
            return { ...state, loading: false, error: null, messages: action.message }
        case actionTypes.SEND_MESSAGE_SUCCESS:
            return { ...state, loading: false, error: null, messages: [...state.messages, action.message] }
        case actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return { ...state, loading: false, error: null, chat: action.chat }
        case actionTypes.FETCH_MESSAGES_FAILURE:
        case actionTypes.SEND_MESSAGE_FAILURE:
        case actionTypes.FETCH_CHAT_MESSAGES_FAILURE:
            return { ...state, loading: false, error: null, error: action.error }
        default:
            return state
    }
}