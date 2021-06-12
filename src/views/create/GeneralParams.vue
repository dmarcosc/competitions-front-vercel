<template>
  <div class="general">
    <NavMenuHome />
    <div class="general-container">
      <div class="general-titlecard">
        <h1>{{ $t('create.titleGeneral') }}</h1>
        <span class="general-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      <hr>
      <br>
      <br>
      <v-form v-model="isFormValid" @click.prevent>
        <TextField v-model="company" :rules="[rules.required, rules.counter]"
                   :label="$t('create.company')"
                   class="general-tf"
        />
        <TextField v-model="field" :label="$t('create.field')"
                   :rules="[rules.required, rules.counter]"
                   class="general-tf"
        />
        <DateField v-model="dueDate" :label="$t('create.dueDate')"
                   class="general-tf"
                   :min-date="new Date().toISOString()"
        />
        <TextField v-model="vacancies" type="number"
                   :label="$t('create.vacancies')"
                   :rules="[rules.max]"
                   class="general-tf"
        />
        <TextArea v-model="description" :label="$t('create.description')"
                  :rules="[rules.required, rules.counterDesc]"
                  class="general-tf"
        />
      </v-form>
      <div class="general-div-buttons">
        <Button terciary class="general-button" @click="toCreate">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary :disabled="!isFormValid || !dueDate"
                class="general-button"
                @click="toMinRequirements"
        >
          {{ $t('buttons.continue') }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import DateField from '@/components/DateField.vue'
import TextArea from '@/components/TextArea.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'

export default Vue.extend({
  name: 'GeneralParams',
  components: {
    Button,
    TextField,
    DateField,
    TextArea,
    NavMenuHome
  },
  data () {
    return {
      isFormValid: false,
      items: ['Software Development', 'Computer Science', 'Machine Learning', 'Web Development'],
      selected: '',
      rules: {
        required: (value: any) => !!value || this.$t('validations.required'),
        counter: (value: any) => value.length <= 40 || this.$t('validations.max40'),
        counterDesc: (value: any) => value.length <= 200 || this.$t('validations.max200'),
        max: (value: any) => (value <= 10 && value >= 0) || this.$t('validations.between010')
        // textWhiteSpaces: (value: any) => textWhiteSpaces(value) || 'Alpha'
      },
      company: '',
      field: '',
      dueDate: '',
      vacancies: '',
      description: ''
    }
  },
  methods: {
    toCreate () {
      this.$router.push('/create').catch((err: string) => { return err })
    },
    toMinRequirements () {
      const contest: any = {
        employer: this.company,
        field: this.field,
        dueDate: this.dueDate?.split('-').join('/'),
        vacancies: +this.vacancies,
        description: this.description
      }
      this.$store.dispatch('session/updateContest', { contest })
      this.$router.push('/create/requirements').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.createGeneral')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.general{
  z-index: 2;
  max-width: 100%;
  width: 100%;
  background: inherit;
  min-height: 100vh;
  color:$primary-color;
  font-size: 12px;
  height: 100%;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 6em 2em;
}
.general-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:2em 3em;
}
.general-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.general-info{
  user-select: none;
  font-size: 18px;
  cursor:pointer;
  margin-left: auto;
  min-width: 90px;
  text-align: right;
  &:active{
    color: #fff
  }
}
.general-div-buttons {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .general-button {
    width:100% !important;
    margin-bottom: 2em;
  }
@media (min-width: 580px) {
  .general{
    padding: 1em 8em;
  }
  .general-div-buttons{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    .general-button {
    width: 160px !important;
  }
  :nth-child(1) {
    margin-right: 3em ;
  }
  }
}

</style>
