import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./constants";
import setJWTToken from "../components/Utils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createUser = (user, history) => async (dispatch) => {
  try {
    await axios.post("/api/users/register", user);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const login = (Loginrequest) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/login", Loginrequest);
    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    setJWTToken(token);
    const decoded = jwt_decode(token);
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
}
