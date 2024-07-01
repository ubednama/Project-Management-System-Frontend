import api from "@/config/api";
import * as actionTypes from "./ActionTypes"

export const sendMessage = (messageData) => {
    async(dispatch) => {
        dispatch({type: actionTypes.SEND_MESSAGE_REQUEST})
        try {
            const response = await api.post(`/api/messages/send/`, messageData);
            dispatch({type: actionTypes.SEND_MESSAGE_SUCCESS, message: response.data})
            console.log("all messages ",data)
        } catch (error) {
            console.log(error)
            dispatch({type: actionTypes.SEND_MESSAGE_FAILURE, message: error})
        }
    }
}

export const fetchChatByProject = (id) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST })
        try {
            const { data } = await api.get(`/api/project/${id}/chat`);
            dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS, chat: data })
            console.log("message by chat ", data)
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE, error: error.message })
        }
    }
}

export const fetchChatMessages = ({projectId, chatId}) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST })
        try {
            const { data } = await api.get(`/api/project/${projectId}/chat/${chatId}`);
            dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS, chatId, messages: data })
            console.log("message by chat ", data)
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_FAILURE, error: error.message })
        }
    }
}