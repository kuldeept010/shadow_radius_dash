<template>
  <div :class="classes">
    <label v-show="label != ''">{{ label }}</label>
    <div :class="({}, 'wrapper')">
      <span v-if="prefix != ''" class="prefix">{{ prefix }}</span>
      <input
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
        class="bottom-border"
      />
      <sr-icon v-if="icon != ''" :icon="icon" class="icon2" />
    </div>
  </div>
</template>

<script>
import srIcon from "@/components/srIcon.vue";
export default {
  computed: {
    classes: function () {
      let cls = ["field"];

      // field class
      if (this.label != "") cls.push("has-label");
      //dense class
      if (this.dense) cls.push("dense");

      return cls.join(" ");
    },
  },
  components: {
    srIcon,
  },
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
    dense: {
      type: Boolean,
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
  box-shadow: 0px 3px 6px #00000029;
  &.has-label {
    padding: 8px 8px;
  }

  &.dense {
    padding: 8px;
    border-radius: 10px 5px;
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

  .icon {
    color: #b2b2b2;
  }

  &:focus,
  &:focus-within {
    .icon {
      color: #000;
    }
  }
}
input {
  font-size: 14px;
  border: none;
  font-family: "Poppins", sans-serif;
  outline: none;
  // min-width: 300px;
  border-bottom: 1px solid transparent;

  &:active,
  &:focus,
  &:focus-within {
    animation: pulse 0.3s forwards;
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
  font-weight: 300;
}
</style>
