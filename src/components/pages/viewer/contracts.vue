<template>
  <section id="contract" class="show-out">
    <h2 class="title-form">Tạo hợp đồng</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="Thông tin">
        <div>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Tên hợp đồng</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.name"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Số điện thoại</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.phone"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Trường</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-select v-model="contract.school_id" placeholder class="input-contract w-100">
                <el-option
                  v-for="school in schools"
                  :key="school.id"
                  :label="school.name"
                  :value="school.id"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Năm học</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.label"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Địa chỉ</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.address"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Nhóm/Lớp</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.group"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Loại hợp đồng</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.type"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center" v-for="(d,i) in dates" v-bind:key="i">
            <el-col :span="7">
              <div class="grid-content label-contract">Take date {{i+1}}</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="13">
              <el-date-picker
                class="w-100 input-contract input-contract--time"
                v-model="d.date_taken"
                type="date"
                placeholder="Pick a day"
              ></el-date-picker>
            </el-col>
            <el-col :span="2">
              <el-button
                v-if="i === dates.length - 1"
                @click="addDate()"
                class="borer-0"
                icon="el-icon-plus"
              ></el-button>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Tổng thành viên</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.total_member"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Tổng nam</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.male_number"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Tổng nữ</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.female_number"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Package</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-select v-model="package_id" placeholder class="input-contract w-100">
                <el-option v-for="p in packages" :key="p.id" :label="p.name" :value="p.id"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Properties</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-select v-model="property_id" multiple placeholder class="input-contract w-100">
                <el-option v-for="p in properties" :key="p.id" :label="p.name" :value="p.id"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Tiền cọc</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.deposit"></el-input>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Plan">
        <el-tabs @tab-click="click">
          <el-tab-pane
            v-for="(date, index) in dates"
            v-bind:key="index"
            :label="'Ngày '+ (index+1)"
          >
            <div v-for="plan in plans" :key="plan.place">
              <div class="plain-contract" v-if="plan.date">
                <el-row class="alige-center">
                  <el-col :span="7">
                    <div class="grid-content label-contract">Nội dung</div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content">:</div>
                  </el-col>
                  <el-col :span="16">
                    <el-input class="input-contract" v-model="plan.content"></el-input>
                  </el-col>
                </el-row>
                <el-row class="alige-center">
                  <el-col :span="7">
                    <div class="grid-content label-contract">Địa điểm</div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content">:</div>
                  </el-col>
                  <el-col :span="16">
                    <el-input class="input-contract" v-model="plan.place"></el-input>
                  </el-col>
                </el-row>
                <el-row class="alige-center">
                  <el-col :span="7">
                    <div class="grid-content label-contract">Loại đồ</div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content">:</div>
                  </el-col>
                  <el-col :span="16">
                    <el-input class="input-contract" v-model="plan.costume"></el-input>
                  </el-col>
                </el-row>
                <el-row class="alige-center">
                  <el-col :span="7">
                    <div class="grid-content label-contract">Thời gian</div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content">:</div>
                  </el-col>
                  <el-col :span="16">
                    <el-time-select
                      class="w-100 input-contract input-contract--time"
                      v-model="plan.plan_time"
                      :picker-options="{
                        start: '00:30',
                        step: '00:15',
                        end: '22:30'
                      }"
                      placeholder="Select time"
                    ></el-time-select>
                  </el-col>
                </el-row>
                <el-row class="alige-center">
                  <el-col :span="7">
                    <div class="grid-content label-contract">Thợ chụp</div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content">:</div>
                  </el-col>
                  <el-col :span="16">
                    <el-input class="input-contract" v-model="plan.photographerName"></el-input>
                  </el-col>
                </el-row>
                <el-row class="alige-center">
                  <el-col :span="7">
                    <div class="grid-content label-contract">Vai trò</div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content">:</div>
                  </el-col>
                  <el-col :span="16">
                    <el-input class="input-contract" v-model="plan.photographerRole"></el-input>
                  </el-col>
                </el-row>
              </div>
            </div>
            <el-row class="p-20 alige-center justify-center">
              <el-button
                :disabled="checkDate(date.date_taken)"
                type="warning"
                icon="el-icon-plus"
                @click="addPlan(date.date_taken)"
                round
              ></el-button>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <el-row class="p-20 alige-center">
      <el-button class="w-100" type="primary" @click="handelCreate" plain>Tạo hợp đồng</el-button>
    </el-row>
  </section>
</template>

<script>
import { APIService } from "../../../service/apiService.js";
import { API_URL_DEV, END_POINT } from "../../../service/apiRegister.js";
import { format } from "date-fns";
const api = new APIService();

export default {
  data() {
    return {
      schools: [],
      packages: [],
      package_id: "",
      properties: [],
      property_id: [],
      dates: [
        {
          date_taken: ""
        }
      ],
      plans: [
        {
          date: "",
          plan_time: "",
          content: "",
          place: "",
          costume: "",
          photographer_id: "",
          photographer_role: ""
        }
      ],
      contract: {
        name: "",
        group: "",
        school_id: "",
        phone: "",
        address: "",
        type: "",
        label: "",
        total_member: "",
        male_number: "",
        female_number: "",
        deposit: "",
        budgets_attributes: [],
        plans_attributes: [],
        histories_attributes: [
          {
            date_history: "",
            content: "",
            note: ""
          }
        ],
        items_attributes: [{ name: "", price: "" }],
        date_takens_attributes: []
      }
    };
  },
  mounted() {
    api
      .multipeGets([
        END_POINT.schools,
        END_POINT.packages,
        END_POINT.properties
      ])
      .then(data => {
        this.schools = data[0].schools;
        this.packages = data[1].packages;
        this.properties = data[2].properties;
      });
  },
  filters: {
    dateFormat: function(value) {
      if (!value) return "";
      return format(new Date(value), "DD/MM").toString();
    },
    timeFormat: function(value) {
      if (!value) return "";
      return format(new Date(value), "hh:mm");
    }
  },
  methods: {
    handelCreate() {
      this.contract.plans_attributes = this.plans;
      this.contract.date_takens_attributes = this.dates;
      this.packages.forEach(v => {
        if (v.id === this.package_id) {
          this.contract.budgets_attributes.push({
            budgetable_type: "Package",
            budgetable_id: v.id,
            price: v.price
          });
        }
      });
      this.properties.forEach(v => {
        if (this.property_id.includes(v.id)) {
          this.contract.budgets_attributes.push({
            budgetable_type: "Property",
            budgetable_id: v.id,
            price: v.price
          });
        }
      });

      api.post([END_POINT.contracts], this.contract).then(data => {});
    },
    click() {},
    addPlan(date) {
      if (this.plans.length <= 6) {
        this.plans.push({
          date: date,
          plan_time: "",
          content: "",
          place: "",
          costume: "",
          photographerName: "",
          photographerRole: ""
        });
      }
    },
    addDate() {
      this.dates.push({
        date_taken: ""
      });
    },
    checkDate(date) {
      return date ? false : true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
