import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, id) => {
    return {
      type: actionTypes.AUTH_SUCCESS,
      token: token,
      userId: id,
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
  