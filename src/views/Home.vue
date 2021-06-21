<template>
  <div class="home">
    <div class="caterer">
      <div class="heading text-center">
        <h1 class="title">Shadow &amp; Radius Dashboard</h1>
        <div class="desc">
          Dashboard design made by modifications to box-shadow and
          border-radius.
        </div>
      </div>
      <div class="row py-4">
        <sr-button @click="goToAttributions()"> Attributions</sr-button>
        <sr-button @click="goToComponents()"> Components</sr-button>
        <sr-button @click="goToDashboard()">
          Dashboard <sr-icon>iconly-Discovery</sr-icon></sr-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import srButton from "@/components/srButton.vue";
import srIcon from "@/components/srIcon.vue";
export default {
  name: "Home",
  components: {
    srButton,
    srIcon,
  },
  methods: {
    goToAttributions() {
      this.$router.push("/attributions");
    },
    goToComponents() {
      this.$router.push("/components");
    },
    goToDashboard() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: $font-family;
  font-weight: 400;
}
.desc {
  font-family: $font-family;
}
.caterer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  box-shadow: $shadow;
  border-radius: 10px 20px;
}
</style>
