import { Actions } from "../actions"

export interface State {
  hours: any[],
  usdMin: any[],
  usdMax: any[],
}

const INITIAL_STATE: State = {
  hours: [],
  usdMin: [],
  usdMax: [],
}

/* eslint-disable-next-line default-param-last */
export function hour(state: State = INITIAL_STATE, action: Actions): State {
  switch (action.type) {
    case "FETCH_BALANCE_HOURS_SUCCEEDED":
      return {
        hours: action.hours,
        usdMin: action.usdMin,
        usdMax: action.usdMax,
      }
    default:
      return state
  }
}
