<template>
  <div class="sr-col" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  setup(props) {
    let cls = [];
    cls.push(props.class);

    var size = `col-${props.size}`;
    cls.push(size);

    var classes = cls.join(" ");
    return { classes };
  },
  props: {
    size: {
      type: Number,
      default: 0,
    },
    class: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
.sr-col {
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px 15px;
  margin: 15px;
  padding: 15px;
}
</style>
