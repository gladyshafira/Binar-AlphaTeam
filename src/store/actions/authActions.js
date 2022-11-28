import axios from "../../utils/axios";
import { GET_PROFILE } from "../type/authType";

export const getProfile = () => async (dispatch) => {
  try {
    const response = await axios.get("/pokemon/1");
    dispatch({
      type: GET_PROFILE,
      profile: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const doLogin = (body) => async () => {
  try {
    const { data } = await axios.post("/login", body);
    localStorage.setItem("_q", data.token);
    window.location.reload;
  } catch (error) {}
};
