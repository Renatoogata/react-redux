import { ActionType } from "../action-types";
import { Action } from "../actions/index"

//estado inicial do saldo
const initalState = 0;

//meu reducer de banco (que vai maniputar o amount como se fosse um saldo)
const reducer = (state: number = initalState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      //poderia fazer implementações mais complexas caso necessário
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state
  }
}

export default reducer