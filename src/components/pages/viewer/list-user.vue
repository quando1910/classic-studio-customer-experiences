<template>
  <section id="list-user" class="show-out">
    <h2 class="title-form">Danh sách lớp</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="Nội Dung" class>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="Họ Tên" sortable width="180"></el-table-column>
          <el-table-column prop="phone_number" label="Số điện thoại" width="180"></el-table-column>
          <el-table-column prop="address" label="Địa chỉ"></el-table-column>
          <el-table-column prop="link_facebook" label="Facebook">
            <template slot-scope="scope">
              <span class="text-ellipsis">
                <a :href="scope.row.link_facebook">{{ scope.row.link_facebook }}</a>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="Chọn đồ" class>
        <el-table :data="tableData" height="250" style="width: 100%">
          <el-table-column prop="name" label="Họ Tên"></el-table-column>
          {{tableData.member_properties}}
          <el-table-column
            prop="member_properties"
            :label="mem"
            width="180"
            v-for="(mem, i) in columnProperty"
            v-bind:key="i"
          >
            <template slot-scope="scope">
              <el-select
                :disabled="scope.row.id !== member.id"
                v-if="scope.row.member_properties.length > 0"
                v-model="scope.row.member_properties[i].status"
              >
                <el-option
                  v-for="s in statusProperties"
                  :key="s.value"
                  :label="s.label"
                  :value="s.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="Điều chỉnh" width="100">
            <template slot-scope="scope">
              <el-button
                :disabled="scope.row.id !== member.id"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >Cập nhật</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <div class="p-20 border-bottom">
      <h3 class="title-md">Tổng hợp</h3>
      <el-row class="m-b-10">
        <el-col :span="7">
          <div class="grid-content">Sỉ số lớp</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content field-contract">{{contract.total_member}}</div>
        </el-col>
      </el-row>
      <el-row class="m-b-10">
        <el-col :span="7">
          <div class="grid-content">Tổng nam</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content field-contract">{{contract.male_number}}</div>
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
          <div class="grid-content field-contract">{{contract.female_number}}</div>
        </el-col>
      </el-row>
      <el-row class="m-b-10" c>
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
import { APIService } from "../../../service/apiService.js";
import { END_POINT } from "../../../service/apiRegister.js";
import { format } from "date-fns";
const api = new APIService();

export default {
  mounted() {
    this.member = JSON.parse(localStorage.getItem("MEMBER"));
    this.fetchData();
  },
  data: function() {
    return {
      tableData: [],
      contract: {},
      checked: true,
      member: {},
      columnProperty: [],
      statusProperties: [
        {
          value: 0,
          label: "Chưa Thuê"
        },
        {
          value: 1,
          label: "Đã Thuê"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    checkMember(id) {
      // this.member = JSON.parse(JSON.stringify(localStorage.getItem("MEMBER")));
      // console.log(1, id, this.member);
      // return member.id === id;
    },
    handleEdit(index, row) {
      console.log(index, row.member_properties);
      let member_properties_attributes = [];
      row.member_properties.forEach(v => {
        member_properties_attributes.push({
          id: v.id,
          status: v.status
        });
      });
      api
        .put(
          [
            END_POINT.contracts,
            this.member.contract_id,
            END_POINT.members,
            this.member.id
          ],
          { member_properties_attributes }
        )
        .then(data => {
          console.log(data);
          this.fetchData();
          // this.tableData = data.members;
          // this.contract = data.contract;
          // this.columnProperty = data.contract.properties.map(v => {
          //   if (v) {
          //     return v.name;
          //   }
          // });
        });
    },
    fetchData() {
      api
        .get([END_POINT.contracts, this.member.contract_id, END_POINT.members])
        .then(data => {
          this.tableData = data.members;
          this.contract = data.contract;
          this.columnProperty = data.contract.properties.map(v => {
            if (v) {
              return v.name;
            }
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
