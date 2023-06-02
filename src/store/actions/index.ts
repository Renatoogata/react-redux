import { ActionType } from '../action-types'

//minhas actions para o typescript saber os tipos dos dados
interface DepositAction {
  type: ActionType.DEPOSIT
  payload: number
}

interface WithdrawAction {
  type: ActionType.WITHDRAW
  payload: number
}

interface BankruptAction {
  type: ActionType.BANKRUPT
}

export type Action = DepositAction | WithdrawAction | BankruptAction;