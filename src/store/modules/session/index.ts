import { Module } from 'vuex'
import { StateSession } from './types'
import { RootStore } from '@/store/rootStore'

const getDefaultStateContest = () => {
  return {
    name: '',
    field: '',
    dueDate: '',
    employer: '',
    vacancies: 0,
    description: '',
    requirements: {
      OMerit: [] as any,
      EMerit: [] as any,
      PMerit: [] as any,
      KMerit: [] as any
    },
    skills: {
      OMerit: [] as any,
      EMerit: [] as any,
      PMerit: [] as any,
      KMerit: [] as any
    },
    extra: {
      OMerit: 0,
      EMerit: 0,
      PMerit: 0,
      KMerit: 0
    },
    participations: [] as any
  }
}

const getDefaultStateParticipation = () => {
  return {
    user: '',
    contest: '',
    score: 0,
    requirements: {
      OMerit: [] as any,
      EMerit: [] as any,
      PMerit: [] as any,
      KMerit: [] as any
    },
    skills: {
      OMerit: [] as any,
      EMerit: [] as any,
      PMerit: [] as any,
      KMerit: [] as any
    },
    extra: {
      OMerit: [] as any,
      EMerit: [] as any,
      PMerit: [] as any,
      KMerit: [] as any
    }
  }
}

export const session: Module<StateSession, RootStore> = {
  namespaced: true,
  state: {
    contest: getDefaultStateContest(),
    contestItem: null,
    participation: getDefaultStateParticipation()
  },
  mutations: {
    saveContestItem (state, param) {
      state.contestItem = param
    },
    updateContest (state, { contest }) {
      if (contest?.name) {
        state.contest.name = contest.name
      }
      if (contest?.field) {
        state.contest.field = contest.field
      }
      if (contest?.dueDate) {
        state.contest.dueDate = contest.dueDate
      }
      if (contest?.employer) {
        state.contest.employer = contest.employer
      }
      if (contest?.vacancies) {
        state.contest.vacancies = contest.vacancies
      }
      if (contest?.description) {
        state.contest.description = contest.description
      }
      if (contest?.requirements) {
        state.contest.requirements = contest.requirements
      }
      if (contest?.skills) {
        state.contest.skills = contest.skills
      }
      if (contest?.extra) {
        state.contest.extra = contest.extra
      }
      if (contest?.participations) {
        state.contest.participations = contest.participations
      }
    },
    updateParticipation (state, { participation }) {
      if (participation?.user) {
        state.participation.user = participation.user
      }
      if (participation?.contest) {
        state.participation.contest = participation.contest
      }
      if (participation?.score) {
        state.participation.score = participation.score
      }
      if (participation?.requirements) {
        state.participation.requirements = participation.requirements
      }
      if (participation?.skills) {
        state.participation.skills = participation.skills
      }
      if (participation?.extra) {
        state.participation.extra = participation.extra
      }
    }
  },
  actions: {
    saveContestItem ({ commit }, param: any) {
      commit('saveContestItem', param)
    },
    updateContest ({ commit }, { contest }) {
      commit('updateContest', { contest })
    },
    updateParticipation ({ commit }, { participation }) {
      commit('updateParticipation', { participation })
    }
  },
  getters: {
    contest (state) {
      return state.contest
    },
    contestItem: state => {
      return state.contestItem
    },
    participation (state) {
      return state.participation
    }
  }
}
