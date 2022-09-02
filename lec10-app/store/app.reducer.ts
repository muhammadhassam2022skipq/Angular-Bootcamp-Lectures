import { Action, createReducer, on } from "@ngrx/store"
import { User } from "../users/models/user.model"
//import { AppState } from "./app.state"
import * as AppActions from './app.actions';

export interface AppState {
  user_state: User
}
const initialState: AppState = {
  user_state: new User()
}

export function appReducer (state: AppState | undefined, action: Action) {
  console.log('appReducer');
  return _authReducer(state, action);
}

const _authReducer = createReducer(
  initialState,
  on(AppActions.tryLogin, (state, {payload}) => {
    console.log('current state', state);
      return {
          ...state,
          ...payload
      }
  })
)

export function reducer(state: AppState | undefined, action: Action) {
  console.log('reducer');
  return appReducer(state, action);
}
