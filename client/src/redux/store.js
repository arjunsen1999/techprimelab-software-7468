import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/Auth.reducer";
import { projectReducer } from "./project/Project.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
