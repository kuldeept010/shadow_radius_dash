<template>
  <li class="list-item">
    <div class="item-content">
      <a v-if="staticLink != null" :href="staticLink"> <slot></slot></a>
      <sr-click-content @click="goTo(to)" v-else
        ><slot></slot
      ></sr-click-content>
    </div>
  </li>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function goTo(address) {
      router.push(address);
    }
    return { goTo };
  },
  props: {
    staticLink: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.item-content {
  font-size: 14px;
  font-family: $font-family;
  padding: 4px 16px;
  cursor: pointer;
  user-select: none;

  &:hover,
  a:hover {
    background: $background;
    color: $primary;
    a {
      color: $primary;
    }
  }
  a,
  &:visited {
    width: 100%;
    text-decoration: none;
    color: #000;
  }
}
</style>
