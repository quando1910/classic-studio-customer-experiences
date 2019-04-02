<template>
  <section id="contract" class="show-out">
    <h2 class="title-form">{{this.id ? 'Sửa' : 'Tạo mới'}} hợp đồng</h2>
    <el-tabs v-loading="loading" type="border-card">
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
              <div class="grid-content label-contract">Chủ hợp đồng</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.members_attributes[0].name"></el-input>
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
              <el-input
                class="input-contract"
                v-model="contract.members_attributes[0].phone_number"
              ></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Link Facebook</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input
                class="input-contract"
                v-model="contract.members_attributes[0].link_facebook"
              ></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Giới tính</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-select
                v-model="contract.members_attributes[0].gender"
                placeholder="Chọn giới tính *"
                class="input-contract w-100"
              >
                <el-option v-for="g in genders" :key="g.value" :label="g.label" :value="g.value"></el-option>
              </el-select>
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
              <el-input class="input-contract" v-model="contract.members_attributes[0].address"></el-input>
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
              <div class="grid-content label-contract">Nhóm/Lớp</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-input class="input-contract" v-model="contract.group"></el-input>
            </el-col>
          </el-row>
          <el-row class="alige-center" v-for="(d,i) in dates" v-bind:key="i">
            <el-col :span="7">
              <div class="grid-content label-contract">Ngày chụp {{i+1}}</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16" class="d-flex">
              <el-date-picker
                @change="updateDateTaken($event, i)"
                class="w-100 input-contract input-contract--time"
                v-model="d.date_taken"
                type="date"
                placeholder="Pick a day"
              ></el-date-picker>
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
              <div class="grid-content label-contract">Gói chụp</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-select
                @change="setPropety"
                v-model="package_id"
                placeholder
                class="input-contract w-100"
              >
                <el-option v-for="p in packages" :key="p.id" :label="p.name" :value="p.id"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="alige-center" v-if="this.subProperty.length > 0">
            <el-col :span="7">
              <div class="grid-content label-contract">Đồ đi kèm</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16" class="sub-propety">
              <span v-for="sp in this.subProperty" v-bind:key="sp.id">{{sp.name}}</span>
            </el-col>
          </el-row>
          <el-row class="alige-center">
            <el-col :span="7">
              <div class="grid-content label-contract">Đồ thêm</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <el-select
                @change="setMorePropety"
                v-model="propertyMore"
                multiple
                placeholder
                class="input-contract w-100"
              >
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
        <el-tabs>
          <el-tab-pane
            v-for="(date, index) in dates"
            v-bind:key="index"
            :label="'Ngày '+ (index+1)"
          >
            <div v-for="plan in plans" :key="plan.place">
              <div
                class="plain-contract"
                v-if="plan.date && compareDate(plan.date, date.date_taken)"
              >
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
                    <el-input class="input-contract" v-model="plan.places"></el-input>
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
                    <el-select
                      multiple
                      placeholder
                      v-model="plan.costume"
                      class="input-contract w-100"
                    >
                      <el-option
                        v-for="dp in dateProperty"
                        :key="dp.name"
                        :label="dp.name"
                        :value="dp.name"
                      ></el-option>
                    </el-select>
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
                        start: '00:00',
                        step: '00:30',
                        end: '23:00'
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
                    <el-select
                      v-model="plan.photographerId"
                      placeholder
                      class="input-contract w-100"
                    >
                      <el-option
                        v-for="p in photographers"
                        :key="p.id"
                        :label="p.name"
                        :value="p.id"
                      ></el-option>
                    </el-select>
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
      <el-button
        class="w-100"
        type="primary"
        @click="handleSubmit"
        plain
        :disabled="loading"
      >{{this.id ? 'Sửa' : 'Tạo'}} hợp đồng</el-button>
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
      id: null,
      loading: false,
      photographers: [],
      schools: [],
      packages: [],
      package_id: "",
      properties: [],
      propertyMore: [],
      addProperty: [],
      subProperty: [],
      dateProperty: [],
      budgets: [],
      dates: [
        {
          date_taken: ""
        }
      ],
      plans: [],
      genders: [
        {
          value: 0,
          label: "Nữ"
        },
        {
          value: 1,
          label: "Nam"
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
        date_takens_attributes: [],
        members_attributes: [
          {
            name: null,
            phone_number: null,
            link_facebook: null,
            gender: null,
            address: null
          }
        ]
      }
    };
  },
  mounted() {
    this.id = this.$router.history.current.params.id;
    api
      .multipeGets([
        END_POINT.schools,
        END_POINT.packages,
        END_POINT.properties,
        END_POINT.photographers
      ])
      .then(data => {
        this.schools = data[0].schools;
        this.packages = data[1].packages;
        this.properties = data[2].properties;
        this.photographers = data[3].photographers;
      });
    if (this.id) {
      api.get([END_POINT.contracts, this.id]).then(data => {
        this.convertData(data.contract);
      });
    }
  },
  filters: {
    getDate: function(value) {
      if (!value) return "";
      return format(new Date(value), "YYYY-MM-DD").toString();
    },
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
    handleSubmit() {
      this.loading = true;
      this.plans.forEach(v => {
        this.contract.plans_attributes.push({
          id: v.id,
          plan_time: new Date(`${v.date} ${v.plan_time}`),
          content: v.content,
          place: v.places,
          costume:
            v.costume && Array.isArray(v.costume)
              ? v.costume.join(", ")
              : v.costume,
          photographer_id: v.photographerId,
          photographer_role: v.photographerRole
        });
      });
      this.contract.date_takens_attributes = this.dates;
      this.packages.forEach(v => {
        if (v.id === this.package_id) {
          this.contract.budgets_attributes.push({
            id: this.setBudgetsID(v.id, "Package"),
            budgetable_type: "Package",
            budgetable_id: v.id,
            price: v.price
          });
        }
      });
      this.properties.forEach(v => {
        if (this.propertyMore.includes(v.id)) {
          this.contract.budgets_attributes.push({
            id: this.setBudgetsID(v.id, "Property"),
            budgetable_type: "Property",
            budgetable_id: v.id,
            price: v.price
          });
        }
      });

      if (!this.id) {
        api.post([END_POINT.contracts], this.contract).then(
          data => {
            this.loading = false;
            this.$router.push("/viewer/contract");
          },
          err => {
            this.loading = false;
          }
        );
      } else {
        api.put([END_POINT.contracts, this.id], this.contract).then(
          data => {
            this.loading = false;
            this.$router.push(`/viewer/contract/${this.id}`);
          },
          err => {
            this.loading = false;
          }
        );
      }
    },
    addPlan(date) {
      if (this.plans.length <= 6) {
        this.plans.push({
          id: null,
          date: format(new Date(date), "YYYY-MM-DD"),
          plan_time: null,
          content: null,
          places: null,
          costume: [],
          photographerId: null,
          photographerRole: null
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
    },

    compareDate(d1, d2) {
      return d1 === format(new Date(d2), "YYYY-MM-DD").toString();
    },
    setPropety(e) {
      const subPackage = this.packages.find(v => v.id === e);
      this.subProperty = subPackage ? subPackage.properties : this.subProperty;
      this.setDateProperty();
    },
    setMorePropety(e) {
      this.addProperty = [];
      this.properties.forEach(v => {
        if (this.propertyMore.includes(v.id)) {
          this.addProperty.push(v);
        }
      });
      this.setDateProperty();
    },
    setDateProperty() {
      if (this.addProperty.length > 0 || this.subProperty.length > 0) {
        this.dateProperty = [...this.addProperty, ...this.subProperty];
      }
    },
    setBudgetsID(id, type) {
      console.log(this.budgets, id, type);
      if (this.id) {
        const budgetable = this.budgets.find(
          v => v.budgetable_id === id && v.budgetable_type === type
        );
        return budgetable.id;
      }
      return null;
    },
    convertData(data) {
      this.contract.name = data.name;
      this.contract.group = data.group;
      this.contract.phone = data.phone;
      this.contract.address = data.address;
      this.contract.label = data.label;
      this.contract.total_member = data.total_member;
      this.contract.male_number = data.male_number;
      this.contract.female_number = data.female_number;
      this.contract.deposit = data.deposit;
      this.contract.school_id = data.school_id;
      this.budgets = data.budgets;
      if (data.packages.length > 0) {
        this.package_id = data.packages[0].id;
      }
      this.setPropety(this.package_id);
      if (data.properties && data.properties.length > 0) {
        data.properties.forEach(v => {
          this.propertyMore.push(v.id);
        });
        this.setMorePropety();
      }
      if (data.member) {
        this.contract.members_attributes = [];
        this.contract.members_attributes.push(data.member);
      }
      this.dates = data.date_takens;
      // this.plans = data.plans;
      data.plans.forEach(v => {
        this.plans.push({
          id: v.id,
          date: format(new Date(v.plan_time), "YYYY-MM-DD"),
          plan_time: format(new Date(v.plan_time), "HH:mm"),
          content: v.content,
          places: v.place,
          costume: v.costume.split(","),
          photographerId: v.photographer.id,
          photographerRole: v.photographer.role
        });
      });
    },
    updateDateTaken(e, index) {
      this.dates[index].date_taken = new Date(e);
      this.plans[index].date = format(new Date(e), "YYYY-MM-DD");
    },
    change() {
      console.log(111111212121212121212);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
