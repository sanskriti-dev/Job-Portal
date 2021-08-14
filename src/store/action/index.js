import * as actionTypes from "./actionTypes";



export const authSuccess = (data) => {
    return {
      type: actionTypes.AUTH_SUCCESS,
      payload: data
    };
  };
  
 
  export const authLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    return {
      type: actionTypes.AUTH_LOGOUT,
    };
  };
  