import { ActionReducerMap } from "@ngrx/store";
import { User } from "../users/models/user.model";
import * as reducer from '../store/app.reducer';

export interface MainState {
  app_state: reducer.AppState
}

export const reducers: ActionReducerMap<MainState> = {
  app_state: reducer.appReducer
}
