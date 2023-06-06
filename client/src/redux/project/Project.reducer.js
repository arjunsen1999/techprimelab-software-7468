import {
  project_isLoading,
  project_reset,
  project_isSuccess,
  project_isError,
  project_get_data,
} from "./Project.actionTypes";

const initailState = {
  project_data: [],
  project_isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const projectReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case project_isLoading:
      return {
        ...state,
        project_isLoading: payload,
      };

    case project_isError:
      return {
        ...state,
        isError: true,
        message: payload,
      };
    case project_isSuccess:
      return {
        ...state,
        isSuccess: true,
        message: payload.msg,
      };
    case project_reset:
      return {
        ...state,
        isError: false,
        isSuccess: false,
        message: "",
      };
    case project_get_data:
      return {
        ...state,
        project_data: payload,
      };

    default:
      return state;
  }
};
