import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk'

// aqui é onde eu crio meus reducers, ou seja ele está chamando o combineReducers
// que por equanto só tem o bankReducer e o bankReducer tem o inicialState=0;
export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)