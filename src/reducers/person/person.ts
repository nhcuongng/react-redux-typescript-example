import { TPersonState, EReduxAddPeopleActionTypes, EReduxRemovePeopleActionTypes, TPersonActions } from './type';

function neverReached(never: never) {
  console.log(never)
  console.warn('this action cant be handle by person reducer ')
}

export function peopleReducer(state: TPersonState[] = [], action: TPersonActions) {
  switch (action.type) {
    case EReduxAddPeopleActionTypes.ADD_PERSON:
      return state.concat({ id: state.length + 1, name: action.payload });
    case EReduxRemovePeopleActionTypes.REMOVE_PERSON:
      return state.filter(person => person.id !== action.payload);
    default:
      neverReached(action);
      // bạn có thẻ return lại state như trong toggleState
  }
  return state;
}