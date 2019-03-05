import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
export class APIService {

  constructor () {
  }
  getContacts () {
    // const url = `${API_URL}/api/contacts/`;
    return axios.get(API_URL).then(response => response.data);
  }
}
