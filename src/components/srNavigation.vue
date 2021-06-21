<template>
  <nav>
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
      <div class="logo-title">Dashboard - Box Shadow & Corner Radius</div>
    </div>
    <span class="items-toggler iconly-Filter"></span>
    <div class="items-right nav-items">
      <sr-text-field
        dense
        placeholder="Search"
        icon="iconly-Search"
        value="Howdy!"
      />
      <sr-avatar adjText="John Doe"
        ><img src="@/assets/img/dashboard-navbar-avatar.png"
      /></sr-avatar>
      <sr-dropdown>
        <template v-slot:activator>
          <span class="iconly-Arrow-Down-2" />
        </template>
        <sr-list>
          <sr-list-item staticLink="/">Logout </sr-list-item>
        </sr-list>
      </sr-dropdown>
    </div>
  </nav>
</template>

<script>
import srTextField from "@/components/srTextField.vue";
import srAvatar from "@/components/srAvatar.vue";
import srList from "@/components/srList.vue";
import srListItem from "@/components/srListItem.vue";
import srDropdown from "@/components/srDropdown.vue";
export default {
  setup() {
    let items = [{ name: "Home" }, { name: "About" }];
    return { items };
  },
  components: {
    srTextField,
    srAvatar,
    srDropdown,
    srList,
    srListItem,
  },
};
</script>
<style lang="scss" scoped>
nav {
  background: #fff;
  box-shadow: 0px 1px 6px #00000016;
  padding: 10px 20px;
  display: flex;
  align-items: center;

  .logo {
    display: inline-flex;
    align-items: center;
    column-gap: 10px;

    img {
      max-height: 50px;
      @media screen and (max-width: 450px) {
        max-height: 40px;
      }
    }

    .logo-title {
      font-size: 20px;
      font-family: $font-family;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 10px;

      @media screen and (max-width: 768px) {
        width: 400px;
        font-size: 18px;
      }

      @media screen and (max-width: 600px) {
        width: 350px;
        font-size: 18px;
      }
      @media screen and (max-width: 450px) {
        width: 200px;
        font-size: 16px;
      }
    }
  }

  .items-toggler {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      margin-left: auto;
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 0px 10px;
  }

  .items-right {
    margin-left: auto;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>
