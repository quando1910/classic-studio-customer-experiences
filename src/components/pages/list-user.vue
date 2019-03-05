<template>
  <section id="list-user">
    <h2 class="title-form">Danh sách lớp</h2>
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
