<template>
  <v-app id="app">
    <transition name="show" mode="in-out">
      <NavMenuMobile v-if="menuInfo.show" :route="route" />
    </transition>
    <Dialog v-model="dialog.open" :is-process="isProcess"
            :settings="dialog.settings"
            persistent
            :text="dialog.text"
            @close="onClose"
    />
    <DialogConfirm v-model="dialogConfirm.open"
                   persistent
                   :text="dialogConfirm.text"
                   @close="onCloseDialogConfirm"
    />
    <LoadMask v-if="maskInfo.show" :text="maskInfo.text" />
    <BlueBall v-if="login" id="ball"
              big
              class="ball1"
    />
    <BlueBall v-if="login" id="ball"
              medium
              class="ball2"
    />
    <BlueBall v-if="login" id="ball"
              small
              class="ball3"
    />
    <v-container class="app-container">
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import BlueBall from '@/components/BlueBall.vue'
import Dialog from '@/components/Dialog.vue'
import DialogConfirm from '@/components/DialogConfirm.vue'
import NavMenuMobile from '@/components/NavMenu/NavMenuMobile.vue'
import LoadMask from '@/components/LoadMask.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
  components: {
    BlueBall,
    NavMenuMobile,
    Dialog,
    LoadMask,
    DialogConfirm
  },
  data () {
    return {
      route: '',
      login: false,
      isProcess: false
    }
  },
  computed: {
    menuInfo () {
      return this.$store.getters['ui/menuInfo']
    },
    dialog () {
      return this.$store.getters['ui/dialogInfo']
    },
    dialogConfirm () {
      return this.$store.getters['ui/dialogConfirmInfo']
    },
    maskInfo () {
      return this.$store.getters['ui/maskInfo']
    }
  },
  watch: {
    $route () {
      if ((this.$router.currentRoute.name === 'CreationRequirements') || (this.$router.currentRoute.name === 'ApplyExtra') || (this.$router.currentRoute.name === 'CreationRequirements') || (this.$router.currentRoute.name === 'CreationExtra') || (this.$router.currentRoute.name === 'ApplyRequirements') || (this.$router.currentRoute.name === 'ApplySkills') || (this.$router.currentRoute.name === 'CreationSkills')) {
        this.isProcess = true
      } else {
        this.isProcess = false
      }
      this.$store.dispatch('ui/hideMenu')
      this.route = this.$router.currentRoute.name
      if (this.$router.currentRoute.name === 'Home') this.login = false
      else this.login = true
    }
  },
  updated () {
    this.relocate()
  },
  methods: {
    relocate () {
      document.querySelectorAll('[id=ball]').forEach(element => {
        const placementX = Math.floor(Math.random() * Math.floor(100))
        element.style.setProperty('--relocation-distanceX', placementX + '%')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        const placementY = Math.floor(Math.random() * Math.floor(100))
        element.style.setProperty('--relocation-distanceY', placementY + '%')
      })
    },
    onClose () {
      this.$store.dispatch('ui/closeDialog')
    },
    onCloseDialogConfirm () {
      this.$store.dispatch('ui/closeDialogConfirm')
    }
  }
})
</script>
<style lang="scss">
.v-dialog{
  background: #fff;
  height:450px;
  width:700px !important;
  border-radius: 5% !important;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color:#4974a5;
  border: 4px solid #4974a5;
  font-size: 12px;
  padding: 20px;
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
}
.show {
  &-enter,
    &-leave-to {
        transform: translateX(-100%) translateY(-100%);
        transition: all .7s ease-in 0s
    }
    &-enter-active,
    &-leave-active
    {
        transition: transform 1.1s ease;
    }
}
#ball {
  transition: 1s;
  top: var(--relocation-distanceX) !important;
  left: var(--relocation-distanceY) !important;
}
</style>
