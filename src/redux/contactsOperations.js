import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockApi from 'services/mockaApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await mockApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (contactToAdd, { rejectWithValue }) => {
    try {
      const newContact = await mockApi.addContact(contactToAdd);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
