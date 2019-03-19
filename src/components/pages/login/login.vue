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
                <el-button class="w-100 boder-left-none" @click="onSubmit">Trở về</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Đăng Nhập Nhân Viên">
        <div class="content-dialog">
          <el-form ref="form" :model="form" label-width="120px">
            <el-input placeholder="Mã Nhân Viên *" v-model="form.mhd" class="m-b-20"></el-input>
            <el-input placeholder="Số Điện Thoại *" v-model="form.sdt" class="m-b-20"></el-input>
            <el-row>
              <el-col :span="12">
                <el-button class="w-100 boder-right-none" type="primary" @click="onSubmit">Đăng Nhập</el-button>
              </el-col>
              <el-col :span="12">
                <el-button class="w-100 boder-left-none" @click="onSubmit">Trở về</el-button>
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
                <el-button class="w-100 boder-left-none" @click="onSubmit">Trở về</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
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
    }
  },
  create: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
