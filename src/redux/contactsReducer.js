import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact } from 'redux/contactsOperations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],
  [addNewContact.fulfilled]: (state, { payload }) => [...state, payload],
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [addNewContact.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addNewContact.fulfilled]: () => false,
  [addNewContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addNewContact.pending]: () => null,
  [addNewContact.rejected]: (_, { payload }) => payload,
});

export const contactsReducers = combineReducers({
  contacts,
  loading,
  error,
});
