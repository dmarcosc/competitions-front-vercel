<template>
  <div class="creation-extra">
    <NavMenuHome />
    <div class="creation-extra-container">
      <div class="creation-extra-titlecard">
        <h1>{{ $t('create.titleExtra') }}</h1>
        <span class="creation-extra-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('create.subtitleExtra') }}
      <hr>
      <br>
      <br>
      <v-form v-model="isFormValid" @click.prevent>
        <div class="creation-extra-tfdiv">
          <label class="creation-extra-label">{{ $t('create.extraOfficial') }}</label>
          <TextField v-model="OMerit" placeholder="0-100"
                     type="number"
                     :label="$t('create.weight')"
                     class="creation-extra-cb"
                     :rules="[rules.required, rules.counter]"
          />
        </div>
        <div class="creation-extra-tfdiv">
          <label class="creation-extra-label">{{ $t('create.extraExperience') }}</label>
          <TextField v-model="EMerit" placeholder="0-100"
                     type="number"
                     :label="$t('create.weight')"
                     class="creation-extra-cb"
                     :rules="[rules.required, rules.counter]"
          />
        </div>
        <div class="creation-extra-tfdiv">
          <label class="creation-extra-label">{{ $t('create.extraPunctual') }}</label>
          <TextField v-model="PMerit" placeholder="0-100"
                     type="number"
                     :label="$t('create.weight')"
                     class="creation-extra-cb"
                     :rules="[rules.required, rules.counter]"
          />
        </div>
        <div class="creation-extra-tfdiv">
          <label class="creation-extra-label">{{ $t('create.extraKnowledge') }}</label>
          <TextField v-model="KMerit" placeholder="0-100"
                     type="number"
                     :label="$t('create.weight')"
                     class="creation-extra-cb"
                     :rules="[rules.required, rules.counter]"
          />
        </div>
      </v-form>
      <div class="creation-extra-div-button">
        <Button terciary class="creation-extra-button" @click="toCreationSkills">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary :disabled="!isFormValid"
                class="creation-extra-button"
                @click="toFinish"
        >
          {{ $t('buttons.continue') }}
        </Button>
      </div>
    </div>
    <img class="creation-extra-img" src="@/assets/images/extra.svg">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'
import TextField from '@/components/TextField.vue'
import ContestDTO from '../../api/models/Contest'
import { API } from '@/api'

export default Vue.extend({
  name: 'CreationExtra',
  components: {
    Button,
    TextField,
    NavMenuHome
  },
  data () {
    return {
      isFormValid: false,
      rules: {
        required: (value: any) => !!value || this.$t('validations.required'),
        counter: (value: any) => (value <= 100 && value >= 0) || this.$t('validations.between0100')
      },
      OMerit: '',
      EMerit: '',
      PMerit: '',
      KMerit: ''
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    toCreationSkills () {
      this.$router.push('/create/skills').catch((err: string) => { return err })
    },
    async toFinish () {
      const contest: ContestDTO = {
        extra: {
          OMerit: +this.OMerit,
          EMerit: +this.EMerit,
          PMerit: +this.PMerit,
          KMerit: +this.KMerit
        }
      }
      this.$store.dispatch('session/updateContest', { contest })
      this.$store.dispatch('ui/showMask', {
        text: this.$t('main.retrievingData')
      })
      try {
        const resp = await API.contest.createContest()
        if (resp?.status === 201) {
          this.$router.push('/create/finish').catch((err: string) => { return err })
        } else {
          this.$router.push({
            name: 'Error404',
            params: {
              errorType: 'Error creating contest'
            }
          }).catch((err) => { return err })
        }
      } catch (err) {
        console.log(err)
        this.$router.push({
          name: 'Error404',
          params: {
            errorType: 'Error creating contest'
          }
        }).catch((err) => { return err })
      } finally {
        this.$store.dispatch('ui/hideMask')
      }
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.createExtra')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.creation-extra{
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
  padding: 6em 1em;
}
.creation-extra-container{
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
.creation-extra-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.creation-extra-info{
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
.creation-extra-label{
  font-size: 14px;
  font-weight: 600;
  margin-right:1em;
}
.creation-extra-minus{
  margin-top:14px;
}
.creation-extra-tfdiv{
  display:flex;
  align-items: center;
  max-width:365px;
}
.creation-extra-cb{
  min-width:90px !important;
  width:120px;
  margin-left: auto;
  overflow: hidden;

}
::v-deep
.v-select__slot{
  overflow:hidden;
}
.creation-extra-div-button {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .creation-extra-button {
    width:100% !important;
    margin-bottom: 2em;
  }
.creation-extra-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:30%;
  left:50%;
}
@media (min-width: 580px) {
  .creation-extra{
    padding: 1em 8em;
  }
  .creation-extra-div-button{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    :nth-child(1) {
    margin-right: 3em ;
  }
  }
    .creation-extra-button {
    width: 160px !important;
  }
}
@media (min-width: 900px) {
  .tf-div.creation-extra-label{
    width:40%;
  }.creation-extra-img{
    display: block;
  }
}
@media (min-width: 1500px) {
  .creation-extra-img{
    height: 30rem;
  }
}
</style>
