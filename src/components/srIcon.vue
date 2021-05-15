<template>
  <span :class="icon"></span>
  <span id="slot">
    <slot></slot>
  </span>
</template>

<script>
export default {
  data: () => ({
    icon: "",
  }),
  mounted() {
    this.icon = this.$slots.default()[0].el.data
    document.getElementById("slot").innerHTML = ""
  },
};
</script>

<style lang="scss" scoped>
.k{
  display: none;
}
span{
  font-size: 14px;
}
</style>
