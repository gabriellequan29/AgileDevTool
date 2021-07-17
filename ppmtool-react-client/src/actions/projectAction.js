import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT } from "./type";

export const createProject = (project, history) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:8080/api/project", project);
        history.push("/dashboard");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getProjects = () => async dispatch => {
    const response = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
        type:GET_PROJECTS,
        payload: response.data
    });
}

export const getProject = (id, history) => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:8080/api/project/${id}`);
        dispatch({
            type:GET_PROJECT,
            payload: response.data
        });
    } catch(err) {
        history.push("/dashboard")
    }

}

