<template>
  <section id="contract" class="show-out">
    <h2 class="title-form">Thông tin hợp đồng</h2>
    <el-table
      :data="tableData"
      :default-sort="{prop: 'id', order: 'ascending'}"
      style="width: 100%"
    >
      <el-table-column prop="id" label="ID" sortable width="80"></el-table-column>
      <el-table-column prop="name" label="Hợp đồng" width="180"></el-table-column>
      <el-table-column prop="group" label="Nhóm/Lớp" width="180"></el-table-column>
      <el-table-column prop="code" label="Mã hợp đồng" width="180"></el-table-column>
      <el-table-column align="right" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleDetail(scope.$index, scope.row)">
            <font-awesome-icon :icon="'search'"/>
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
            <font-awesome-icon :icon="'trash-alt'"/>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import { APIService } from "../../../service/apiService.js";
import { API_URL_DEV, END_POINT } from "../../../service/apiRegister.js";
const api = new APIService();

export default {
  data() {
    return {
      search: "",
      tableData: []
    };
  },
  mounted() {
    api.get([END_POINT.contracts]).then(data => {
      console.log(data);
      this.tableData = data.contracts;
    });
  },
  methods: {
    handleDetail(index, row) {
      this.$router.push(`/viewer/contract/${row.id}`);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
