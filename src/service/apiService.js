import axios from 'axios';
import { END_POINT, API_URL_DEV } from './apiRegister';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
export class APIService {
  instance = axios.create({
    baseURL: API_URL_DEV,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'access-Token': localStorage.getItem('ACCESS_TOKEN'),
      'uid': localStorage.getItem('UID'),
      'client': localStorage.getItem('CLIENT')
    }
  });
  constructor () {
  }
  getContacts () {
    return axios.get(API_URL).then(response => response.data);
  }

  loginUser (user) {
    const promise = new Promise((resolve, reject) => {
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
    return promise;
  }
  get (uri) {
    const url = uri.join('/');
    const promise = new Promise((resolve, reject) => {
      this.instance.get(url)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
    return promise;
  }

  post (uri, data) {
    const url = uri.join('/');
    const promise = new Promise((resolve, reject) => {
      this.instance.post(url, data)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
    return promise;
  }

  multipeGets (apiRequests) {
    let apis = [];
    apiRequests.map(v => {
      const link = Array.isArray(v) ? v.join('/') : v;
      apis.push(this.instance.get(link))
    })
    const promise = new Promise((resolve, reject) => {
      axios.all(apis)
        .then(resp => {
          resolve(resp.map(v => v.data))
        })
        .catch(err => reject(err))
    })
    return promise;
  }
}

