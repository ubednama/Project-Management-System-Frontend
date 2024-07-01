import api from "@/config/api";
import * as actionTypes from "./ActionTypes"

export const fetchProjects = ({category, tags}) => {
    async(dispatch) => {
        dispatch({type: actionTypes.FETCH_PROJECTS_REQUEST})
        try {
            const {data} = await api.get(`/api/projects`, {params:{category, tags}});
            dispatch({type: actionTypes.FETCH_PROJECTS_SUCCESS, payload:data})
            console.log("all projects ",data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const searchProjects = (keyword) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.SEARCH_PROJECT_REQUEST })
        try {
            const { data } = await api.get(`/api/projects/search?keyword=${keyword}`);
            dispatch({ type: actionTypes.SEARCH_PROJECT_SUCCESS, payload: data })
            console.log("all projects ", data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const createProject = (projectData) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.CREATE_PROJECT_REQUEST })
        try {
            const { data } = await api.post(`/api/project/`, projectData);
            dispatch({ type: actionTypes.CREATE_PROJECT_SUCCESS, payload: data })
            console.log("all projects ", data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchProjectById = (id) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_PROJECT_BY_ID_REQUEST })
        try {
            const { data } = await api.get(`/api/project/`, id);
            dispatch({ type: actionTypes.FETCH_PROJECT_BY_ID_SUCCESS, payload: data })
            console.log("project for ",id , "is", data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteProjectById = (id) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.DELETE_PROJECT_REQUEST })
        try {
            const { data } = await api.delete(`/api/project/`,id);
            dispatch({ type: actionTypes.DELETE_PROJECT_SUCCESS, id })
            console.log("project for ", id, "deleted", data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const inviteToProject = ({email, projectId}) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.INVITE_TO_PROJECT_REQUEST })
        try {
            const { data } = await api.delete(`/api/project/${projectId}/invite`, {email, projectId});
            dispatch({ type: actionTypes.INVITE_TO_PROJECT_SUCCESS, data })
            console.log("invited ", email, "to project for ", projectId, "data", data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const acceptInvitation = ({ invitationToken, navigate }) => {
    async (dispatch) => {
        dispatch({ type: actionTypes.ACCEPT_INVITATION_REQUEST })
        try {
            const { data } = await api.get(`/api/project/accept_invitation`, {params: {token: invitationToken}});
            navigate("/project/" + data.projectId)
            dispatch({ type: actionTypes.ACCEPT_INVITATION_SUCCESS, data })
            console.log("accepted invitation", data)
        } catch (error) {
            console.log(error)
        }
    }
}