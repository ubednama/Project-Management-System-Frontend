import * as actionTypes from "./ActionTypes";

const initialState = {
    projects: [],
    loading: true,
    error: null,
    projectDetails: null,
    searchProjects: []
};

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PROJECTS_REQUEST:
        case actionTypes.CREATE_PROJECT_REQUEST:
        case actionTypes.DELETE_PROJECT_REQUEST:
        case actionTypes.ACCEPT_INVITATION_REQUEST:
        case actionTypes.INVITE_TO_PROJECT_REQUEST:
            return { ...state, loading: true, error: null };
        case actionTypes.FETCH_PROJECTS_SUCCESS:
            return { ...state, loading: false, error: null, projects: action.payload };
        case actionTypes.SEARCH_PROJECT_SUCCESS:
            return { ...state, loading: false, error: null, searchProjects: action.payload };
        case actionTypes.CREATE_PROJECT_SUCCESS:
            return { ...state, loading: false, error: null, projects: [...state.projects, action.payload] };
        case actionTypes.FETCH_PROJECT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, projectDetails: action.payload };
        case actionTypes.DELETE_PROJECT_SUCCESS:
            return { ...state, loading: false, error: null, projects: state.projects.filter(project => project.id !== action.projectId) };
        case actionTypes.FETCH_PROJECTS_FAILURE:
            return { ...state, loading: false, error: action.payload, projects: [] };
        default:
            return state;
    }
};