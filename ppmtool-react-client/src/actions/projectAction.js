import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./type";

export const createProject = (project, history) => async dispatch => {
    try {
        await axios.post("/api/project", project);
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getProjects = () => async dispatch => {
    const response = await axios.get("/api/project/all");
    dispatch({
        type:GET_PROJECTS,
        payload: response.data
    });
}

export const getProject = (id, history) => async dispatch => {
    try {
        const response = await axios.get(`/api/project/${id}`);
        dispatch({
            type:GET_PROJECT,
            payload: response.data
        });
    } catch(err) {
        history.push("/dashboard")
    }

}

export const deleteProject = id => async dispatch => {
    await axios.delete(`/api/project/${id}`);
    dispatch({
        type: DELETE_PROJECT,
        payload: id
    })
}

