<template>
  <section id="contract" class="show-out date-contracts">
    <div class="m-b-10">
      <el-row class="w-100">
        <el-col :span="19">
          <h2>Danh sách hợp đồng</h2>
        </el-col>
        <el-col :span="5">
          <router-link :to="'contract/add'">
            <el-button type="warning" icon="el-icon-plus">Tạo hợp đồng</el-button>
          </router-link>
        </el-col>
      </el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="Lịch chụp">
          <el-table v-loading="loading" :data="dateContracts" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <p>State: {{ props.row.state }}</p>
                <p>City: {{ props.row.city }}</p>
                <p>Address: {{ props.row.address }}</p>
                <p>Zip: {{ props.row.zip }}</p>
              </template>
            </el-table-column>
            <el-table-column label="ID" width="150">
              <template slot-scope="scope">
                <p>{{scope.row.date_taken | dateFormat}}</p>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="Hợp đồng" width>
              <template slot-scope="scope">
                <p v-for="(item, index) of scope.row.contracts" :key="index"> 
                  <b class="active"><font-awesome-icon :icon="'sun'"/></b>
                  <b class="active"><font-awesome-icon :icon="'star'"/></b>
                  <b class="active"><font-awesome-icon :icon="'video'"/></b>
                  <b class="active"><font-awesome-icon :icon="'campground'"/></b>
                  {{item.name}}</p>
              </template>
            </el-table-column>
            <el-table-column prop="code" label="Mã hợp đồng" width="180"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="Tìm kiếm">
          <div class="title-button m-b-10">
            <el-row class="w-100">
              <el-col :span="16">
                <h3>Tìm kiếm hợp đồng</h3>
              </el-col>
              <el-col :span="8">
                <el-input
                  placeholder="Nhập code hợp đồng"
                  prefix-icon="el-icon-search"
                  v-model="code">
                </el-input>
              </el-col>
            </el-row>
          </div>
          <el-table v-loading="loading" :data="tableData" style="width: 100%" @row-click="handleDetail">
            <el-table-column prop="id" label="ID" width="80"></el-table-column>
            <el-table-column prop="name" label="Hợp đồng" width></el-table-column>
            <el-table-column prop="group" label="Nhóm/Lớp" width="180"></el-table-column>
            <el-table-column prop="code" label="Mã hợp đồng" width="180"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </section>
</template>

<script>
import { APIService } from "../../../service/apiService.js";
import { API_URL_DEV, END_POINT } from "../../../service/apiRegister.js";
import { format, isSameDay } from "date-fns";
const api = new APIService();

export default {
  data() {
    return {
      search: "",
      tableData: [],
      loading: true,
      contracts: [],
      dateContracts: [],
      code: null
    };
  },
  mounted() {
    api.get([END_POINT.contracts]).then(
      data => {
        this.contracts = data.contracts;
        this.tableData = this.contracts;
        this.loading = false;
      },
      err => {
        this.loading = false;
        console.log(err);
      }
    );
    api.get([END_POINT.date_takens]).then(
      data => {
        this.dateContracts = data.date_takens;
        this.tableData = this.contracts;
        this.loading = false;
      },
      err => {
        this.loading = false;
        console.log(err);
      }
    );
  },
  filters: {
    dateFormat: function(value) {
      if (!value) return "";
      return format(new Date(value), "DD/MM");
    },
  },
  watch: {
    code: function(value) {
      if(value && value != '') {
        this.tableData = this.contracts.filter(x => x.code.toLowerCase().indexOf(this.code.toLowerCase()) >=0);
      } else {
        this.tableData = this.contracts;
      }
    }
  },
  methods: {
    handleDetail(row) {
      this.$router.push(`/viewer/contract/${row.id}`);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="scss">
h2 {
  font-size: 30px;
}
h3 {
  font-size: 20px;
}
.date-contracts {
  .expanded {
    background-color: #FFDEAD;
  }
  .el-table .el-table__expanded-cell {
    background-color: #FAFAD2;
  }
  .active {
    color: #d6336c;
  }
}
</style>
