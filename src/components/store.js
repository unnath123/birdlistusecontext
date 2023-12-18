import { combineReducers, createStore } from "redux";
import CounterReducer from "./redux/reducer/CounterReducer";
import TodoReducer from "./redux/reducer/TodoReducer";


const reducers = combineReducers(
    {
        counter:CounterReducer,
        todos:TodoReducer
    }
)

const store = createStore(reducers)

export default store