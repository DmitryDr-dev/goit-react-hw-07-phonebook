import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contactsOperations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
});

export const contactsReducers = combineReducers({
  contacts,
  loading,
  error,
});
