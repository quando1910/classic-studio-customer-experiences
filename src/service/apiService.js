import axios from 'axios';
import { END_POINT, API_URL_DEV } from './apiRegister';
export class APIService {

  constructor () {
    axios.defaults.baseURL = API_URL_DEV;
  }

  getContacts () {
    return axios.get(API_URL).then(response => response.data);
  }

  get (uri) {
    this.setHeader()
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

  put (uri, data) {
    this.setHeader()
    const url = uri.join('/');
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  delete (uri) {
    this.setHeader()
    const url = uri.join('/');
    return new Promise((resolve, reject) => {
      axios.delete(url)
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
      'content-type': 'application/json',
      'access-Token': localStorage.getItem('ACCESS_TOKEN'),
      'uid': localStorage.getItem('UID'),
      'client': localStorage.getItem('CLIENT')
    }
  }
}

