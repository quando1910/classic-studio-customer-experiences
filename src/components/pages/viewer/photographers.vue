<template>
  <section id="contract" class="show-out">
    <div class="title-button m-b-10">
      <h2>Danh sách Thợ chụp</h2>
      <router-link :to="'photographers/add'">
        <el-button type="warning" icon="el-icon-plus" round></el-button>
      </router-link>
    </div>
    <el-table v-loading="loading" :data="tableData" style="width: 100%" @row-click="handleDetail">
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="name" label="Tên" width></el-table-column>
      <el-table-column prop="phone" label="Số điện thoại" width></el-table-column>
      <el-table-column prop="address" label="Địa chỉ" width="180"></el-table-column>
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
      tableData: [],
      loading: true
    };
  },
  mounted() {
    api.get([END_POINT.photographers]).then(
      data => {
        console.log(data);
        this.tableData = data.photographers;
        this.loading = false;
      },
      err => {
        this.loading = false;
        console.log(err);
      }
    );
  },
  methods: {
    handleDetail(row) {
      // this.$router.push(`photographers/${row.id}/edit`);
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
