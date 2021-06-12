<template>
  <div class="error">
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <img class="img-404" :src="img404" alt="error 404">
    <div class="error-container">
      <h1 class="title-404">
        {{ $t('error.title404') }}
      </h1>
      <p class="subtitle-404">
        {{ errorType }}
      </p>
      <Button
        primary
        @click="relocateError"
      >
        {{ $t('buttons.back') }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import img404 from '@/assets/images/error.svg'
import BlueBall from '@/components/BlueBall.vue'

export default Vue.extend({
  name: 'Error404',
  components: {
    Button,
    BlueBall
  },
  props: {
    errorType: {
      type: String,
      default: 'unknown error has occurred'
    }
  },
  data () {
    return {
      img404
    }
  },
  methods: {
    relocateError () {
      const top = document.querySelector('.img-404')?.getBoundingClientRect().top ?? -300
      const left = document.querySelector('.img-404')?.getBoundingClientRect().left ?? -400
      // debugger
      if (window.innerWidth > 1050) {
        document.querySelectorAll('[id=ball]').forEach(element => {
          (element as any).style.setProperty('--relocation-distanceX', top + 80 + 'px')
        })
        document.querySelectorAll('[id=ball]').forEach(element => {
          (element as any).style.setProperty('--relocation-distanceY', left + 200 + 'px')
        })
      } else if (window.innerWidth > 650) {
        document.querySelectorAll('[id=ball]').forEach(element => {
          (element as any).style.setProperty('--relocation-distanceX', top + 'px')
        })
        document.querySelectorAll('[id=ball]').forEach(element => {
          (element as any).style.setProperty('--relocation-distanceY', left + 50 + 'px')
        })
      } else {
        document.querySelectorAll('[id=ball]').forEach(element => {
          (element as any).style.setProperty('--relocation-distanceX', -150 + 'px')
        })
        document.querySelectorAll('[id=ball]').forEach(element => {
          (element as any).style.setProperty('--relocation-distanceY', -150 + 'px')
        })
      }
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('transition', '.7' + 's')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('transform', 'scale(0.7)')
      })
      setTimeout(() => this.$router.back(), 500)
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.error{
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
  padding: 2em;
}
.error-container{
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:5em 3em;
  overflow-y: auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-404 {
  height:28rem;
  position: absolute;
  z-index: 6;
  top:28%;
  left:58%;
}
.title-404{
  font-size: 36px;
  text-align: center;
}
.subtitle-404{
  font-size: 20px;
  color:#fff;
  margin:2em 2em;
  text-align: center;
}

@media (min-width: 750px) {
  .error{
    height: 100vh;
  }
}
@media (max-width: 1050px) {
  .img-404 {
  height:15rem;
  top:47%;
  left:61%;
  }
}
@media (max-width: 650px) {
.img-404 {
    display:none;
  }
}

</style>
