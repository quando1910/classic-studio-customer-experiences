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
              <el-input class="input-contract" v-model="constract.name"></el-input>
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
              <el-input class="input-contract" v-model="constract.phone"></el-input>
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
              <el-select v-model="constract.school_id" placeholder class="input-contract w-100">
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
              <el-input class="input-contract" v-model="constract.school_year"></el-input>
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
              <el-input class="input-contract" v-model="constract.address"></el-input>
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
              <el-input class="input-contract" v-model="constract.group"></el-input>
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
              <el-input class="input-contract" v-model="constract.type"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Take date</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-date-picker
                class="w-100 input-contract input-contract--time"
                v-model="constract.date_takens_attributes[0].date_taken"
                type="datetime"
                placeholder
                :format="'dd-MM-yyyy hh:mm'"
              ></el-date-picker>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Take date2</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-date-picker
                class="w-100 input-contract input-contract--time"
                v-model="constract.date_takens_attributes[1].date_taken"
                type="datetime"
                placeholder
                :format="'dd-MM-yyyy hh:mm'"
              ></el-date-picker>
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
              <el-input class="input-contract" v-model="constract.total_member"></el-input>
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
              <el-input class="input-contract" v-model="constract.male_number"></el-input>
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
              <el-input class="input-contract" v-model="constract.female_number"></el-input>
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
              <el-input
                class="input-contract"
                v-model="constract.budgets_attributes[0].budgetable_id"
              ></el-input>
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
              <el-input class="input-contract" v-model="constract.deposit"></el-input>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Plan">
        <div class="plain-contract" v-for="plan in plans" v-bind:key="plan.place">
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
              <el-date-picker
                class="w-100 input-contract input-contract--time"
                v-model="plan.plan_time"
                type="datetime"
                placeholder
                :format="'dd-MM-yyyy hh:mm'"
              ></el-date-picker>
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
        <el-row class="p-20 alige-center justify-center">
          <el-button type="warning" icon="el-icon-plus" @click="addPlan" round></el-button>
        </el-row>
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
const api = new APIService();

export default {
  data() {
    return {
      schools: [],
      packages: [],
      properties: [],
      plans: [
        {
          plan_time: "",
          content: "",
          place: "",
          costume: "",
          photographerName: "",
          photographerRole: ""
        }
      ],
      constract: {
        name: "Contract 1",
        group: "12A1",
        school_id: "1",
        phone: "",
        school_year: "",
        address: "",
        type: "",
        label: "19",
        total_member: "2",
        male_number: "1",
        female_number: "1",
        deposit: "1000000000",
        budgets_attributes: [
          {
            budgetable_type: "Package",
            budgetable_id: "1",
            price: "200000000"
          }
        ],
        plans_attributes: [
          {
            plan_time: "",
            content: "",
            place: "",
            costume: ""
          }
        ],
        histories_attributes: [
          {
            date_history: "",
            content: "",
            note: ""
          }
        ],
        items_attributes: [{ name: "", price: "" }],
        date_takens_attributes: [
          {
            date_taken: ""
          },
          {
            date_taken: ""
          }
        ]
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
        this.schools = data[0];
        this.packages = data[1];
        this.properties = data[2];
      });
  },
  methods: {
    handelCreate() {
      console.log(this.constract);
      api
        .post([END_POINT.contracts], { contract: this.contract })
        .then(data => {
          console.log(data);
        });
    },
    addPlan() {
      if (this.plans.length <= 6) {
        this.plans.push({
          plan_time: "",
          content: "",
          place: "",
          costume: "",
          photographerName: "",
          photographerRole: ""
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
