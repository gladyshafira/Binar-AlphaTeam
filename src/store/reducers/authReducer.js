import { GET_PROFILE } from '../type/authType'

const initialState = {
  profile: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state
  }
}
export default authReducer
