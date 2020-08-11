import { IToggleState, IReduxToggleAction, EReduxToggleActionTypes } from './type';

/**
 * Khởi tạo state ban đầu cho app
 */
export const initialState: IToggleState = {
  showMessage: false
};


export function toggleReducer(
  state: IToggleState = initialState,
  action: IReduxToggleAction
) {
  switch (action.type) {
    case EReduxToggleActionTypes.TOGGLE_MESSAGE:
      /**
       * Nên nhớ redux là ```immutable``` cho nên sẽ trả về một state mới
       */
      return { ...state, showMessage: action.payload };
    default:
      return state;
  }
}