<template>
  <div class="navigate">
    <div class="logo">
      <img src alt>
    </div>
    <div>menu</div>
    <nav>
      <ul>
        <li class="nav-item" :class="{ active: isActive(1) }">
          <a v-scroll-to="'#contract'" @click="setActive(1)">
            <font-awesome-icon icon="file-contract"/>
            <p class="nav-text">Thông Tin Hợp Đồng</p>
          </a>
        </li>
        <li class="nav-item" :class="{ active: isActive(2) }">
          <a v-scroll-to="'#list-user'" @click="setActive(2)">
            <font-awesome-icon icon="list"/>
            <p class="nav-text">Danh Sách Lớp</p>
          </a>
        </li>
        <li class="nav-item" :class="{active: isActive(3)}">
          <a v-scroll-to="'#info-user'" @click="setActive(3)">
            <font-awesome-icon icon="users"/>
            <p class="nav-text">Dịch Vụ Cá Nhân</p>
          </a>
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
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    },
    handleScroll: () => {
      this.posContract =
        document.getElementById("contract").getBoundingClientRect().top +
        window.scrollY;
      this.posInfo =
        document.getElementById("info-user").getBoundingClientRect().top +
        window.scrollY;
      this.posList =
        document.getElementById("list-user").getBoundingClientRect().top +
        window.scrollY;
      switch (true) {
        case this.posContract <= window.scrollY &&
          window.scrollY < this.posList:
          this.activeItem = 1;
          break;
        case this.posList <= window.scrollY && window.scrollY < this.posInfo:
          this.activeItem = 2;
          break;
        case this.posInfo <= window.scrollY:
          this.activeItem = 3;
          break;
        default:
          break;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
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
        transition: 0.6s;
        opacity: 1;
        transform: translateX(20%);
      }
    }
  }
  .nav-text {
    color: white;
    background-color: black;
    position: absolute;
    left: 40px;
    top: 0;
    padding: 10px;
    margin: 0;
    width: 145px;
    opacity: 0;
    border-radius: 5px;
    cursor: pointer;
  }
}
.active {
  border: 1px solid orange !important;
  a {
    color: orange !important;
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
