/**
 * Định nghĩa type cho state person component
 */
export type TPersonState = {
  id: number;
  name: string;
};

/**
 * Định nghĩa một enum là tên của ```action```
 * 
 * Miêu tả hành động mà ```action``` này đảm nhiệm
 */
export enum EReduxAddPeopleActionTypes {
  ADD_PERSON = "ADD_PERSON",
}

/**
 * Định nghĩa một enum là tên của ```action```
 * 
 * Miêu tả hành động mà ```action``` này đảm nhiệm
 */
export enum EReduxRemovePeopleActionTypes {
  REMOVE_PERSON = "REMOVE_PERSON",
}

/**
 * Type định nghĩa cho ```action```
 * 
 * Thông thường ```action``` gồm hai phần là
 * 
 * - ```type``` sẽ miêu tả ```action``` đấy sẽ làm gì
 * - ```payload``` dữ liệu mới được gửi lên để thay đổi state
 */
export interface IReduxAddPeopleAction {
  type: EReduxAddPeopleActionTypes;
  payload: string;
}

/**
 * Type định nghĩa cho ```action```
 * 
 * Thông thường ```action``` gồm hai phần là
 * 
 * - ```type``` sẽ miêu tả ```action``` đấy sẽ làm gì
 * - ```payload``` dữ liệu mới được gửi lên để thay đổi state
 */
export interface IReduxRemovePeopleAction {
  type: EReduxRemovePeopleActionTypes;
  payload: number;
}

export type TPersonActions = IReduxAddPeopleAction | IReduxRemovePeopleAction;