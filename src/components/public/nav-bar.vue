<template>
  <div class="navigate">
    <nav>
      <div class="logo">
        <img src alt>
      </div>
      <ul>
        <li v-for="n in navs" v-bind:key="n.key" class="c-pointer">
          <router-link class="nav-item" tag="li" :to="n.link">
            <font-awesome-icon :icon="n.icon"/>
            <p class="nav-text">{{n.title}}</p>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="logout">
      <button @click="logout">
        <font-awesome-icon :icon="'sign-out-alt'"/>
        <p class="nav-text">Đăng xuất</p>
      </button>
    </div>
  </div>
</template>

<script>
import { AuthService } from "../../service/authService.js";
const authService = new AuthService();

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
  props: ["navs"],
  methods: {
    isActive: menuItem => {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    },
    logout() {
      authService.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigate {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  button,
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
  .logout {
    text-align: center;
    button {
      margin: 20px;
      width: 40px;
      height: 40px;
      color: white;
      &:hover {
        color: orange;
        border: 1px solid orange;
      }
    }
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
