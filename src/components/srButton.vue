<template>
  <button
    ref="button"
    :class="{ large: large, medium: medium, outlined: outlined }"
    class="color-red"
    :disabled="disabled"
    @click="emitClick()"
  >
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
    outlined: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "white",
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // console.log(this.$refs.button.getProperty('class'))
    this.$refs.button.style.setProperty("background", "#ffffff80");
  },
  methods: {
    emitClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin: 0px auto;
  border-radius: 10px 5px 10px 5px;
  // background: $white;
  color: #000;
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

  &.color-#{ds} {
    background: #{ds};
  }
  &:hover {
    // backdrop-filter: opacity(0.3);
    background: #fff;
    border: 0.25px solid #000000;
    // color: $primary;
  }

  &.outlined {
    background: $white;

    &:hover {
      background: #fff;
      border-color: $primary;
      color: $primary;
    }
  }
}
</style>
