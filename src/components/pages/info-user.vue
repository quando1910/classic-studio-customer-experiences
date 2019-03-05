<template>
  <section id="info-user">
    <el-form :label-position="'top'" ref="form" :model="form" label-width="120px">
      <el-form-item label="Thời gian thử đồ">
        <el-select class="w-100" v-model="value8" placeholder="Chọn thời gian">
          <el-option
            v-for="item in optionsTimes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Nhập ảnh in">
        <el-select class="w-100" v-model="value8" filterable multiple placeholder="Select">
          <el-option
            v-for="item in optionsImage"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button class="w-100" type="primary" @click="onSubmit" plain>Thực hiện</el-button>
    </el-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      optionsTimes: [
        {
          value: "Sáng - 20/03/2019",
          label: "Sáng - 20/03/2019"
        },
        {
          value: "Chiều - 20/03/2019",
          label: "Chiều - 20/03/2019"
        },
        {
          value: "Sáng - 21/03/2019",
          label: "Sáng - 21/03/2019"
        },
        {
          value: "Chiều - 20/03/2019",
          label: "Chiều - 20/03/2019"
        }
      ],
      optionsImage: [
        {
          value: "a123.png",
          label: "a123.png"
        },
        {
          value: "b123.png",
          label: "b123.png"
        },
        {
          value: "c123.png",
          label: "c123.png"
        },
        {
          value: "d123.png",
          label: "d123.png"
        }
      ],
      value8: [],
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
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
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
