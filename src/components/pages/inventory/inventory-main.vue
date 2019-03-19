<template>
  <section id="list-user" class="show-out">
    <h2 class="title-form">Danh sách lớp</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="Nội Dung" class>
        <el-table
          :data="tableData"
          :default-sort="{prop: 'date', order: 'descending'}"
          style="width: 100%"
        >
          <el-table-column prop="name" label="Họ Tên" sortable width="180"></el-table-column>
          <el-table-column prop="phone" label="Số điện thoại" width="180"></el-table-column>
          <el-table-column prop="address" label="Địa chỉ" :formatter="formatter"></el-table-column>
          <el-table-column prop="facebook" label="Facebook" :formatter="formatter"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="Nội Dung" class>
        <el-table
          :data="tableData"
          height="250"
          :default-sort="{prop: 'date', order: 'descending'}"
          style="width: 100%"
        >
          <el-table-column prop="name" label="Họ Tên" sortable width="180"></el-table-column>
          <el-table-column prop="phone" label="Số điện thoại" width="180"></el-table-column>
          <el-table-column prop="address" label="Địa chỉ" :formatter="formatter"></el-table-column>
          <el-table-column prop="facebook" label="Facebook" :formatter="formatter"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <div class="p-20 border-bottom">
      <h3 class="title-md">Tổng hợp</h3>
      <el-row class="m-b-10">
        <el-col :span="7">
          <div class="grid-content">Tổng nam</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content field-contract">15</div>
        </el-col>
      </el-row>
      <el-row class="m-b-10">
        <el-col :span="7">
          <div class="grid-content label-contract">Tổng nữ</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content field-contract">30</div>
        </el-col>
      </el-row>
      <el-row class="m-b-10">
        <el-col :span="7">
          <div class="grid-content label-contract">áo dai</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content field-contract">12</div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {},
  data: function() {
    return {
      tableData: [
        {
          name: "Nguyên ABC",
          phone: "0905 700 194",
          address: "Đà Nẵng",
          facebook: "https://www.facebook.com/"
        },
        {
          name: "Nguyên ABC",
          phone: "0905 700 194",
          address: "Đà Nẵng",
          facebook: "https://www.facebook.com/"
        },
        {
          name: "Nguyên ABC",
          phone: "0905 700 194",
          address: "Đà Nẵng",
          facebook: "https://www.facebook.com/"
        },
        {
          name: "Nguyên ABC",
          phone: "0905 700 194",
          address: "Đà Nẵng",
          facebook: "https://www.facebook.com/"
        },
        {
          name: "Nguyên ABC",
          phone: "0905 700 194",
          address: "Đà Nẵng",
          facebook: "https://www.facebook.com/"
        },
        {
          name: "Nguyên ABC",
          phone: "0905 700 194",
          address: "Đà Nẵng",
          facebook: "https://www.facebook.com/"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
