import { createStore, combineReducers } from "redux";

import reducer from "./reducer";

const reducers = combineReducers({
  contentPage: reducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
