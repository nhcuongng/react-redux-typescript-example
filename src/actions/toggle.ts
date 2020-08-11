import { EReduxToggleActionTypes, IReduxToggleAction } from "../reducers/toggle";

/**
 *  Đây là một action, và action này sẽ được ```dispatch``` tới ```reducer```
 * */
export function toggleMessage(isShowMessage: boolean): IReduxToggleAction {
  return {
    type: EReduxToggleActionTypes.TOGGLE_MESSAGE,
    payload: isShowMessage,
  };
}
