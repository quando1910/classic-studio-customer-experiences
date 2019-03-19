<template>
  <div class="navigate">
    <div class="logo">
      <img src alt>
    </div>
    <nav>
      <ul>
        <li class="c-pointer">
          <router-link class="nav-item" tag="li" to="/viewer">
            <font-awesome-icon icon="home"/>
            <p class="nav-text">Viewer</p>
          </router-link>
        </li>
        <li class="c-pointer">
          <router-link class="nav-item" tag="li" to="/viewer/contract">
            <font-awesome-icon icon="file-contract"/>
            <p class="nav-text">Thông Tin Hợp Đồng</p>
          </router-link>
        </li>
        <li class="c-pointer">
          <router-link class="nav-item" tag="li" to="/viewer/list-use">
            <font-awesome-icon icon="list"/>
            <p class="nav-text">Danh Sách Lớp</p>
          </router-link>
        </li>
        <li class="c-pointer">
          <router-link class="nav-item" tag="li" to="/viewer/info-user">
            <font-awesome-icon icon="users"/>
            <p class="nav-text">Dịch Vụ Cá Nhân</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 1,
      scrolled: null,
      posContract: 0,
      posInfo: 0,
      posList: 0
    };
  },
  methods: {
    isActive: menuItem => {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    }
  }
  // created() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigate {
  background-color: black;
  color: aliceblue;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li.nav-item {
    margin: 20px;
    border: 1px solid darkgray;
    padding: 10px;
    text-align: center;
    position: relative;
    a {
      color: darkgray;
    }
    &:hover {
      animation: change-radius 0.3s;
      border-radius: 50%;
      a {
        color: white;
      }
      .nav-text {
        transition: 0.3s;
        opacity: 1;
        width: 175px;
      }
    }
  }
  .nav-text {
    color: white;
    background-color: black;
    position: absolute;
    z-index: -10;
    left: 58px;
    top: 0;
    padding: 10px 0;
    margin: 0;
    width: 0;
    opacity: 0;
    border-radius: 5px;
    height: 36px;
    overflow: hidden;
    white-space: nowrap;
  }
}
@keyframes change-radius {
  0% {
    border-radius: 0;
  }
  100% {
    border-radius: 50%;
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
