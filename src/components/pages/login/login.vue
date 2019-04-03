<template >
  <section class="login" v-if="this.$route.path === viewerPage">
    <el-tabs type="border-card" :value="currentTab">
      <el-tab-pane label="Đăng Nhập Khách Hàng">
        <div class="content-dialog">
          <el-form ref="formMember" :model="formMember" label-width="120px">
            <el-input placeholder="Mã hợp đồng *" v-model="formMember.codeContarct" class="m-b-20"></el-input>
            <el-input placeholder="Số Điện Thoại *" v-model="formMember.phone" class="m-b-20"></el-input>
            <el-row>
              <el-col :span="12">
                <el-button class="w-100 boder-right-none" @click="comeBack">Trở về</el-button>
              </el-col>
              <el-col :span="12">
                <el-button
                  class="w-100 boder-left-none"
                  type="primary"
                  @click="loginMember"
                >Đăng Nhập</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Đăng Nhập Nhân Viên">
        <div class="content-dialog">
          <el-form ref="formUser" :model="formUser" label-width="120px">
            <el-input placeholder="Nhập đia chỉ email *" v-model="formUser.email" class="m-b-20"></el-input>
            <el-input
              placeholder="nhập mật khẩu *"
              v-model="formUser.password"
              class="m-b-20"
              type="password"
            ></el-input>
            <el-row>
              <el-col :span="12">
                <el-button class="w-100 boder-right-none" @click="comeBack">Trở về</el-button>
              </el-col>
              <el-col :span="12">
                <el-button class="w-100 boder-left-none" type="primary" @click="loginUser">Đăng Nhập</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Đăng Ký">
        <div class="content-dialog">
          <el-form ref="formRegister" :model="formRegister" label-width="120px">
            <el-input placeholder="Mã hợp đồng *" v-model="formRegister.mhd" class="m-b-20"></el-input>
            <el-input placeholder="Họ và Tên *" v-model="formRegister.name" class="m-b-20"></el-input>
            <el-input placeholder="Số Điện Thoại *" v-model="formRegister.phone" class="m-b-20"></el-input>
            <el-input placeholder="Địa Chỉ *" v-model="formRegister.address" class="m-b-20"></el-input>
            <el-input placeholder="Link Facebook *" v-model="formRegister.fb" class="m-b-20"></el-input>
            <template>
              <el-select
                v-model="formRegister.gender"
                placeholder="Chọn giới tính *"
                class="m-b-20 w-100"
              >
                <el-option v-for="g in genders" :key="g.value" :label="g.label" :value="g.value"></el-option>
              </el-select>
            </template>
            <el-row>
              <el-col :span="12">
                <el-button class="w-100 boder-left-none" @click="comeBack">Trở về</el-button>
              </el-col>
              <el-col :span="12">
                <el-button
                  class="w-100 boder-right-none"
                  type="primary"
                  @click="registerMember"
                >Tạo mới</el-button>
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
      currentTab: null,
      genders: [
        {
          value: 0,
          label: "Nữ"
        },
        {
          value: 1,
          label: "Nam"
        }
      ],
      formMember: {
        codeContarct: "",
        phone: ""
      },
      formUser: {
        email: "",
        password: ""
      },
      formRegister: {
        mhd: null,
        name: null,
        phone: null,
        address: "",
        fb: "",
        gender: null
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    },
    loginMember() {
      const { codeContarct, phone } = this.formMember;
      authService
        .loginMember({ code: codeContarct, phone_number: phone })
        .then(() => {
          const path = authService.getToPath();
          if (path) {
            this.$router.push(`${path}`);
          } else {
            this.$router.push("/viewer");
          }
        });
    },

    loginUser() {
      const { email, password } = this.formUser;
      authService.loginUser({ email, password }).then(() => {
        const path = authService.getToPath();
        if (path) {
          this.$router.push(`${path}`);
        } else {
          this.$router.push("/viewer");
        }
      });
    },
    registerMember() {
      const { mhd, name, phone, address, fb, gender } = this.formRegister;
      authService
        .registerMember({
          code: mhd,
          name,
          phone_number: phone,
          address,
          link_facebook: fb,
          gender
        })
        .then(v => {
          if (v.status === 200) {
            this.currentTab = "0";
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
