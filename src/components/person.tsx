import * as React from "react";
import {  useSelector, useDispatch } from "react-redux";
import { TReducers } from '../reducers';
import { TPersonState } from '../reducers/person';
import { addPerson, removePerson } from '../actions';

export const Person = () => {
  const [newPerson, setNewPerson] = React.useState("");
  const updateNewPerson = () => (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPerson(e.currentTarget.value);

  /** Function component dùng ```useSelector``` để lấy state từ store */
  const people: TPersonState[] = useSelector((state: TReducers) => state.peopleReducer);
  /** Function component dùng ```useDispatch``` hook để dispatch action */
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPerson(newPerson)); // dispatch action thêm person
    setNewPerson("");
  };

  const dispatchRemovePerson = (id: number) => () => {
    dispatch(removePerson(id)); // dispatch action xoá person
  };

  return (
    <div>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <span>{person.name}</span>
            <button onClick={dispatchRemovePerson(person.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter name"
          value={newPerson}
          onChange={updateNewPerson()}
        />
        <button>Add</button>
      </form>
    </div>
  );
};