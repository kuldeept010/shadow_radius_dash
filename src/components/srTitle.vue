<template>
  <div class="h1" :class="classes"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.h1 {
  font-family: $font-family;
  margin: 0px;
  font-size: 20px;
  padding: 5px 10px 5px;
  font-weight: 400;
}
</style>
