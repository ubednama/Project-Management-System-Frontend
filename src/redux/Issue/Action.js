import api from "@/config/api";
import * as actionTypes from "./ActionTypes"

export const fetchIssues = (id) => {
    async(dispatch) => {
        dispatch({type: actionTypes.FETCH_ISSUES_REQUEST})
        try {
            const {data} = await api.get(`/api/issues/project/${id}`);
            dispatch({type: actionTypes.FETCH_ISSUES_SUCCESS, issues: data})
            console.log("all issues ",data)
        } catch (error) {
            console.log(error)
            dispatch({type: actionTypes.FETCH_ISSUES_FAILURE, error: error.message})
        }
    }
}

export const fetchIssueById = (id) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST })
        try {
            const { data } = await api.get(`/api/issues/${id}`);
            dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS, issues: data })
            console.log("fetch issue by id ", data)
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE, error: error.message })
        }
    }
}

export const updateIssueStatus = ({id, status}) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST })
        try {
            const { data } = await api.put(`/api/issue/${id}/status/${status}`);
            dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS, issues: data })
            console.log("update issue status ", data)
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE, error: error.message })            
        }
    }
}

export const assignedUserToIssue = ({id, userId}) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST })
        try {
            const { data } = await api.put(`/api/issues/${id}/assignee/${userId}`);
            dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS, issues: data })
            console.log("assigned issue for ",id , "by", userId, "data", data)
        } catch (error) {
            console.log(error)
            dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE, error: error.message })
        }
    }
}