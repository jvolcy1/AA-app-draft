import { createStore } from "redux";
import Reducer from "./reducer";
import data from "./data";

const store = createStore(Reducer, data);

export default store;
