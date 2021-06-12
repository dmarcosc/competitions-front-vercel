<template>
  <div class="personalData">
    <NavMenuHome />
    <div class="personalData-container">
      <div class="personalData-titlecard">
        <h1>{{ $t('apply.titlePersonal') }}</h1>
        <span class="personalData-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      <hr>
      <br>
      <br>
      <v-form v-model="isFormValid" @click.prevent>
        <TextField v-model="name" :rules="[rules.required, rules.counter, rules.textWhiteSpaces]"
                   :label="$t('apply.firstName')"
                   class="personalData-tf"
        />
        <TextField v-model="secondName" :rules="[rules.required, rules.counter, rules.textWhiteSpaces]"
                   :label="$t('apply.secondName')"
                   class="personalData-tf"
        />
        <DateField v-model="birthDate" :label="$t('apply.dateBirth')"
                   class="personalData-tf datefield"
                   :max-date="new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString()"
        />
        <TextField v-model="mobile" :rules="[rules.required, rules.mobile]"
                   :label="$t('apply.phone')"
                   class="personalData-tf"
        />
        <ComboBox v-model="country" :rules="[rules.required]"
                  :label="$t('apply.country')"
                  class="personalData-tf"
                  :items="items"
        />
      </v-form>
      <div class="personalData-div-button">
        <Button terciary class="personalData-button" @click="toApply">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary class="personalData-button"
                :disabled="!isFormValid || !birthDate"
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
import ComboBox from '@/components/ComboBox.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'
import DateField from '@/components/DateField.vue'
import { textWhiteSpaces, validateCellphone } from '@/utils/validations'
import { API } from '@/api'
import CountriesJSON from '@/assets/mock/countries.json'

export default Vue.extend({
  name: 'PersonalData',
  components: {
    Button,
    TextField,
    ComboBox,
    DateField,
    NavMenuHome
  },
  data () {
    const countries = CountriesJSON
    return {
      items: countries,
      selected: '',
      isFormValid: false,
      rules: {
        required: (value: any) => !!value || this.$t('validations.required'),
        counter: (value: any) => value.length <= 40 || this.$t('validations.max40'),
        textWhiteSpaces: (value: any) => textWhiteSpaces(value) || this.$t('validations.alpha'),
        mobile: (value: any) => validateCellphone(value) || this.$t('validations.cellphone')
      },
      name: '',
      secondName: '',
      birthDate: '',
      mobile: '',
      country: ''
    }
  },
  async mounted () {
    this.$store.dispatch('ui/showMask', {
      text: this.$t('main.retrievingData')
    })
    try {
      const resp: any = await API.user.getUserInfo()
      if (resp?.status === 200) {
        resp?.data?.name ? this.name = resp.data.name : this.name = ''
        resp?.data?.secondName ? this.secondName = resp.data.secondName : this.secondName = ''
        resp?.data?.birthDate ? this.birthDate = resp.data.birthDate.split('/').join('-') : this.birthDate = ''
        resp?.data?.mobile ? this.mobile = resp.data.mobile : this.mobile = ''
        resp?.data?.country ? this.country = resp.data.country : this.country = ''
      } else {
        this.$router.push({
          name: 'Error404',
          params: {
            errorType: 'Error retrieving user data'
          }
        }).catch((err) => { return err })
      }
    } catch (err) {
      console.log(err)
      this.$router.push({
        name: 'Error404',
        params: {
          errorType: 'Error retrieving user data'
        }
      }).catch((err) => { return err })
    } finally {
      this.$store.dispatch('ui/hideMask')
    }
  },
  methods: {
    toApply () {
      this.$router.push('/apply').catch((err: string) => { return err })
    },
    async toMinRequirements () {
      this.$store.dispatch('ui/showMask', {
        text: this.$t('main.retrievingData')
      })
      try {
        const resp = await API.user.updateUser(this.name, this.secondName, this.birthDate?.split('-').join('/'), this.mobile, this.country)
        if (resp?.status === 201) {
          this.$router.push('/apply/requirements').catch((err: string) => { return err })
        } else {
          this.$router.push({
            name: 'Error404',
            params: {
              errorType: 'Error updating user info'
            }
          }).catch((err) => { return err })
        }
      } catch (err) {
        console.log(err)
        this.$router.push({
          name: 'Error404',
          params: {
            errorType: 'Error updating user info'
          }
        }).catch((err) => { return err })
      } finally {
        this.$store.dispatch('ui/hideMask')
      }
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.personalData')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.personalData{
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
.personalData-container{
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
.personalData-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.personalData-info{
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
.personalData-div-button {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .personalData-button {
    width:100% !important;
    margin-bottom: 2em;
  }
@media (min-width: 580px) {
  .personalData{
    padding: 1em 8em;
  }
  .personalData-div-button{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    :nth-child(1) {
    margin-right: 3em ;
  }
  }
    .personalData-button {
    width: 160px !important;
  }
}

</style>
