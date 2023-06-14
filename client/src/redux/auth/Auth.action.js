import axios from "axios";
import {
  user_login_isLoading,
  user_login_isSuccess,
  user_login_isError,
} from "./Auth.actionTypes";
import notification from "../../Toast";

export const login = (user_login_data) => async (dispatch) => {
  dispatch({ type: user_login_isLoading, payload: true });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/auth/login`,
      user_login_data
    );
    dispatch({ type: user_login_isLoading, payload: false });
    notification("success", data.message)
    dispatch({
      type: user_login_isSuccess,
      payload: { msg: data.message, user: { token: data.token } },
    });
  } catch (error) {
    dispatch({ type: user_login_isLoading, payload: false });
    notification("error", error.response.data.message)
    dispatch({ type: user_login_isError, payload: error.response.data.message });
  }
};
