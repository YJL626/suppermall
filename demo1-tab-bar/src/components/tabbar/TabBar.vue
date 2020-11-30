 <template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#tabBar {
  user-select:none;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  box-shadow: 0px 2px rgba($color: #d5dbc3, $alpha: 0.08);
  background-color: #f3f3f3;

}
</style>


