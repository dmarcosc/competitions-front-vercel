<template>
  <div class="cb-div">
    <label class="cb-label">{{ label }}</label>
    <v-combobox
      v-model="valueData"
      v-bind="$attrs"
      class="myCombobox"
      solo
      @input="e => $emit('input', e)"
      @search="e => $emit('search', e)"
      @blur="e => $emit('blur', e)"
    />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ComboBox',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      valueData: this.value,
      errorMessages: {
        required: 'El campo es requerido',
        validDocument: 'Documento incorrecto o inválido',
        validPhone: 'Teléfono incorrecto o inválido',
        validIBAN: 'Formato IBAN incorrecto o inválido',
        email: 'Correo electrónico incorrecto o inválido',
        email2: 'Correo electrónico incorrecto o inválido',
        year: 'Año inválido [1900-actual]',
        numeric: 'Solo caracteres numéricos',
        alphaNumeric: 'Formato inválido',
        between09: 'Valor inválido',
        minLength5: 'Exactamente 5 dígitos',
        maxLength60: 'Máximo 60 caracteres',
        maxLength35: 'Máximo 35 caracteres',
        maxLength15: 'Máximo 15 caracteres',
        maxLength5: 'Máximo 5 caracteres',
        maxLength4: 'Máximo 4 caracteres',
        max9999: 'El valor máximo es 9999',
        alphabetical: 'Solo caracteres alfabéticos',
        date: 'Formato de fecha incorrecto',
        minor: 'Menor de edad',
        minDate: 'No puede ser menor del día actual'
      }
    }
  },
  watch: {
    value (newVal) {
      this.valueData = newVal
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
.cb-label{
  color:$primary-color;
  font-size: 15px;
  font-weight: 700;
}
.myCombobox{
  margin-top:10px;
}
::v-deep
.v-icon.v-icon{
 overflow: hidden !important;
}
::v-deep
.v-input__icon{
  cursor:pointer;
  overflow: hidden !important;
}

</style>
