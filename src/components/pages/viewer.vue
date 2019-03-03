<template>
  <div class="viewer">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import Contracts from "./contracts";
import ListUser from "./list-user";
import InfoUser from "./info-user";
export default {
  components: {
    Contracts,
    ListUser,
    InfoUser
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.viewer {
  padding-left: 90px;
}
</style>
