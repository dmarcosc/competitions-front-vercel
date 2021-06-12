<template>
  <div class="nav-menu-home" @click="mobileToDashboard()">
    &nbsp;
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavMenuHome',
  methods: {
    mobileToDashboard () {
      this.$store.dispatch('ui/openDialogConfirm', {
        text: this.$t('main.confirm')
      })
      // const text = this.$t('main.confirm')
      // const r = confirm(text.toString())
      // if (r === true) {
      //   this.$router.push('/dashboard').catch((err: string) => { return err })
      // } else {
      // }
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
.nav-menu-home{
  margin-right: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 90vh;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  background-image: url('../../assets/images/favicon.png');
  background-size: 80%;
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  position:fixed;
  top:1%;
  left:2%;
  z-index: 6;
  width:80px;
  height:70px;
  min-height: auto;
  cursor:pointer;
  &:active{
    transform: scale(1.06);
  }
}
</style>
