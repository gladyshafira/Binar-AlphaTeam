import axios from "../../utils/axios";
import { UPDATE_SCORE } from "../type/profileType";

export const updateScore = () => async (dispatch) => {
  try {
    const response = await axios.post("/score", body);
    dispatch({
      type: UPDATE_SCORE,
      profile: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
