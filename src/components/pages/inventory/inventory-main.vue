<template>
  <section id="list-user" class="show-out">
    <div class="inventory-title">
      <h2>Danh sách sản phẩm</h2>
      <el-button type="warning" @click="dialogVisible = true" icon="el-icon-plus" round></el-button>
    </div>
    <el-dialog title="Thêm sản phẩm mới" :visible.sync="dialogVisible" width="30%" class="w-dialog">
      <el-input placeholder="Tên sản phẩm *" class="m-b-20"></el-input>
      <el-input placeholder="Số lượng *" class="m-b-20"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Huỷ</el-button>
        <el-button type="primary" @click="dialogVisible = false">Thêm</el-button>
      </span>
    </el-dialog>
    <el-table
      :data="tableData"
      :default-sort="{prop: 'date', order: 'descending'}"
      style="width: 100%"
    >
      <el-table-column prop="prod" label="Sản phẩm" sortable width="180"></el-table-column>
      <el-table-column prop="amount" label="Tổng số lượng" width="180"></el-table-column>
      <el-table-column prop="crunentAmount" label="Số lượng hiện tại" width="180"></el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  mounted() {},
  data: function() {
    return {
      dialogVisible: false,
      tableData: [
        {
          prod: "Áo dài",
          amount: 100,
          crunentAmount: 40
        },
        {
          prod: "Áo vest",
          amount: 100,
          crunentAmount: 40
        },
        {
          prod: "Đồ nông dân",
          amount: 100,
          crunentAmount: 40
        },
        {
          prod: "Đồ lao động",
          amount: 100,
          crunentAmount: 40
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
    // handleClose(done) {
    //   this.$confirm("Are you sure to close this dialog?")
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {});
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
