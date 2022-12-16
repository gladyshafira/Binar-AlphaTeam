import axios from "../../utils/axios"
import { GET_LEADERBOARD } from "../type/leaderboardType"

export const getLeaderboard = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/game/1/leaderboard`)
    dispatch({
      type: GET_LEADERBOARD,
      leaderboard: data.data,
    })
  } catch (error) {
    console.log(error)
  }
}
