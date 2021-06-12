import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import env from '@/api/config/environment'

Vue.use(VueI18n)

/**
 * Método que carga los mensajes de los archivos locales en el i18n del sistema
 */
function loadLocaleMessages (): LocaleMessages {
  const locales = require.context('./locals', true, /[A-Za-z0-9-_,\s]+\.json$/i)

  const messages: LocaleMessages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })

  return messages
}

export default new VueI18n({
  locale: env.getEnvVariable('VUE_APP_I18N_LOCALE') || 'en',
  fallbackLocale: env.getEnvVariable('VUE_APP_I18N_FALLBACK_LOCALE') || 'en',
  messages: loadLocaleMessages()
})
