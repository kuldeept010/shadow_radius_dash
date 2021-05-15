<template>
  <button :class="{ large: large, medium: medium }" :disabled="disabled" @click="emitClick()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    //size props
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    //attributes
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin: 0px auto;
  border-radius: 10px 5px 10px 5px;
  background: $primary;
  color: #fff;
  padding: 8px 16px;
  border: 0.25px solid #70707080;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  box-shadow: $shadow;
  &.small {
    font-size: 12px;
    padding: 5px 15px;
  }

  &.large {
    font-size: 16px;
    padding: 10px 24px;
  }
  &.outlined {
    background: transparent;
    color: #000;
  }
  &:hover {
    backdrop-filter: opacity(0.3);
    background: #fff;
    border-color: $primary;
    color: $primary;
  }
}
button:focus,
button:active {
  border-color: $primary;
  outline: none;
}
</style>
