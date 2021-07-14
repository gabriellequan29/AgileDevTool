import { GET_PROJECTS } from "../actions/type";

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
        default:
            return state;
    }
}