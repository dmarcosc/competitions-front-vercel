import Vue from 'vue'
import Vuex from 'vuex'
import { RootStore } from './rootStore'
import { ui, session, security } from './modules'
import env from '@/api/config/environment'

Vue.use(Vuex)

export default new Vuex.Store<RootStore>({
  modules: {
    ui,
    session,
    security
  },
  strict: env.getEnvVariable('NODE_ENV') !== 'production'
})
