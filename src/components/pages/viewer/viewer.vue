<template>
  <div class="viewer">
    <nav-bar :navs="navs"/>
    <div class="viewer-content" v-if="this.$route.path !== viewerPage">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { APIService } from "../../../service/apiService.js";
import Contracts from "./contracts";
import ViewConfirm from "./view-confirm";
import ListUser from "./list-user";
import InfoUser from "./info-user";

const apiService = new APIService();

export default {
  components: {
    Contracts,
    ListUser,
    InfoUser,
    ViewConfirm
  },
  data() {
    return {
      navs: [
        {
          title: "Home",
          icon: "home",
          link: "/home"
        },
        {
          title: "Danh sách Hợp Đồng",
          icon: "file-contract",
          link: "/viewer/contract"
        },
        {
          title: "Danh Sách Lớp",
          icon: "list",
          link: "/viewer/list-use"
        },
        {
          title: "Dịch Vụ Cá Nhân",
          icon: "users",
          link: "/viewer/info-user"
        }
      ],
      viewerPage: "/viewer"
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
