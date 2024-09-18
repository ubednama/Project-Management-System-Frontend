import api from "@/config/api";
import * as actionTypes from "./ActionTypes"

export const fetchProjects = ({category, tags}) => {
    return async(dispatch) => {
        dispatch({type: actionTypes.FETCH_PROJECTS_REQUEST})
        // const tagsString = tags.join(',');
        try {
            const { data } = await api.get(`/api/projects`, { params: { category, tags }});
            dispatch({type: actionTypes.FETCH_PROJECTS_SUCCESS, payload: data})
            console.log("all projects ", data)
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_PROJECTS_FAILURE, payload: error.message });
            console.log("Error in fetchProjects",error)
        }
    }
}

export const searchProjects = (keyword) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.SEARCH_PROJECT_REQUEST })
        try {
            const { data } = await api.get(`/api/projects/search?keyword=${keyword}`);
            dispatch({ type: actionTypes.SEARCH_PROJECT_SUCCESS, payload: data })
            console.log("search projects ", data)
        } catch (error) {
            console.log("Error in fetchProjects", error)
        }
    }
}

export const createProject = (projectData) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.CREATE_PROJECT_REQUEST })
        try {
            const { data } = await api.post(`/api/projects`, projectData);
            dispatch({ type: actionTypes.CREATE_PROJECT_SUCCESS, payload: data })
        } catch (error) {
            console.log("Error in fetchProjects", error)
        }
    }
}

export const fetchProjectById = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_PROJECT_BY_ID_REQUEST })
        try {
            const { data } = await api.get(`/api/projects/${id}`);
            dispatch({ type: actionTypes.FETCH_PROJECT_BY_ID_SUCCESS, payload: data })
            console.log("project for ",id , "is", data)
        } catch (error) {
            console.log("Error in fetchProjectById", error)
        }
    }
}

export const deleteProjectById = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.DELETE_PROJECT_REQUEST })
        try {
            const { data } = await api.delete(`/api/projects/${id}`);
            dispatch({ type: actionTypes.DELETE_PROJECT_SUCCESS, id })
        } catch (error) {
            console.log("Error in deleteProjectById", error)
        }
    }
}

export const inviteToProject = ({email, projectId}) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.INVITE_TO_PROJECT_REQUEST })
        try {
            const { data } = await api.delete(`/api/projects${projectId}/invite`, {email, projectId});
            dispatch({ type: actionTypes.INVITE_TO_PROJECT_SUCCESS, data })
            console.log("invited ", email, "to project for ", projectId, "data", data)
        } catch (error) {
            console.log("Error in inviteToProject", error)
        }
    }
}

export const acceptInvitation = ({ invitationToken, navigate }) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.ACCEPT_INVITATION_REQUEST })
        try {
            const { data } = await api.get(`/api/projects/accept_invitation`, {params: {token: invitationToken}});
            navigate("/project/" + data.projectId)
            dispatch({ type: actionTypes.ACCEPT_INVITATION_SUCCESS, data })
            console.log("accepted invitation", data)
        } catch (error) {
            console.log("Error in acceptInvitation", error)
        }
    }
}