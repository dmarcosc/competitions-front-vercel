/**
 * APIs relacionada con el usuario y cliente.
 *
 * Se devuelve un objeto con las llamadas.
 */
import { xhr } from './config/repository'

export default {
/**
   * login del usuario
   * @param email - email usuario
   * @param password - password de usuario
   */
  async login (email: string, password: string) {
    const url = '/api/login'
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = {
      email,
      password
    }
    return xhr.post(url, body, { headers })
  },

  /**
   * register user
   * @param idToken - email user
   */
  async loginGoogle (idToken: string) {
    const url = '/api/login/google'
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = {
      idToken
    }
    return xhr.post(url, body, { headers })
  },

  /**
   * register user
   * @param email - email user
   * @param password - password user
   */
  async register (email: string, password: string) {
    const url = '/api/users'
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = {
      email,
      password
    }
    return xhr.post(url, body, { headers })
  },

  /**
   * register user
   * @param idToken - email user
   */
  async registerGoogle (idToken: string) {
    const url = '/api/users/google'
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = {
      idToken
    }
    return xhr.post(url, body, { headers })
  },

  /**
   * endpoint to retrieve user information
   */
  async getUserInfo () {
    const url = '/api/users/userInfo'
    let token
    window.localStorage.getItem('tokenClient') ? token = window.localStorage.getItem('tokenClient')?.replace(/['"]+/g, '') : token = ''

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    return xhr.get(url, { headers })
  },

  /**
   * Endpoint to add new user info
   * @param name - user name
   * @param secondName - user second name
   * @param birthDate - user birth date
   * @param mobile - user mobile
   * @param country - user country
   */
  async updateUser (name?: string, secondName?: string, birthDate?: string, mobile?: string, country?: string) {
    const url = '/api/users/updateUser'
    let token
    window.localStorage.getItem('tokenClient') ? token = window.localStorage.getItem('tokenClient')?.replace(/['"]+/g, '') : token = ''
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    const body = {
      name,
      secondName,
      birthDate,
      mobile,
      country
    }
    return xhr.put(url, body, { headers })
  }

}
