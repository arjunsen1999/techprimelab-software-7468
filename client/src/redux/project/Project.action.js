import {
  project_isLoading,
  project_reset,
  project_isSuccess,
  project_isError,
  project_get_data,
  project_search,
  project_filter,
  project_page,
  project_total_page
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
export const get_project = (search, page, filter) => async (dispatch) => {
  dispatch({ type: project_isLoading, payload: true });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/project?search=${search}&page=${page}&sort=${filter}`
    );
    dispatch({ type: project_get_data, payload: data.data.project });
    dispatch({type : project_total_page, payload : data.page})
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

export const handleChange = (value) => (dispatch) => {
  dispatch({ type: project_search, payload: value });
};

export const handleChangeFilter = (value) => (dispatch) => {
  dispatch({ type: project_filter, payload: value });
};

export const handlePage = (value) => (dispatch) =>{
  dispatch({ type: project_page, payload: value });
}
