<template>
  <div class="sr-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.sr-container {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  padding: 10px;

  justify-content: center;
  align-items: center;
}
</style>
