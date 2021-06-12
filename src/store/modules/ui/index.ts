import { Module } from 'vuex'
import { StateUi } from './types'
import { RootStore } from '@/store/rootStore'

const getDefaultStateModal = () => {
  return {
    open: false,
    text: '',
    settings: false
  }
}

const getDefaultStateModalConfirm = () => {
  return {
    open: false,
    text: ''
  }
}

const getDefaultTextMask = () => 'Cargando...'

export const ui: Module<StateUi, RootStore> = {
  namespaced: true,
  state: {
    modal: getDefaultStateModal(),
    modalConfirm: getDefaultStateModalConfirm(),
    mask: {
      text: getDefaultTextMask(),
      show: false
    },
    menu: {
      show: false
    },
    mode: {
      dark: false
    }
  },
  mutations: {
    toggleMask (state, { text, show }) {
      state.mask = {
        text: text || getDefaultTextMask(),
        show
      }
    },
    openDialog (state, { text, settings }) {
      state.modal = {
        text: text,
        open: true,
        settings: settings
      }
    },
    closeDialog (state) {
      state.modal = getDefaultStateModal()
    },
    openDialogConfirm (state, { text }) {
      state.modalConfirm = {
        text: text,
        open: true
      }
    },
    closeDialogConfirm (state) {
      state.modalConfirm = getDefaultStateModal()
    },
    toggleMenu (state) {
      state.menu.show = !state.menu.show
    },
    hideMenu (state) {
      state.menu.show = false
    },
    changeMode (state) {
      state.mode.dark = !state.mode.dark
    }
  },
  actions: {
    showMask ({ commit }, { text }) {
      commit('toggleMask', { text, show: true })
    },
    hideMask ({ commit }) {
      commit('toggleMask', { show: false })
    },
    openDialog ({ commit }, { text, settings }) {
      commit('openDialog', { text, settings })
    },
    closeDialog ({ commit }) {
      commit('closeDialog')
    },
    openDialogConfirm ({ commit }, { text }) {
      commit('openDialogConfirm', { text })
    },
    closeDialogConfirm ({ commit }) {
      commit('closeDialogConfirm')
    },
    toggleMenu ({ commit }) {
      commit('toggleMenu')
    },
    hideMenu ({ commit }) {
      commit('hideMenu')
    },
    changeMode ({ commit }) {
      commit('changeMode')
    }
  },
  getters: {
    maskInfo (state) {
      return state.mask
    },
    dialogInfo (state) {
      return state.modal
    },
    dialogConfirmInfo (state) {
      return state.modalConfirm
    },
    menuInfo (state) {
      return state.menu
    },
    modeInfo (state) {
      return state.mode.dark
    }
  }
}
