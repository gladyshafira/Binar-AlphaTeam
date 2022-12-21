import axios from "../../utils/axios";
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../type/userType";
import Router from "next/router";
import { toast } from "react-toastify";

export const updateProfile = (body) => async () => {
  try {
    await axios.put("/user/me/update", body);
    toast.success("Update profile success");

    window.location.reload();
    Router.push("/profile/me");
  } catch (error) {
    toast.error(error.message);
  }
};
