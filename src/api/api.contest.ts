/**
 * APIs relacionada con el usuario y cliente.
 *
 * Se devuelve un objeto con las llamadas.
 */
import { xhr } from './config/repository'
import store from '@/store'

export default {
  /**
   * Endpoint create a contest
   */
  async createContest () {
    const url = '/api/contests'
    let token
    window.localStorage.getItem('tokenClient') ? token = window.localStorage.getItem('tokenClient')?.replace(/['"]+/g, '') : token = ''
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    const body = store.getters['session/contest']
    return xhr.post(url, body, { headers })
  },

  /**
   * Endpoint to get all the contests
   */
  async getAllContests () {
    const url = '/api/contests'
    let token
    window.localStorage.getItem('tokenClient') ? token = window.localStorage.getItem('tokenClient')?.replace(/['"]+/g, '') : token = ''
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    return xhr.get(url, { headers })
  },

  /**
   * Endpoint to get all the contests the user created
   */
  async getContestsByCreator () {
    const url = '/api/contests/createdBy'
    let token
    window.localStorage.getItem('tokenClient') ? token = window.localStorage.getItem('tokenClient')?.replace(/['"]+/g, '') : token = ''
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    return xhr.get(url, { headers })
  },

  /**
   * Endpoint to get all the contests the user participated in
   */
  async getContestsByParticipant () {
    const url = '/api/contests/participations'
    let token
    window.localStorage.getItem('tokenClient') ? token = window.localStorage.getItem('tokenClient')?.replace(/['"]+/g, '') : token = ''
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    return xhr.get(url, { headers })
  },

  /**
   * Endpoint to get the contest detail from its id
   */
  async getContestsDetail (id: string) {
    const url = `/api/contests/detail/${id}`
    let token
    window.localStorage.getItem('tokenClient') ? token = window.localStorage.getItem('tokenClient')?.replace(/['"]+/g, '') : token = ''
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    return xhr.get(url, { headers })
  },

  async createParticipation () {
    const url = '/api/contests/'
    let token
    window.localStorage.getItem('tokenClient') ? token = window.localStorage.getItem('tokenClient')?.replace(/['"]+/g, '') : token = ''
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    const body = store.getters['session/participation']
    return xhr.put(url, body, { headers })
  }

}
