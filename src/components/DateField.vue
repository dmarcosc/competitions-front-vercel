<template>
  <v-layout>
    <label class="tf-label">{{ label }}</label>
    <v-menu
      v-model="fromDateMenu"
      v-bind="$attrs"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          label="YYYY-MM-DD"
          readonly
          solo
          :value="valueData"
          v-on="on"
        />
      </template>
      <v-date-picker
        v-model="valueData"
        v-bind="$attrs"
        locale="en-in"
        :min="minDate"
        :max="maxDate"
        no-title
        @input="e => $emit('input', e)"
        @blur="e => $emit('blur', e)"
      />
    </v-menu>
  </v-layout>
</template>

<script>
export default {
  name: 'TextField',
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
    minDate: {
      type: String,
      default: ''
    },
    maxDate: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      fromDateMenu: false,
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
  computed: {
    anyValue () {
      const bool = this.valueData !== ''
      return bool
    }
  },
  watch: {
    value (newVal) {
      this.valueData = newVal
    }
  },
  methods: {
    clearValue () {
      this.valueData = ''
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
.layout{
display:block;
}
.tf-label{
  color:$primary-color;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 20px;
}
.myTextField{
  margin-top:10px;
}
.v-input.v-input--is-readonly.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--is-booted.v-text-field--enclosed{
margin-top:8px;
}
::v-deep
.v-icon.notranslate.theme--light{
  overflow:visible;
}
</style>
