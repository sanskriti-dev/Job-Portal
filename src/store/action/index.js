import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (data) => {
    return {
      type: actionTypes.AUTH_SUCCESS,
      payload: data
    };
  };
  
  export const authFail = (error) => {
    return {
      type: actionTypes.AUTH_FAIL,
      error: error,
    };
  };
  export const authLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    return {
      type: actionTypes.AUTH_LOGOUT,
    };
  };
  