import axios from "../../utils/axios"
import { UPDATE_SCORE } from "../type/scoreType"

export const updateScore = () => async (dispatch) => {
  try {
    const response = await axios.post("/score", body)
    dispatch({
      type: UPDATE_SCORE,
      score: response.data,
    })
  } catch (error) {
    console.log(error)
  }
}
