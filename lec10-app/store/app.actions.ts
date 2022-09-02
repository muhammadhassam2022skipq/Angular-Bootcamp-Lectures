import { createAction, props } from "@ngrx/store";
import { User } from "../users/models/user.model";

export const tryLogin = createAction(
  '[RoutingBasic/Auth] Login_Success',
  props<{payload: {user: User}}>()
)
