import Xhr from './Xhr'
import env from '@/api/config/environment'

const xhr = Xhr.builder()
  .setBaseUrl(env.getEnvVariable('VUE_APP_ROOT_API'))
  .build()

export {
  xhr
}
