import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockApi from 'services/mockaApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await mockApi.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
