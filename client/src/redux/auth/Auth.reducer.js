import {
  user_login_isLoading,
  user_login_reset,
  user_login_isSuccess,
  user_login_isError,
} from "./Auth.actionTypes";

let user = JSON.parse(localStorage.getItem("userData")) || false;

const initaialState = {
  user,
  User_isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const authReducer = (state = initaialState, { type, payload }) => {
  switch (type) {
    case user_login_isLoading:
      return {
        ...state,
        User_isLoading: payload,
      };

    case user_login_isError:
      return {
        ...state,
        isError: true,
        message: payload,
      };

    case user_login_isSuccess:
      localStorage.setItem("userData", JSON.stringify(payload.user));
      return {
        ...state,
        isSuccess: true,
        message: payload.msg,
        user: payload.user,
      };

    case user_login_reset:
      return {
        ...state,
        isError: false,
        isSuccess: false,
        message: "",
      };

    default:
      return state;
  }
};
