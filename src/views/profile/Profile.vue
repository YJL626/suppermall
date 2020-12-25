<template>
  <div>
    <NavBar class="nav-bar">
      <template #center>
        <div>我的</div>
      </template>
    </NavBar>
    <ProfileTop />
    <ProfileWallet />
    <ProfileBottom />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import ProfileTop from "views/profile/childComponents/ProfileTop.vue";
import ProfileWallet from "views/profile/childComponents/ProfileWallet.vue";
import ProfileBottom from "views/profile/childComponents/ProfileBottom.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileTop,
    ProfileWallet,
    ProfileBottom,
  },
};
</script>

<style lang="scss" scope>
@import "assets/css/variable.scss";
.nav-bar {
  background: $tint;
  color: #fff;
  font-size: $font-size + 2px;
}
</style>