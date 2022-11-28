import { UPDATE_SCORE } from "../type/profileType";

const initialState = {
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};
export default profileReducer;
