<template>
  <div class="holder">
    <div class="srAvatar">
      <slot></slot>
    </div>
    <div class="avatar-title">{{ adjText }}</div>
  </div>
</template>

<script>
export default {
  name: "srAvatar",
  props: {
    adjText: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.holder {
  display: flex;
  align-items: center;
  padding: 5px;

  .srAvatar {
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    line-height: normal;
    vertical-align: middle;
    overflow: hidden;
    height: 40px;
    width: 40px;

    img {
      border-radius: inherit;
      height: inherit;
      width: inherit;
    }
  }
  .avatar-title {
    font-family: $font-family;
    padding: 0px 5px;
    font-size: 15px;
  }
}
</style>
