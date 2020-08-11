import { EReduxAddPeopleActionTypes, EReduxRemovePeopleActionTypes, IReduxAddPeopleAction, IReduxRemovePeopleAction } from '../reducers/person';

/**
 * Action thêm một people
 * @param personName tên person nhập ô input
 */
export function addPerson(personName: string): IReduxAddPeopleAction {
  return {
    type: EReduxAddPeopleActionTypes.ADD_PERSON,
    payload: personName
  } as const;
}

/**
 * Action xoá một person
 * @param id id của person bị xoá
 */
export function removePerson(id: number): IReduxRemovePeopleAction {
  return {
    type: EReduxRemovePeopleActionTypes.REMOVE_PERSON,
    payload: id
  } as const;
}