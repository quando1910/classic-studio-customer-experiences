
export class AuthService {
  toPath = '';
  constructor () {
  }

  ifNotAuthenticated = (to, from, next) => {
    localStorage.removeItem('toPath')
    if (!localStorage.getItem('ACCESS_TOKEN')) {
      next()
      return
    }
    next('/')
  }

  ifAuthenticated = (to, from, next) => {
    localStorage.setItem('toPath', to.path)
    this.toPath = to.path;
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

