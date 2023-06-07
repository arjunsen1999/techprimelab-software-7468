import {
  project_isLoading,
  project_reset,
  project_isSuccess,
  project_isError,
  project_get_data,
  project_search,
  project_filter,
  project_page,
  project_total_page,
} from "./Project.actionTypes";

const initailState = {
  project_data: [],
  project_isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  search: "",
  filter: "",
  page: 1,
  total_page: 0,
};

export const projectReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case project_isLoading:
      return {
        ...state,
        project_isLoading: payload,
      };
    case project_total_page:
      return {
        ...state,
        total_page: payload,
      };
    case project_page:
      return {
        ...state,
        page: payload,
      };
    case project_filter:
      return {
        ...state,
        filter: payload,
      };

    case project_search:
      return {
        ...state,
        search: payload,
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
