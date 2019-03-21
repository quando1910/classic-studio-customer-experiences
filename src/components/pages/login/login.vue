<template >
  <section class="login" v-if="this.$route.path === viewerPage">
    <el-tabs type="border-card">
      <el-tab-pane label="Đăng Nhập Khách Hàng">
        <div class="content-dialog">
          <el-form ref="form" :model="form" label-width="120px">
            <el-input placeholder="Mã hợp đồng *" v-model="form.mhd" class="m-b-20"></el-input>
            <el-input placeholder="Số Điện Thoại *" v-model="form.sdt" class="m-b-20"></el-input>
            <el-row>
              <el-col :span="12">
                <el-button class="w-100 boder-right-none" type="primary" @click="onSubmit">Đăng Nhập</el-button>
              </el-col>
              <el-col :span="12">
                <el-button class="w-100 boder-left-none" @click="comeBack">Trở về</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Đăng Nhập Nhân Viên">
        <div class="content-dialog">
          <el-form ref="form" :model="form" label-width="120px">
            <el-input placeholder="Nhập đia chỉ email *" v-model="form.email" class="m-b-20"></el-input>
            <el-input placeholder="nhập mật khẩu *" v-model="form.password" class="m-b-20"></el-input>
            <el-row>
              <el-col :span="12">
                <el-button
                  class="w-100 boder-right-none"
                  type="primary"
                  @click="loginUser"
                >Đăng Nhập</el-button>
              </el-col>
              <el-col :span="12">
                <el-button class="w-100 boder-left-none" @click="comeBack">Trở về</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Đăng Ký">
        <div class="content-dialog">
          <el-form ref="form" :model="form" label-width="120px">
            <el-input placeholder="Họ và Tên *" v-model="form.mhd" class="m-b-20"></el-input>
            <el-input placeholder="Số Điện Thoại *" v-model="form.mhd" class="m-b-20"></el-input>
            <el-input placeholder="Địa Chỉ *" v-model="form.mhd" class="m-b-20"></el-input>
            <el-input placeholder="Link Facebook *" v-model="form.mhd" class="m-b-20"></el-input>
            <el-row>
              <el-col :span="12">
                <el-button class="w-100 boder-right-none" type="primary" @click="onSubmit">Tạo mới</el-button>
              </el-col>
              <el-col :span="12">
                <el-button class="w-100 boder-left-none" @click="comeBack">Trở về</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import { APIService } from "../../../service/apiService.js";
import { AuthService } from "../../../service/authService.js";

const apiService = new APIService();
const authService = new AuthService();

export default {
  components: {},
  mounted() {
    // console.log(this.$route.path);
  },
  data() {
    return {
      viewerPage: "/login",
      form: {
        mhd: "", // ma hop dong
        sdt: "", // so dien thoai
        email: "hoang@mail.com",
        password: "12345678",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    },
    loginMember() {
      const { mhd, sdt } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push("/");
      });
    },
    loginUser() {
      const { email, password } = this.form;
      apiService.loginUser({ email, password }).then(() => {
        const path = authService.getToPath();
        if (path) {
          this.$router.push(`${path}`);
        } else {
          this.$router.push("/home");
        }
      });
    },
    comeBack() {
      this.$router.push("/home");
    }
  },
  create: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
