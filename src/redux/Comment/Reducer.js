import * as actionTypes from "./ActionTypes"

const initialState = {
    comments: [],
    loading: false,
    error: null,
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT_REQUEST:
        case actionTypes.DELETE_COMMENT_REQUEST:
        case actionTypes.FETCH_COMMENTS_REQUEST:
            return { ...state, loading: true, error: null }
        case actionTypes.ADD_COMMENT_SUCCESS:
            return { ...state, loading: false, error: null, comments: [...state.comments, action.comment] }
        case actionTypes.DELETE_COMMENT_SUCCESS:
            return { ...state, loading: false, error: null, comments: state.comments.filter(comment => comment.id !== action.commentId) }
        case actionTypes.FETCH_COMMENTS_SUCCESS:
            return { ...state, loading: false, error: null, comments: action.comments }
        case actionTypes.ADD_COMMENT_FAILURE:
        case actionTypes.DELETE_COMMENT_FAILURE:
        case actionTypes.FETCH_COMMENTS_FAILURE:
            return { ...state, loading: false, error: null, error: action.error }
        default:
            return state
    }
}