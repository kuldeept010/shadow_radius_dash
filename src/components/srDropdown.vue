<template>
  <div class="dr">
    <sr-click-content @click="state.show = !state.show">
      <slot name="activator"></slot>
    </sr-click-content>
    <transition name="fade">
      <div class="holder right" v-if="state.show">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import srClickContent from "@/components/srClickContent.vue";
import { reactive } from "vue";
export default {
  components: {
    srClickContent,
  },
  setup() {
    const state = reactive({ show: false, isMobile: false });
    return { state };
  },
};
</script>

<style lang="scss" scoped>
.holder {
  position: absolute;
  z-index: 20;

  &.right {
    right: 20px;
  }

  &.left {
    left: 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
