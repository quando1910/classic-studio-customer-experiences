<template>
  <div class="viewer">
    <nav-bar/>
    <router-view/>
    <div class="viewer-login">
      <!-- <div class="form-style">
        <form>
          <fieldset>
            <legend>
              <span class="number">1</span> Đăng Nhập
            </legend>
            <input type="text" name="field1" placeholder="Mã hợp đồng *">
            <input type="email" name="field2" placeholder="Số điện thoại *">
          </fieldset>
          <input type="submit" value="Apply">
        </form>
      </div>-->
      <el-tabs type="border-card">
        <el-tab-pane label="Đăng Nhập">
          <div class="content-dialog">
            <el-form ref="form" :model="form" label-width="120px">
              <el-input placeholder="Mã hợp đồng *" v-model="form.mhd" class="m-b-20"></el-input>
              <el-input placeholder="Số Điện Thoại *" v-model="form.sdt" class="m-b-20"></el-input>
              <el-button class="w-100" type="primary" @click="onSubmit" plain>Đăng Nhập</el-button>
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
              <el-button class="w-100" type="primary" @click="onSubmit" plain>Tạo mới</el-button>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
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
  mounted() {},
  data() {
    return {
      form: {
        mhd: "", // ma hop dong
        sdt: "", // so dien thoai
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
      console.log("submit!");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
