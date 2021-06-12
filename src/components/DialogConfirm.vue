<template>
  <v-dialog v-bind="$attrs" light
            persistent
  >
    <div class="confirm-dialog">
      <i class="fas fa-info-circle fa-4x" />
      <div>
        {{ text }}
      </div>
    </div>
    <div class="confirm-dialog-buttons">
      <Button terciary class="dialog-button" @click="$emit('close')">
        {{ $t('buttons.no') }}
      </Button>
      <Button primary class="dialog-button" @click="toDashboard()">
        {{ $t('buttons.yes') }}
      </Button>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
export default Vue.extend({
  name: 'DialogConfirm',
  components: {
    Button
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    toDashboard () {
      this.$store.dispatch('ui/closeDialogConfirm')
      this.$router.push('/dashboard')
    }
  }
})
</script>

<style  lang="scss" scoped>
.confirm-dialog{
  margin:-3em 0em 0em 0em;
  padding:0;
  height:280px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.dialog-button{
  height: 40px !important;
  width:120px !important;
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
::v-deep
.v-icon{
  overflow: hidden !important;
}
.confirm-dialog-buttons{
  padding:11px;
display: flex;
justify-content: space-around;
}
</style>
