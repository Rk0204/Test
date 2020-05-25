import ActionTypes from "../constants/actionTypes";
import initialState from "../stores/initialState";

export default (state = initialState.home, action) => {
  switch (action.type) {
    case ActionTypes.GOT_PROFILE:
      return {
        ...state,
        profileData: action.payload.data
      };
    default:
      return state;
  }
};
