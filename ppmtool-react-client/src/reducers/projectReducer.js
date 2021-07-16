import { GET_PROJECTS, GET_PROJECT } from "../actions/type";

const initialstate = {
    projects: [],
    project: {}
}

export default function(state=initialstate, action) {
    switch(action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload
            }
        default:
            return state;
    }
}