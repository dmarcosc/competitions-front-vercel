<template>
  <v-file-input
    v-bind="$attrs"
    width="200px"
    dense
    outlined
    color="#4979a5"
    class="file-input"
    :placeholder="$t('buttons.upload')"
    @click="!disabled&&$emit('click')"
    @change="!disabled&&$emit('change')"
  />
</template>

<script lang="ts">

export default {
  name: 'Input',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.file-input{
  // min-width: 200px;
  width: 200px;
  overflow: hidden;
  cursor: pointer !important;
}
::v-deep
.v-input__slot{
  height: 45px;
}
::v-deep
.v-input__prepend-outer{
  overflow: hidden;
}
::v-deep
.v-input__append-inner{
  overflow: hidden;
  min-width: 23px;
}
::v-deep
.v-file-input__text{
   overflow: hidden;
}
::v-deep
.v-input__icon.v-input__icon--prepend{
overflow: hidden;
}
::v-deep
.v-input__icon.v-input__icon--clear{
overflow: hidden;
}
  .primary-btn {
    width: 160px;
    user-select: none;
    background-color: #4974a5;
    background-image:
    linear-gradient(to left, rgb(63, 59, 126) 0%, rgb(69, 87, 138) 0%, rgb(93, 141, 196) 100%);
    border:none;
    outline:none;
    height: 49px;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    font-size:15px;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all ease 0.1s;
    text-align: center;
    position: relative;
    overflow: hidden;
      &:active{
        transform: scale(1.05);
      }
      &:hover .shine {
      transform: skewX(20deg) translateX(500px);
      }
      &.terciary{
        background: #fff !important;
        color: #4974a5 !important;
        border: 2px solid #4974a5;
      }
    }
.shine {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: -70px;
  height: 98px;
  width: 50px;
  background: rgba(255, 255, 255, 0.4);
  transition: all .7s linear;
  transform: skewX(20deg) translateX(0);
  &.terciary{
    background: #ebecee !important;
  }
}
  .secondary-btn {
  width: 130px;
  user-select: none;
  background: none;
  border: 2px solid #444;
  height: 41px;
  outline: none;
  border-radius: 10rem;
  color: #4974A5;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  margin: 0;
  z-index: 1;
  backface-visibility: hidden;
  &:active{
        // width:136px;
        transform: scale(1.1)
      }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:transparent;
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 0%;
    border-radius: 50rem;
    background-image: linear-gradient(to left, rgb(63, 59, 126) 0%, rgb(69, 87, 138) 0%, rgb(93, 141, 196) 100%);
    transition: all .3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    background: none;
    border: 2px solid #fff;
    &:before {
      width: 100%;
      height: 100%;
    }
  }
}

</style>
