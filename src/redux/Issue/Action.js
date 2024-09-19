import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const createIssue = (issueData) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST });
        try {
            const { data } = await api.post(`/api/issues`, issueData);
            dispatch({ type: actionTypes.CREATE_ISSUE_SUCCESS, issue: data });
            dispatch(fetchIssues(issueData.projectId));
        } catch (error) {
            console.error("Error creating issue:", error);
            dispatch({ type: actionTypes.CREATE_ISSUE_FAILURE, error: error.message });
        }
    };
};

export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
        try {
            const { data } = await api.get(`/api/issues/project/${id}`);
            dispatch({ type: actionTypes.FETCH_ISSUES_SUCCESS, issues: data });
        } catch (error) {
            console.log(error);
            dispatch({ type: actionTypes.FETCH_ISSUES_FAILURE, error: error.message });
        }
    };
};

export const fetchIssueById = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST });
        try {
            const { data } = await api.get(`/api/issues/${id}`);
            dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS, issueDetails: data });
            console.log("fetch issue by id ", data);
        } catch (error) {
            console.log(error);
            dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE, error: error.message });
        }
    };
};

export const updateIssueStatus = (id, status) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
        try {
            await api.put(`/api/issues/${id}/status/${status}`);
            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
                payload: { id, status },
            });
        } catch (error) {
            console.log(error);
            dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE, error: error.message });
        }
    };
};


export const assignIssueToUser = ({ id, userId }) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST });
        try {
            const { data } = await api.put(`/api/issues/${id}/assignee/${userId}`);
            dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS, issues: data });
            console.log("assigned issue for ", id, "by", userId, "data", data);
        } catch (error) {
            console.log(error);
            dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE, error: error.message });
        }
    };
};

export const deleteIssueById = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
        try {
            const { data } = await api.delete(`/api/issues/${id}`);
            dispatch({ type: actionTypes.DELETE_ISSUE_SUCCESS, issueId: id });
            console.log("delete issue by id ", data);
        } catch (error) {
            console.log(error);
            dispatch({ type: actionTypes.DELETE_ISSUE_FAILURE, error: error.message });
        }
    };
};
