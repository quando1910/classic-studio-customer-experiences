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
                <div class="meta-contract">
                  <p>
                    <b class="yellow"><font-awesome-icon :icon="'sun'"/></b>
                    Tổng số show: {{ props.row.contracts.length }}
                  </p>
                  <p>
                    <b class="yellow"><font-awesome-icon :icon="'graduation-cap'"/></b>
                    Thuê đồ combo: {{ props.row.contracts.map(x => x.packages.filter(x => x.kind_package === 1)[0]).filter(x => x != null).length }}</p>
                  <p>
                    <b class="yellow"><font-awesome-icon :icon="'tshirt'"/></b>
                    Thuê đồ concept: {{ props.row.city }}</p>
                  <p>
                    <b class="yellow"><font-awesome-icon :icon="'star'"/></b>
                    Chụp đêm: {{ props.row.contracts.map(x => x.packages.filter(x => x.kind_package === 2)[0]).filter(x => x != null).length }}</p>
                  <p>
                    <b class="yellow"><font-awesome-icon :icon="'video'"/></b>
                    Video: {{ props.row.contracts.map(x => x.packages.filter(x => x.kind_package === 3)[0]).filter(x => x != null).length }}</p>
                  <p>
                    <b class="yellow"><font-awesome-icon :icon="'campground'"/></b>
                    Trang trí: {{ props.row.contracts.map(x => x.packages.filter(x => x.kind_package === 4)[0]).filter(x => x != null).length }}</p>
                     <p>
                  <b class="yellow"><font-awesome-icon :icon="'id-card'"/></b>
                    Số thợ dự kiến: {{ props.row.contracts.map(x => Math.round(x.total_member/20)).reduce((x,y) => x+y) + props.row.contracts.map(x => x.packages.filter(x => x.kind_package === 3)[0]).filter(x => x != null).length }}</p>
                </div>
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
                  <b :class="item.packages.filter(x => x.kind_package === 0 || x.kind_package === 1 ).length ? 'yellow' : ''">
                    <font-awesome-icon :icon="'sun'"/>
                    <font-awesome-icon v-if="item.packages.filter(x => x.kind_package === 1 ).length" :icon="'graduation-cap'"/>
                  </b>
                  <b :class="item.packages.filter(x => x.kind_package === 2).length ? 'orange' : ''"><font-awesome-icon :icon="'star'"/></b>
                  <b :class="item.packages.filter(x => x.kind_package === 3).length ? 'red' : ''"><font-awesome-icon :icon="'video'"/></b>
                  <b :class="item.packages.filter(x => x.kind_package === 4).length ? 'green' : ''"><font-awesome-icon :icon="'campground'"/></b>
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
  .red {
    color: #d6336c;
  }
  .yellow {
    color: #f2b911;
  }
  .orange {
    color: #f77e05;
  }
  .green {
    color: #82b440
  }
  .meta-contract {
    p {
      margin-top: 5px;
    }
  }
}
</style>
