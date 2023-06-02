import { combineReducers } from 'redux';
import bankReducer from './bankReducer'


//estou pegando todos meus reducers(se eu tivesse mais que 1) e combinando para exportar tudo de uma vez.
const reducers = combineReducers({
  bank: bankReducer
});

export default reducers

export type State = ReturnType<typeof reducers>