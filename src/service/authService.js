
export class AuthService {
  toPath = '';
  constructor () {
  }

  ifNotAuthenticated = (to, from, next) => {
    if (!localStorage.getItem('ACCESS_TOKEN')) {
      next()
      return
    }
    next('/')
  }

  ifAuthenticated = (to, from, next) => {
    localStorage.setItem('toPath', to.path)
    if (localStorage.getItem('ACCESS_TOKEN')) {
      next()
      return
    }
    next('/login')
  }

  getToPath () {
    return localStorage.getItem('toPath');
  }
}

