<template>
  <button
    v-bind="$attrs"
    :class="{'plus-addbtn' : ((plus||minus)&&!disabled),'addbtn--disabled' : disabled}"
    @click="!disabled&&$emit('click')"
  >
    <i v-if="plus" class="fas fa-plus fa-2x" />
    <i v-if="minus" class="fas fa-minus fa-2x" />
    <slot />
  </button>
</template>

<script lang="ts">

export default {
  name: 'AddButton',
  props: {
    plus: {
      type: Boolean,
      default: false
    },
    minus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .plus-addbtn {
    width: 45px;
    user-select: none;
    background-color: #4974a5;
    background-image:
    linear-gradient(to left, rgb(63, 59, 126) 0%, rgb(69, 87, 138) 0%, rgb(93, 141, 196) 100%);
    border:none;
    outline:none;
    height: 43px;
    border-radius: 50%;
    color: #fff;
    font-weight: 600;
    font-size:14px;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all ease 0.1s;
    text-align: center;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .fas{
      color: #fff;
      &:active{
        transform: scale(1.15);
      }

    }
    .addbtn--disabled{
      width: 45px;
    user-select: none;
    background-color: lightgray;
    // background-image:
    // linear-gradient(to left, rgb(63, 59, 126) 0%, rgb(69, 87, 138) 0%, rgb(93, 141, 196) 100%);
    border:none;
    outline:none;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    font-weight: 600;
    font-size:14px;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all ease 0.1s;
    text-align: center;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    }
</style>
