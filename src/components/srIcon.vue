<template>
  <span v-if="icon != ''" :class="icon" class="icon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: "md-icon",
    },
  },
  computed: {
    classes: function () {
      var cls = [];

      cls.push(this.icon);
      cls.push("icon");
      cls.push("size");

      return cls.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
// @import url('../scss/iconly.scss');
</style>
