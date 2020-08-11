/**
 * Type định nghĩa type cho state của toggle component
 */
export interface IToggleState {
  showMessage: boolean;
}

/**
 * Định nghĩa một enum là tên của ```action```
 * 
 * Miêu tả hành động mà ```action``` này đảm nhiệm
 */
export enum EReduxToggleActionTypes {
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
export interface IReduxToggleAction {
  type: EReduxToggleActionTypes;
  payload: boolean;
}