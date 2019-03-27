<template>
  <div class="inventory">
    <h1></h1>
    <nav-bar :navs="navs"/>
    <div class="inventory-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { APIService } from "../../../service/apiService.js";

const apiService = new APIService();

export default {
  components: {},
  data() {
    return {
      viewerPage: "/inventory",
      navs: [
        {
          title: "Home",
          icon: "home",
          link: "/home"
        },
        {
          title: "Tình trạng",
          icon: "box-open",
          link: "/inventory/status"
        }
      ]
    };
  },
  // mounted() {
  //   console.log(this.$route.path);
  // },
  // updated() {
  //   // if (viewerPage =) {

  //   // }
  //   console.log(this.$route.path);
  // },
  methods: {
    onSubmit() {
      console.log("submit!");
      apiService.getContacts().then(data => {
        console.log(data);
      });
    }
  },
  create: {
    getContacts() {
      console.log("111111");
      apiService.getContacts().then(data => {
        console.log(data);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
