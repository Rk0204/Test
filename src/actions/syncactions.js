import ActionTypes from "../constants/actionTypes";

export const gotProfile = data => ({
  type: ActionTypes.GOT_PROFILE,
  payload: data
});
