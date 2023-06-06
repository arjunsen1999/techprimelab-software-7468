import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/Auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);