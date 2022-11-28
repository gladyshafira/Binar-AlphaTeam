import axios from "../../utils/axios";
import { GET_PROFILE } from "../type/authType";
import toast from "react-toastify";
import Router from "next/router";

export const getProfile = () => async (dispatch) => {
  try {
    const response = await axios.get(`/user/${username}`);
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
    // window.location.reload;
    Router.push("/");
  } catch (error) {
    console.log(error);
  }
};
