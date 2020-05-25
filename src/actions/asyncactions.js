import { makeAsyncRequest } from "../constants/request";
import ActionTypes from "../constants/actionTypes";
import * as syncActions from "./syncactions";
import AppConstants from "../constants/appConstants";
import { Alert, message } from "antd";

export const getProfile = () => dispatch => {
  makeAsyncRequest("get", `${AppConstants.baseURL}`)
    .then(resp => {
      console.log("result", resp.data);
      dispatch(syncActions.gotProfile(resp.data));
    })
    .catch(err => {
      message.error("Not found, Please try agaim", 5);
    });
};
