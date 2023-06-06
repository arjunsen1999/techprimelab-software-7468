import {
  project_isLoading,
  project_reset,
  project_isSuccess,
  project_isError,
  project_get_data,
} from "./Project.actionTypes";
import axios from "axios";
import notification from "../../Toast";

// post project
export const create_project = (formData) => async (dispatch) => {
  dispatch({ type: project_isLoading, payload: true });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/project`,
      formData
    );
    dispatch({ type: project_isLoading, payload: false });
    notification("success", data.message);
  } catch (error) {
    dispatch({ type: project_isLoading, payload: false });
    notification("error", error.response.data.message);
  }
};

// get all project data
export const get_project = () => async (dispatch) => {
  dispatch({ type: project_isLoading, payload: true });
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/project`);
    dispatch({ type: project_get_data, payload: data.data.project });
    dispatch({ type: project_isLoading, payload: false });
  } catch (error) {
    dispatch({ type: project_isLoading, payload: false });
  }
};

export const update_status = (status, id) => async (dispatch) => {
  dispatch({ type: project_isLoading, payload: true });
  try {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_API}/project/${id}`,
      { status }
    );
    dispatch({ type: project_isLoading, payload: false });
    dispatch({ type: project_isSuccess, payload: { msg: data.message } });
  } catch (error) {
    console.log(error);
    dispatch({ type: project_isLoading, payload: false });
  }
};
