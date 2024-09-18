import api from "@/config/api";
import * as actionTypes from "./ActionTypes"

export const addComment = (commentData) => {
    return async(dispatch) => {
        dispatch({type: actionTypes.ADD_COMMENT_REQUEST})
        try {
            const {data} = await api.post(`/api/comments/`, commentData);
            dispatch({type: actionTypes.ADD_COMMENT_SUCCESS, comment: data})
            console.log("comment created ", data)
        } catch (error) {
            console.log(error)
            dispatch({type: actionTypes.ADD_COMMENT_FAILURE, error: error.message})
        }
    }
}

export const deleteComment = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.DELETE_COMMENT_REQUEST })
        try {
            const { data } = await api.delete(`/api/comments/`);
            dispatch({ type: actionTypes.DELETE_COMMENT_SUCCESS, comment: id })
            console.log("comment by chat ", data)
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.DELETE_COMMENT_FAILURE, error: error.message })
        }
    }
}

export const fetchComments = (issueId) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_COMMENTS_REQUEST })
        try {
            const { data } = await api.get(`/api/comments/${issueId}`);
            dispatch({ type: actionTypes.FETCH_COMMENTS_SUCCESS, issueId, comments: data })
            console.log("comment by chat ", data)
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_COMMENTS_FAILURE, error: error.message })
        }
    }
}