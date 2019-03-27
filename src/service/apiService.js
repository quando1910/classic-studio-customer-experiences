import axios from 'axios';
import { END_POINT, API_URL_DEV } from './apiRegister';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
export class APIService {
  instance;

  constructor () {
    axios.defaults.baseURL = API_URL_DEV;

  }
  getContacts () {
    return axios.get(API_URL).then(response => response.data);
  }

  loginUser (user) {
    return new Promise((resolve, reject) => {
      axios({ url: API_URL_DEV + END_POINT.login, data: user, method: 'POST' })
        .then(resp => {
          localStorage.setItem('ACCESS_TOKEN', resp.headers[ 'access-token' ]) // store the token in localstorage
          localStorage.setItem('UID', resp.headers[ 'uid' ]) // store the uid in localstorage
          localStorage.setItem('CLIENT', resp.headers[ 'client' ]) // store the client in localstorage
          resolve(resp)
        })
        .catch(err => {
          localStorage.removeItem('ACCESS_TOKEN') // if the request fails, remove any possible user token if possible
          reject(err)
        })
    })
  }
  get (uri) {
    this.setHeader()
    console.log(localStorage.getItem('ACCESS_TOKEN'));
    const url = uri.join('/');
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  post (uri, data) {
    this.setHeader()
    const url = uri.join('/');
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  multipeGets (apiRequests) {
    this.setHeader()
    let apis = [];
    apiRequests.map(v => {
      const link = Array.isArray(v) ? v.join('/') : v;
      apis.push(axios.get(link))
    })
    return new Promise((resolve, reject) => {
      axios.all(apis)
        .then(resp => {
          resolve(resp.map(v => v.data))
        })
        .catch(err => reject(err))
    })
  }

  setHeader () {
    axios.defaults.headers = {
      'content-type': 'application/x-www-form-urlencoded',
      'access-Token': localStorage.getItem('ACCESS_TOKEN'),
      'uid': localStorage.getItem('UID'),
      'client': localStorage.getItem('CLIENT')
    }
  }
}

