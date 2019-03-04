<template>
  <section id="info-user">
    <h1>User info</h1>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Mã hợp đồng">
        <el-input placeholder="Mã hợp đồng *" v-model="form.mhd" class="m-b-20"></el-input>
      </el-form-item>
      <el-form-item label="Activity name">
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button class="w-100" type="primary" @click="onSubmit" plain>Đăng Nhập</el-button>
    </el-form>
  </section>
</template>

<script>
export default {
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
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#info-user {
  height: 800px;
  background-color: cadetblue;
}
</style>
