<template>
  <div class="finish">
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
              class="ball1"
    />
    <BlueBall id="ball"
              small
              class="ball2"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              medium
              class="ball5"
    />
    <BlueBall id="ball"
              big
              class="ball5"
    />
    <BlueBall id="ball"
              big
              class="ball5"
    />
    <BlueBall id="ball"
              small
              class="ball5"
    />
    <img class="img-finish" :src="imgfinish" alt="congratulation image">
    <div class="finish-container">
      <div class="finish-container-inner">
        <h1 class="title-finish">
          {{ $t('apply.titleFinish') }}
        </h1>
        <p class="subtitle-finish">
          {{ $t('apply.subtitleFinish') }}<a style="color:#3F3D56; font-weight: 700;" @click="toProfile">{{ $t('apply.subtitleFinish2') }}</a> {{ $t('apply.subtitleFinish3') }}
        </p>
        <Progress
          :transition-duration="2000"
          :radius="50"
          :stroke-width="10"
          stroke-color="#F42A61"
          :value="score.toFixed()"
          style="color: #3F3D56;"
        />
        <Button
          primary
          class="apply-finish-button"
          @click="toHome"
        >
          {{ $t('buttons.accept') }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import BlueBall from '@/components/BlueBall.vue'
import imgfinish from '@/assets/images/finish.svg'
import Progress from 'easy-circular-progress'

export default Vue.extend({
  name: 'ApplyFinish',
  components: {
    Button,
    BlueBall,
    Progress
  },
  props: {
    score: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      imgfinish
    }
  },
  methods: {
    toProfile () {
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('--relocation-distanceX', -150 + 'px')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('--relocation-distanceY', -150 + 'px')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('transition', '.7' + 's')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('transform', 'scale(0.7)')
      })
      setTimeout(() => this.$router.push('/profile').catch((err: string) => { return err }), 500)
    },
    toHome () {
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('--relocation-distanceX', -150 + 'px')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('--relocation-distanceY', -150 + 'px')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('transition', '.7' + 's')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('transform', 'scale(0.7)')
      })
      setTimeout(() => this.$router.push('/dashboard').catch((err: string) => { return err }), 500)
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
.ball1{
  background: rgb(48, 255, 48);
}
.ball2{
  background: #f8cb15;
}
.ball3{
  background: #f51651;
}
.ball4{
 background:#fa51a0;
}
.ball5{
 background:#6057ff;
}
.finish{
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
  // padding: 2em;
}
.finish-container{
  z-index: 5;
  background: rgba( 255, 255, 255, 0.05 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:3em 3em;
  overflow-y: auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100vw;
  height:100vh;
}
.finish-container-inner{
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 5.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:5em 3em;
  overflow-y: auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-finish {
  height:28rem;
  position: absolute;
  z-index: 6;
  top:28%;
  left:61%;
}
.title-finish{
  font-size: 28px;
  text-align: center;
  color:#3F3D56;
}
.subtitle-finish{
  max-width:350px;
  font-size: 16px;
  color:#fff;
  margin:1em;
  text-align: center;
}
.apply-finish-button{
  margin-top: 1em;
  background:#fff;
  color:#3F3D56
}
::v-deep
.apply-finish-button.primary-btn .shine{
  background: #F42A61 !important;
}
@media (min-width: 750px) {
  .finish{
    height: 100vh;
  }
.title-finish{
    font-size: 38px;
  }
  .subtitle-finish{
    font-size: 20px;
  }
}
@media (max-width: 1050px) {
  .img-finish {
  height:15rem;
  top:47%;
  left:61%;
  }
}
@media (max-width: 650px) {
.img-finish {
    display:none;
  }
}

</style>
