<template>
  <v-dialog v-bind="$attrs" light
            persistent
  >
    <div v-if="settings" class="settings-dialog">
      <h1>{{ $t('menu.settings') }}</h1>
      <div class="container-settings">
        <div style="overflow: visible;">
          <v-radio-group v-model="$i18n.locale" :label="$t('settings.language')">
            <v-radio
              :label="$t('settings.spanish')"
              value="es"
            />
            <v-radio
              :label="$t('settings.english')"
              value="en"
            />
          </v-radio-group>
          <v-switch
            v-model="dark"
            :label="$t('settings.dark')"
          />
          <span class="span-session" @click="closeSession">{{ $t('settings.session') }} <i class="fas fa-power-off fa-lg" /></span>
        </div>
        <img :alt="settings" class="img-settings" :src="settingsImg">
      </div>
    </div>
    <div v-else class="common-dialog">
      <i class="fas fa-info-circle fa-4x" />
      <div :class="{'text-noProcess' : !isProcess, '' : isProcess}">
        {{ text }}
      </div>
      <div v-if="isProcess" class="dialog-cheat-sheet">
        <span style="color:red;">{{ $t('info.cheat') }}</span>
        <p class="dialog-p">
          {{ $t('info.official') }}
        </p>
        <p class="dialog-p">
          {{ $t('info.experience') }}
        </p>
        <p class="dialog-p">
          {{ $t('info.punctual') }}
        </p>
        <p class="dialog-p">
          {{ $t('info.knowledge') }}
        </p>
      </div>
    </div>
    <Button primary class="dialog-button" @click="$emit('close')">
      {{ $t('buttons.close') }}
    </Button>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import settingsImg from '@/assets/images/settings.svg'
export default Vue.extend({
  name: 'Dialog',
  components: {
    Button
  },
  props: {
    isProcess: {
      type: Boolean,
      default: false
    },
    settings: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dark: false,
      settingsImg
    }
  },
  watch: {
    dark () {
      if (this.dark === true) this._addDarkTheme()
      else this._removeDarkTheme()
    }
  },
  methods: {
    closeSession () {
      this.$emit('close')
      this.$router.push('/').catch((err: string) => { return err })
    },
    _addDarkTheme () {
      document.querySelectorAll('.v-application--wrap').forEach(element => {
        element.className += ' dark-theme'
      })
    },
    _removeDarkTheme () {
      document.querySelectorAll('.v-application--wrap').forEach(element => {
        element.classList.remove('dark-theme')
      })
    }
  }
})
</script>

<style  lang="scss" scoped>
.common-dialog{
  margin:0;
  padding:0;
  height:280px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.settings-dialog{
  padding:0% 5%;
}
.container-settings{
  display:flex;
  overflow: visible;
  justify-content: space-between;
}
.img-settings{
  display:none;
margin: 3em 2em 0em 0em;
height:170px;
}
.dialog-button{
  height: 40px !important;
  width:120px !important;
}
.dialog-cheat-sheet{
  border: .5px solid red;
padding: 10px 5%;
}
.dialog-p{
    margin:0px !important;
    text-align: left;
  }
@media (min-width: 700px) {
  .dialog-button{
    height: 46px !important;
    width:160px !important;
  }
  .v-dialog{
    font-size: 16px;
  }
  .img-settings{
  display:block;
  }
}
::v-deep
.v-input--selection-controls__input{
  overflow: hidden !important;
}
::v-deep
.v-icon{
  overflow: hidden !important;
}
::v-deep
.v-input--selection-controls__ripple{
    overflow: hidden !important;
}
.span-session{
  cursor: pointer;
  display:flex;
  align-items: center;
  height:23px;
  font-size:16px;
}
.text-noProcess{
  margin-bottom: 40px;
}
.fa-power-off{
  margin-left:5px;
  width:26px;
  height:20px;
}
::v-deep
.v-input--switch .v-input--selection-controls__input{
  width:55px;
  height:48px;
  margin-right:0px;
  text-align: center;
  overflow: visible !important;
}
::v-deep
.theme--light.v-input input{
overflow: visible !important;
overflow-y: visible !important;
}
::v-deep
.v-input.theme--light.v-input--selection-controls.v-input--switch{
  overflow: visible !important;
overflow-y: visible !important;
}
::v-deep
.v-input__control{
    overflow: visible !important;
overflow-y: visible !important;
}
::v-deep
.v-input__slot{
    overflow: visible !important;
overflow-y: visible !important;
}
::v-deep
.v-input--radio-group__input .v-label.theme--light{
font-size:16px;
color: #4974a5;
}
::v-deep
.v-input.theme--light.v-input--selection-controls.v-input--switch .v-input__control .v-input__slot .v-label.theme--light{
font-size:16px;
color: #4974a5;
}
</style>
