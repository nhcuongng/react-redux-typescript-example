/**
 * Type định nghĩa cho state của app
 */
export interface AppState {
  showMessage: boolean;
}

/**
 * Khởi tạo state ban đầu cho app
 */
export const initialState: AppState = {
  showMessage: false
};

/**
 * Định nghĩa một enum là tên của ```action```
 * 
 * Miêu tả hành động mà ```action``` này đảm nhiệm
 */
export enum EReduxActionTypes {
  TOGGLE_MESSAGE = "TOGGLE_MESSAGE"
}

/**
 * Type định nghĩa cho ```action```
 * 
 * Thông thường ```action``` gồm hai phần là
 * 
 * - ```type``` sẽ miêu tả ```action``` đấy sẽ làm gì
 * - ```payload``` dữ liệu mới được gửi lên để thay đổi state
 */
export interface IReduxBaseAction {
  type: EReduxActionTypes;
  payload: boolean;
}

export function rootReducer(
  state: AppState = initialState,
  action: IReduxBaseAction
) {
  switch (action.type) {
    case EReduxActionTypes.TOGGLE_MESSAGE:
      /**
       * Nên nhớ redux là ```immutable``` cho nên sẽ trả về một state mới
       */
      return { ...state, showMessage: action.payload };
    default:
      return state;
  }
}