<template>
  <div :class="{'blue-ball big' : big,'blue-ball small' : small, 'blue-ball medium' : medium}">
    &nbsp;
  </div>
</template>

<script lang="ts">

export default {
  name: 'BlueBall',
  props: {
    big: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.blue-ball{
  position: absolute;
  z-index: 1;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #4974a5;
  background-image:
  linear-gradient(to left, rgb(76, 73, 148) 0%, rgb(75, 99, 165) 0%, rgb(135, 185, 241) 100%);
}
.big{
  width: 200px;
  height: 200px;
}
.small{
  width: 100px;
  height: 100px;
}
.medium{
  width: 150px;
  height: 150px;
}
</style>
