<template>
  <div class="create">
    <NavMenu route="Create" />
    <div class="create-container">
      <div class="create-titlecard">
        <h1>{{ $t('create.title') }}</h1>
        <span class="create-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      <hr>
      <v-form v-model="isFormValid" @click.prevent>
        <TextField v-model="title"
                   :rules="[rules.required, rules.counter]"
                   :label="$t('create.name')" class="create-tf"
        />
      </v-form>
      <Button primary :disabled="!isFormValid"
              class="create-button"
              @click="toGeneralParams"
      >
        {{ $t('buttons.start') }}
      </Button>
      <img class="create-img" src="@/assets/images/build.svg">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import NavMenu from '../../components/NavMenu/NavMenu.vue'
import TextField from '@/components/TextField.vue'

export default Vue.extend({
  name: 'Create',
  components: {
    Button,
    TextField,
    NavMenu
  },
  data () {
    return {
      title: '',
      isFormValid: false,
      rules: {
        required: (value: any) => !!value || this.$t('validations.required'),
        counter: (value: any) => value.length <= 40 || this.$t('validations.max40')
        // textWhiteSpaces: (value: any) => textWhiteSpaces(value) || 'Alpha'
      }
    }
  },
  methods: {
    toGeneralParams () {
      const contest: any = {
        name: this.title
      }
      this.$store.dispatch('session/updateContest', { contest })
      this.$router.push('/create/generalParams').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.create')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.create{
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
  padding: 5em 2em;
}
.create-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:2em;
}
.create-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.create-info{
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
.create-tf{
  margin:3em 0em;
}
.create-button{
  margin-bottom:2em;
}
.create-img{
height:100px;
float: right;
}
@media (min-width: 750px) {
  .create{
    height: 100vh;
  }
  .create-img{
    height:18rem;
    position:absolute;
    bottom:4em;
    right:4em;
  }
}
@media (max-height: 700px) {
  .create-img{
    height:140px;
  }
}
@media (min-width: 1300px) and (min-height: 800px)  {
  .create-img{
    height:28rem;
  }
}

</style>
