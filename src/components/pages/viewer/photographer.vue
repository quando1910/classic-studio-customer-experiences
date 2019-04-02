<template>
  <section id="photographers" class="show-out">
    <h2 class="title-form">Thêm thợ chụp</h2>

    <el-form
      v-loading="loading"
      ref="formAddPhotographer"
      :model="formAddPhotographer"
      label-width="120px"
    >
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content laber-photographers">Tên</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-input class="input-photographers" v-model="formAddPhotographer.name"></el-input>
        </el-col>
      </el-row>
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content laber-photographers">Số điện thoại</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-input class="input-photographers" v-model="formAddPhotographer.phone"></el-input>
        </el-col>
      </el-row>
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content laber-photographers">Vai trò</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-input class="input-photographers" v-model="formAddPhotographer.role"></el-input>
        </el-col>
      </el-row>
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content laber-photographers">Đia chỉ</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-input class="input-photographers" v-model="formAddPhotographer.address"></el-input>
        </el-col>
      </el-row>
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content laber-photographers">Mô tả</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-input class="input-photographers" v-model="formAddPhotographer.description"></el-input>
        </el-col>
      </el-row>
      <el-row class="p-20 alige-center">
        <el-button
          class="w-100"
          type="primary"
          @click="handelCreate"
          plain
          :disabled="loading"
        >{{this.id ? 'Sửa' : 'Tạo nhân'}} viên mới</el-button>
      </el-row>
    </el-form>
  </section>
</template>

<script>
import { APIService } from "../../../service/apiService.js";
import { API_URL_DEV, END_POINT } from "../../../service/apiRegister.js";
import { format } from "date-fns";
const api = new APIService();

export default {
  data() {
    return {
      loading: false,
      formAddPhotographer: {
        name: null,
        phone: null,
        avatar: null,
        date_join: null,
        role: null,
        description: null,
        address: null
      }
    };
  },
  mounted() {
    // this.id = this.$router.history.current.params.id;
    // console.log(this.id);
    // if (this.id) {
    //   api.get([END_POINT.photographers, this.id]).then(data => {
    //     console.log(data);
    //   });
    // }
  },
  filters: {},
  methods: {
    handelCreate() {
      api.post([END_POINT.photographers], this.formAddPhotographer).then(
        data => {
          this.loading = false;
          this.$router.push(`/viewer/photographers`);
        },
        err => {
          this.loading = false;
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
