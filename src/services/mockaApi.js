import axios from 'axios';

const BASE_URL = 'https://61a2a5ef014e1900176de9af.mockapi.io/api/v1/';
const endpoint = 'contacts';

axios.defaults.baseURL = BASE_URL;

export async function fetchAllContacts() {
  try {
    const { data } = await axios.get(`${endpoint}`);
    return data;
  } catch (error) {
    console.log('Houston, we have a problem: ', error.message);
    return error;
  }
}

export async function addContact(contact) {
  try {
    const { data } = await axios.post(`${endpoint}`, contact);
    return data;
  } catch (error) {
    console.log('Houston, we have a problem: ', error.message);
    return error;
  }
}

export async function deleteContact(id) {
  try {
    const data = await axios.delete(`${endpoint}/${id}`);
    return data;
  } catch (error) {
    console.log('Houston, we have a problem: ', error.message);
    return error;
  }
}
