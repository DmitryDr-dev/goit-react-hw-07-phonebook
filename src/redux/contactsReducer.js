import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addNewContact,
  deleteContact,
} from 'redux/contactsOperations';
import { changeFilter } from 'redux/contactsActions';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],
  [addNewContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.data.id),
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [addNewContact.pending]: () => true,
  [deleteContact.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addNewContact.fulfilled]: () => false,
  [addNewContact.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addNewContact.pending]: () => null,
  [addNewContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducers = combineReducers({
  contacts,
  filter,
  loading,
  error,
});
