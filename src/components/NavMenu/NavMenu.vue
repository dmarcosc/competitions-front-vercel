<template>
  <div :class="{'nav-menu' : !isMobile, 'nav-menu mobile' : isMobile}" @click="handleMobileMenu()">
    <button class="logo-img" @click="toHome()">
      <BlueBall small class="logo-ball-big" />
      <BlueBall small class="logo-ball-small" />
    </button>
    <ul class="nav-list">
      <li class="nav-items" @click="toHome()">
        <i class="fas fa-home fa-lg" />
        <span :class="{'active' : route==='Home'}">{{ $t('menu.home') }}</span>
      </li>
      <li class="nav-items" @click="toProfile()">
        <i class="fas fa-user fa-lg" /><span :class="{'active' : route==='Profile'}">{{ $t('menu.profile') }}</span>
      </li>
      <li class="nav-items" @click="toApply()">
        <i class="fas fa-search-dollar fa-lg" /><span :class="{'active' : route==='Apply'}">{{ $t('menu.apply') }}<br> {{ $t('menu.now') }}</span>
      </li>
      <li class="nav-items" @click="toCreate()">
        <i class="fas fa-city fa-lg" /><span :class="{'active' : route==='Create'}">{{ $t('menu.create') }} <br> {{ $t('menu.contest') }}</span>
      </li>
    </ul>
    <div class="bottom-nav">
      <img class="menu-img" src="@/assets/images/menu.svg">
      <Button secondary @click="toSettings">
        {{ $t('menu.settings') }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import BlueBall from '@/components/BlueBall.vue'
export default Vue.extend({
  name: 'NavMenu',
  components: {
    Button,
    BlueBall
  },
  props: {
    route: {
      type: String,
      default: 'Home'
    }
  },
  data () {
    return {
      isMobile: false,
      showMenuMobile: false
    }
  },
  updated () {
    this.hideMobileMenu()
  },
  mounted () {
    this.checkIsMobile()
    this.$nextTick(() => {
      window.addEventListener('resize', this.checkIsMobile)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkIsMobile)
  },
  methods: {
    hideMobileMenu () {
      if (!this.isMobile) this.$store.dispatch('ui/hideMenu')
    },
    checkIsMobile () {
      this.isMobile = window.innerHeight < 600 || window.innerWidth <= 751
    },
    handleMobileMenu () {
      if (this.isMobile) {
        this.$store.dispatch('ui/toggleMenu')
      }
    },
    toHome () {
      this.$router.push('/dashboard').catch((err: string) => { return err })
    },
    toProfile () {
      this.$router.push('/profile').catch((err: string) => { return err })
    },
    toApply () {
      this.$router.push('/apply').catch((err: string) => { return err })
    },
    toCreate () {
      this.$router.push('/create').catch((err: string) => { return err })
    },
    toSettings () {
      this.$store.dispatch('ui/openDialog', {
        settings: true
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
.nav-menu{
  z-index: 9;
  width: 17em;
  margin-right: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  min-height: 90vh;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  &.mobile{
    background-image: url('../../assets/images/favicon.png');
    background-size: 80%;
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    position:fixed;
    top:2%;
    left:3%;
    z-index: 6;
    width:80px;
    height:70px;
    min-height: auto;
    cursor:pointer;
  :nth-child(1),:nth-child(2),:nth-child(3){
    display:none;
  }
  &:active{
    transform: scale(1.06);
  }

}
}
.logo-img{
  border-radius: 30px;
  background: #fff;
  width:130px;
  outline: none;
  &:active{
    transform: scale(1.06);
  }
  &:hover .logo-ball-big{
    transform: translateX(-7px) translateY(7px);
    // transition: 3s;
    -webkit-animation: orbit2 1s linear infinite alternate;
       -moz-animation: orbit2 1s linear infinite alternate;
         -o-animation: orbit2 1s linear infinite alternate;
            animation: orbit2 1s linear infinite alternate;
  }
  &:hover .logo-ball-small{
    transform: translateX(-7px) translateY(-7px);
    // transition: 3s;
    -webkit-animation: orbit1 1s linear infinite alternate;
       -moz-animation: orbit1 1s linear infinite alternate;
         -o-animation: orbit1 1s linear infinite alternate;
            animation: orbit1 1s linear infinite alternate;
  }
}
@-webkit-keyframes orbit2 {
from { -webkit-transform:translateX(0px) translateY(0px); }
to   {  -webkit-transform: translateX(-7px) translateY(7px); }
}

@-moz-keyframes orbit2 {
from { -moz-transform:translateX(0px) translateY(0px); }
to   {  -moz-transform:translateX(-7px) translateY(7px); }
}

@-o-keyframes orbit2 {
from { -o-transform: translateX(0px) translateY(0px); }
to   {  -o-transform:translateX(-7px) translateY(7px); }
}
@keyframes orbit2 {
from { transform: translateX(0px) translateY(0px); }
to   {  transform: translateX(-7px) translateY(7px); }
}
@-webkit-keyframes orbit1 {
from { -webkit-transform:translateX(0px) translateY(0px); }
to   {  -webkit-transform: translateX(7px) translateY(-7px); }
}

@-moz-keyframes orbit1 {
from { -moz-transform:translateX(0px) translateY(0px); }
to   {  -moz-transform:translateX(7px) translateY(-7px); }
}

@-o-keyframes orbit1 {
from { -o-transform: translateX(0px) translateY(0px); }
to   {  -o-transform:translateX(7px) translateY(-7px); }
}
@keyframes orbit1 {
from { transform: translateX(0px) translateY(0px); }
to   {  transform: translateX(7px) translateY(-7px); }
}
.logo-ball-big{
  width:65px;
  height: 65px;
  position: relative;
  margin:7px 0px 0px 55px
}
.logo-ball-small{
  width:50px;
  height:50px;
  position: relative;
  margin:0px 0px 7px 10px
}
.menu-img{
  height: 150px;
   margin-bottom: 20px;
}
.fas{
  background: #fff;
  border-radius: 10px;
  height:47px;
  width:47px;
  text-align: center;
  padding-top: 15px;
  margin-right: 8px;
  color:black;
}
.nav-list{
  display:flex;
  flex-direction: column;
  user-select: none;
  margin-left: -1em;
}
.nav-items{
  display:flex;
  min-width:118px;
  align-items: center;
  margin:20px 0px 20px 0px;
  cursor:pointer;
  color:#B1B6C5;
  font-weight: 10;
  line-height: 1.3;
  position: relative;
  overflow: hidden;
  &:hover{
    border-radius: 20px;
    box-shadow: 0 3px 3px 0 rgba( 31, 38, 135, 0.37 );
    //outline:0.4px solid lightgray
  }
  &:active{
    color: #fff !important;
  }
}
.bottom-nav{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
}
.active{
  color:black;
  font-weight: 800;
  &:active{
    color: #fff !important;
  }
}
@media (max-height: 800px) {
.menu-img{
  height:90px;
  margin-bottom: 10px;
}
.fas{
width:40px;
height:40px;
padding-top:12px;
}
.logo-img{
  width:90px;
  height:90px;
    background-image: url('../../assets/images/favicon.png');
    background-size: 80%;
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
}
.logo-ball-small, .logo-ball-big{
  display: none;
}
.nav-items{
  margin:10px 0px;
}
}
@media (min-height: 1200px) {
  .nav-items{
    margin:4em 0px;
  }
}
</style>
