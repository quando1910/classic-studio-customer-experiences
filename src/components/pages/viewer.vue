<template>
  <div class="viewer">
    <NavBar/>
    <Contracts/>
    <ListUser/>
    <InfoUser/>
  </div>
</template>

<script>
import NavBar from "../public/nav-bar";
import Contracts from "./contracts";
import ListUser from "./list-user";
import InfoUser from "./info-use";
export default {
  components: {
    NavBar,
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
