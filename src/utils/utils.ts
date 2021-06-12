import store from '@/store/index'
/**
 * Nos devuelve el objeto parámetro completo junto con sus campos valor y código
 * a partir de uno de estos dos campos
 * @param {Object | any} object
 * @param {string} type
 * @param {string} param
 * @return {Object}
 */
export const getParam = (object: any, type: string, param: string) => {
  if (!object || !(object.keys) || (object.keys.length > 0) || !param || !type) {
    return false
  } else if (type === 'valor') {
    const found = (object).find((x: any) => x.valor === param)
    if (found) return found
    else return false
  } else if (type === 'codigo') {
    const found = (object).find((x: any) => x.codigo === param)
    if (found) return found
    else return false
  }
}

export const formatFechaDMY = (val: Date) => {
  const aDate = new Date(val)
  const Day = (aDate.getUTCDate() < 10 ? '0' : '') + aDate.getUTCDate()
  const Month = ((aDate.getUTCMonth() + 1) < 10 ? '0' : '') + (aDate.getUTCMonth() + 1)
  const Year = aDate.getUTCFullYear()

  return Day + '/' + Month + '/' + Year
}

/**
 * comprueba si el la variable (número o string)
 * es un número positivo
 * @param {String | Number} num
 * @return {Boolean}
 */
export const isPositiveNumber = (num: number) => {
  // transformamos el 'num' (ya que puede ser un string)
  // a númerico, una hecho el cast devolvemos true si es mayor a 0,
  // en caso contrario, se devuelve un false.
  const num_ = Number(num)
  return num_ > 0
}

export const getInfoAnalisis = () => {
  return JSON.stringify({
    appVersion: store.getters['app/version'].version,
    device: store.getters['app/device'],
    userAgent: window.navigator.userAgent
  })
}

export const cleanObject = (object: any) => {
  Object
    .entries(object)
    .forEach(([k, v]) => {
      if (v && typeof v === 'object') {
        cleanObject(v)
      }
      // eslint-disable-next-line no-mixed-operators
      if (v && typeof v === 'object' && !Object.keys(v).length || v === null || v === undefined || v === '') {
        if (Array.isArray(object)) {
          object.splice((k as any), 1)
        } else {
          delete object[k]
        }
      }
    })
  return object
}
