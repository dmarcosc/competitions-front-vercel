
import store from '@/store'

/*  returns:
  /*      0 - Valid
  /*     -1 - Invalid
  /*     -2 - Empty
  */
export const validateCellphone = (phone: string) => {
  if (phone) {
    if (phone.toString().length < 9 || phone.toString().length > 9) {
      return false // -1
    }
    if (/^\d+$/.test(phone) && (phone.toString().startsWith('6') || phone.toString().startsWith('7'))) {
      return true // 0
    } else {
      return false // -1
    }
  }
  return true // -2
}

/*  returns:
  /*      TRUE - Valid
  /*     FALSE - Invalid
  /*     TRUE - Empty
  */
export const validatePhone = (phone: string) => {
  if (phone) {
    if (phone.toString().length < 9 || phone.toString().length > 9) {
      return false
    }
    if (/^\d+$/.test(phone) && (phone.toString().startsWith('8') || phone.toString().startsWith('9'))) {
      return true // 0
    } else {
      return false // -1
    }
  }
  return true // CUIDADO SI EL CAMPO ES REQUERIDO CREAR NUEVA FUNCION QUE DEVUELVA FALSE
}

// validar email.
export const validateEmail = (email: string) => {
  if (email) {
    const emailRexp = /^(([^<>ñ()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/
    const str = email.toString()
    if (emailRexp.test(str)) {
      return true
    } else {
      return false
    }
  }
  return true
}

export const textWhiteSpaces = (text: string) => {
  if (text) {
    const nombreRex = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g
    const str = text.toString()
    if (nombreRex.test(str)) {
      return true
    } else {
      return false
    }
  }
  return true
}

export const alphaNumericWhiteSpaces = (text: string) => {
  if (text) {
    const companyNameRex = /^[ A-Za-z0-9\u00f1\u00d1-\s]+$/g
    const str = text.toString()
    if (companyNameRex.test(str)) {
      return true
    } else {
      return false
    }
  }
  return true
}

export const companyName = (text: string) => {
  if (text) {
    const companyNameRex = /^[ A-Za-z0-9.,/-\u00f1\u00d1-\s]+$/g
    const str = text.toString()
    if (companyNameRex.test(str)) {
      return true
    } else {
      return false
    }
  }
  return true
}

/*  separates a phone number in groups of 3 numbers
    /*     ex: 666666666 -> 666 666 666
    */
export const separatePhoneNumber = (phone: string) => {
  return phone.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const formatFechaDMY = (val: Date) => {
  const aDate = new Date(val)
  const Day = (aDate.getUTCDate() < 10 ? '0' : '') + aDate.getUTCDate()
  const Month = ((aDate.getUTCMonth() + 1) < 10 ? '0' : '') + (aDate.getUTCMonth() + 1)
  const Year = aDate.getUTCFullYear()

  return Day + '/' + Month + '/' + Year
}

export const underage = (age: Date) => {
  const now = new Date()
  now.setFullYear(now.getFullYear() - 18)

  if (age > now) {
    return false
  }
  return true
}

export const validateNationality = (nationality: string) => {
  if (nationality === 'ESPAÑA') return false
  else return true
}
