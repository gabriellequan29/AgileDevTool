import { SET_CURRENT_USER } from "../actions/constants";

const initialstate = {
  user: {},
  isValidToken: false,
};

const booleanActionPayload = (payload) => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isValidToken: booleanActionPayload(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
