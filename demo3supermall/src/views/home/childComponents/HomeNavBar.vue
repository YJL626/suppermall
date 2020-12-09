<template>
  <navBar class="homeNavBar" background="#FF8198">
    <template v-slot:center>
      <h3>购物街</h3>
    </template>
  </navBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "assets/css/variable";

.homeNavBar {
  color: white;
}
</style>
