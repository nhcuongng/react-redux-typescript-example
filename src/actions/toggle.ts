import { EReduxActionTypes, IReduxBaseAction } from "../reducers";

/**
 *  Đây là một action, và action này sẽ được ```dispatch``` tới ```reducer```
 * */
export function toggleMessage(isShowMessage: boolean): IReduxBaseAction {
  return {
    type: EReduxActionTypes.TOGGLE_MESSAGE,
    payload: isShowMessage,
  };
}
