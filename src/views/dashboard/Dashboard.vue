<template>
  <div class="dashboard">
    <NavMenu route="Home" />
    <div class="dashboard-container">
      <div class="dashboard-block">
        <div class="dashboard-card">
          <h1 class="dashboard-title">
            {{ $t('dashboard.titleApply') }}
          </h1>
          <h2 class="dashboard-subtitle">
            {{ $t('dashboard.subtitleApply') }}
          </h2>
          <div class="dashboard-buttons">
            <Button primary @click="toApply">
              {{ $t('buttons.apply') }}
            </Button>
          </div>
        </div>
        <img class="dashboard-img" src="@/assets/images/mirror.svg">
      </div>
      <div class="dashboard-block bottom">
        <div class="dashboard-card">
          <h1 class="dashboard-title">
            {{ $t('dashboard.titleCreate') }}
          </h1>
          <h2 class="dashboard-subtitle">
            {{ $t('dashboard.subtitleCreate') }}
          </h2>
          <div class="dashboard-buttons">
            <Button primary @click="toCreate">
              {{ $t('buttons.create') }}
            </Button>
          </div>
        </div>
        <img class="dashboard-img" :src="factors">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'
import factors from '@/assets/images/factors.svg'

export default Vue.extend({
  name: 'Dashboard',
  components: {
    Button,
    NavMenu
  },
  data () {
    return {
      factors
    }
  },
  methods: {
    toCreate () {
      this.$router.push('/create').catch((err: string) => { return err })
    },
    toApply () {
      this.$router.push('/apply').catch((err: string) => { return err })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.dashboard{
  z-index: 2;
  max-width: 100%;
  width: 100%;
  background: inherit;
  height: 100vh;
  overflow: hidden;
  font-size: 12px;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 5em 2em;
}
.dashboard-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.dashboard-block{
  display:flex;
  align-items: center;
}
.dashboard-card{
  flex-basis: 35%;
}
.dashboard-title{
  color: $primary-color;
  font-size: 29px;
  // margin-bottom:1em;
}
.dashboard-subtitle{
  color:#444;
  color:#fff;
  font-size: 22px;
  margin:1em 0em;
}
.dashboard-buttons{
  padding:1em;
}
.dashboard-img{
  height: 260px;
  margin-left: 7em;
}
@media (max-width: 1150px) {
  .dashboard-card{
    flex-basis: 70%;
  }
.dashboard-img{
  margin-left: .5em;
  }
}
@media (max-width: 900px) {
  .dashboard-img{
    height: 160px;
  }
  .dashboard-subtitle{
   font-size: 17px;
   margin:0em;
  }
  .dashboard-title{
  font-size: 24px;
}
}
@media (max-width: 700px) {
  .dashboard{
    height:100% ;
    min-height: 100vh;
  }
  .dashboard-block{
    flex-direction: column;
    margin-bottom:1.5em;
  }
  .dashboard-card{
  flex-basis: 100%;
  margin:3em 0em;
  }
}
@media (max-width: 400px) {
  .dashboard-img{
    height: 130px !important;
  }
  .dashboard-container{
    padding-left:1.5em;
  }
}
@media (max-height: 650px) {
  .dashboard-img{
    height: 150px;
  }
}
@media (max-height: 850px) {
  .dashboard-subtitle{
   font-size: 17px;
   margin:0em;
  }
  .dashboard-title{
  font-size: 24px;
}
}
@media (min-height: 1200px) {
  .dashboard-subtitle{
   font-size: 29px;
   margin:0em;
  }
  .dashboard-title{
  font-size: 36px;
}
.dashboard-img{
    height: 340px;
  }
}
@media (min-width: 1300px) {
.dashboard-img{
    height: 300px;
    margin-left: 11em;
  }
}
</style>
