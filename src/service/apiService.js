import axios from 'axios';
import { END_POINT, API_URL_DEV } from './apiRegister';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
export class APIService {

  constructor () {
  }
  getContacts () {
    // const url = `${API_URL}/api/contacts/`;
    return axios.get(API_URL).then(response => response.data);
  }

  // const loginUser = user => new Promise((resolve, reject) => {
  //   axios({ url: 'auth', data: user, method: 'POST' })
  //     .then(resp => {
  //       const token = resp.data.token
  //       localStorage.setItem('user-token', token) // store the token in localstorage
  //       resolve(resp)
  //     })
  //     .catch(err => {
  //       localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
  //       reject(err)
  //     })
  // })
  loginUser (user) {
    const promise = new Promise((resolve, reject) => {
      axios({ url: API_URL_DEV + END_POINT.login, data: user, method: 'POST' })
        .then(resp => {
          const token = resp.headers[ 'access-token' ];
          localStorage.setItem('user-token', token) // store the token in localstorage
          resolve(resp)
        })
        .catch(err => {
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
          reject(err)
        })
    })
    return promise;
  }

  getPackages() {
    return axios.get(API_URL_DEV + END_POINT.packages);
  }
}

