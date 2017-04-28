import {createStore} from "redux";
import {sampleReducer} from "../reducers";

const store = createStore(sampleReducer);

export default store;