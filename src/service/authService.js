
export class AuthService {
  toPath = '';
  constructor () {
  }

  ifNotAuthenticated = (to, from, next) => {
    console.log('ifNotAuthenticated');
    localStorage.removeItem('toPath')
    if (localStorage.getItem('user-token')) {
      next()
      return
    }
    next('/')
  }

  ifAuthenticated = (to, from, next) => {
    localStorage.setItem('toPath', to.path)
    this.toPath = to.path;
    if (localStorage.getItem('user-token')) {
      next()
      return
    }
    next('/login')
  }

  getToPath () {
    return localStorage.getItem('toPath');
  }
}

