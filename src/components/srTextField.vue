<template>
  <div class="caterer">
    <div :class="label != '' ? 'field has-label' : 'field'">
      <label v-if="label != ''">{{ label }}</label>
      <div :class="({}, 'wrapper')">
        <span v-if="prefix != ''" class="prefix">{{ prefix }}</span>
        <input
          :type="inputType"
          :placeholder="placeholder"
          :value="value"
          class="bottom-border"
        />
        <span v-if="icon != ''" :class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    prefix: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    class: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  position: relative;
  background: #fff;
  max-width: fit-content;
  padding: 16px 8px;
  border-radius: 20px 10px 20px 10px;
  box-shadow: $shadow;
  &.has-label {
    padding: 8px 8px;
  }
}
label {
  font-size: 11px;
  font-family: "Poppins", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
  color: #707070;
}
.wrapper {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
input {
  font-size: 14px;
  border: none;
  font-family: "Poppins", sans-serif;
  outline: none;
  min-width: 300px;
  border-bottom: 1px solid transparent;
  :active,
  :focus,
  :focus-within {
    border: none;
    outline: none;
  }

  &:active,
  &:focus,
  &:focus-within {
    animation: pulse 0.3s;
  }

  @keyframes pulse {
    0% {
      border-bottom-width: 0%;
      border-bottom-color: transparent;
    }
    100% {
      border-bottom-width: -webkit-fill-available;
      border-bottom-color: $primary;
    }
  }
}

::placeholder {
  color: #b2b2b2;
}

.icon {
  fill: #b2b2b2;
}
</style>
