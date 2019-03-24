<template>
  <section id="contract" class="show-out">
    <h2 class="title-form">Thông tin hợp đồng</h2>
    <div class="title-button">
      <h2>Thông tin hợp đồng</h2>
      <el-button type="warning" icon="el-icon-edit-outline" round></el-button>
    </div>
    <div>
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content label-contract">Name</div>
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
          <div class="grid-content label-contract">Phone</div>
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
          <div class="grid-content label-contract">School</div>
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
          <div class="grid-content label-contract">SchoolYear</div>
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
          <div class="grid-content label-contract">Address</div>
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
          <div class="grid-content label-contract">Group</div>
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
          <div class="grid-content label-contract">Type contract</div>
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
            class="w-100 input-contract"
            v-model="constract.date_takens_attributes[0].date_taken"
            type="datetime"
            placeholder
            :format="'dd-MM-yyyy'"
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
            class="w-100 input-contract"
            v-model="constract.date_takens_attributes[1].date_taken"
            type="datetime"
            placeholder
            :format="'dd-MM-yyyy'"
          ></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content label-contract">Numpp</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-input class="input-contract" v-model="constract.numpp"></el-input>
        </el-col>
      </el-row>
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content label-contract">Price</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-select v-model="constract.price" placeholder class="input-contract w-100">
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
          <div class="grid-content label-contract">Package</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-input class="input-contract" v-model="constract.budgets_attributes[0].budgetable_id"></el-input>
        </el-col>
      </el-row>
      <el-row class="alige-center">
        <el-col :span="7">
          <div class="grid-content label-contract">Deposit</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">:</div>
        </el-col>
        <el-col :span="16">
          <el-input class="input-contract" v-model="constract.deposit"></el-input>
        </el-col>
      </el-row>
      <el-row class="p-20 alige-center">
        <el-button class="w-100" type="primary" @click="handelCreate" plain>Tạo hợp đồng</el-button>
      </el-row>
    </div>
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
      constract: {
        name: "Contract 1",
        group: "12A1",
        school_id: "1",
        phone: "",
        school_year: "",
        address: "",
        type: "",
        label: "19",
        numpp: "",
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
