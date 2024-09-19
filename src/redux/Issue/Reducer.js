// @/redux/Issue/Reducer.js
import * as actionTypes from "./ActionTypes";

const initialState = {
    issues: [],
    loading: true,
    error: null,
    issueDetails: null,
};

export const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ISSUES_REQUEST:
        case actionTypes.CREATE_ISSUE_REQUEST:
        case actionTypes.DELETE_ISSUE_REQUEST:
        case actionTypes.FETCH_ISSUES_BY_ID_REQUEST:
        case actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST:
        case actionTypes.UPDATE_ISSUE_STATUS_REQUEST:
            return { ...state, loading: true, error: null };
        case actionTypes.FETCH_ISSUES_SUCCESS:
            return { ...state, loading: false, error: null, issues: action.issues };
        case actionTypes.FETCH_ISSUES_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, issueDetails: action.issueDetails };
        case actionTypes.UPDATE_ISSUE_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                issueDetails: {
                    ...state.issueDetails,
                    status: action.payload.status,
                },
            };
        case actionTypes.CREATE_ISSUE_SUCCESS:
            return { ...state, loading: false, error: null, issues: [...state.issues, action.issue] };
        case actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS:
            return { ...state, loading: false, error: null, issues: state.issues.map(issue => issue.id === action.issueId ? action.issue : issue) };
        case actionTypes.DELETE_ISSUE_SUCCESS:
            return { ...state, loading: false, error: null, issues: state.issues.filter(issue => issue.id !== action.issueId) };
        case actionTypes.FETCH_ISSUES_FAILURE:
        case actionTypes.CREATE_ISSUE_FAILURE:
        case actionTypes.DELETE_ISSUE_FAILURE:
        case actionTypes.FETCH_ISSUES_BY_ID_FAILURE:
        case actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE:
        case actionTypes.UPDATE_ISSUE_STATUS_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};