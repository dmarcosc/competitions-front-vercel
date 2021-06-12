<template>
  <div class="tf-div">
    <label class="tf-label">{{ label }}</label>
    <v-text-field
      v-model="valueData"
      v-bind="$attrs"
      class="myTextField"
      solo
      @input="e => $emit('input', e)"
      @blur="e => $emit('blur', e)"
    />
  </div>
</template>

<script>

export default {
  name: 'TextField',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      valueData: this.value
    }
  },
  computed: {
    anyValue () {
      const bool = this.valueData !== ''
      return bool
    }
  },
  watch: {
    value (newVal) {
      this.valueData = newVal
    }
  },
  methods: {
    clearValue () {
      this.valueData = ''
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
.tf-label{
  color:$primary-color;
  font-size: 15px;
  font-weight: 700;
}
.myTextField{
  margin-top:10px;
}

</style>
