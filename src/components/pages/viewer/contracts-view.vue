<template>
  <section v-if="contract" id="contract" class="show-out">
    <div class="title-button m-b-10">
      <h2>Nội dung hợp đồng</h2>
      <div>
        <router-link v-if="checkRole()" :to="this.id+'/edit'">
          <el-button type="warning" icon="el-icon-edit-outline" round>Chỉnh sửa</el-button>
        </router-link>
        <router-link v-if="checkRole()" :to="this.id+'/payment'">
          <el-button type="success" icon="el-icon-tickets" round>Thanh toán</el-button>
        </router-link>
      </div>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="Nội Dung" class="p-20">
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Mã hợp đồng</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.code}}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Tên hợp đồng</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.name}}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Chủ hợp đồng</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div
              class="grid-content field-contract"
            >{{contract.member ? contract.member.name : '' || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Số điện thoại</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div
              class="grid-content field-contract"
            >{{contract.member ? contract.member.phone_number: '' || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Địa chỉ</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div
              class="grid-content field-contract"
            >{{contract.member ? contract.member.address:'' || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Trường</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.school.name}}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Nhóm/lớp</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.group}}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Năm học</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.label || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Sỉ số</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.total_member || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Tổng nam</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.male_number || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Tổng nữ</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.female_number || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom" v-for="(p, i) in contract.packages" v-bind:key="p.id">
          <el-col :span="7">
            <div class="grid-content label-contract">Gói chụp {{i+1}}</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{p.name || '####' }}</div>
          </el-col>
        </el-row>
        <el-row
          class="m-b-20 border-bottom"
          v-for="(p, i) in contract.properties"
          v-bind:key="p.id"
        >
          <el-col :span="7">
            <div class="grid-content label-contract">Phụ kiện thêm {{i+1}}:</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{p.name || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Đặt cọc</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.deposit || '####' }}</div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="Lịch trình">
        <div>
          <div class="timeline" v-if="contract.date_takens && contract.date_takens.length > 0">
            <div v-for="date in contract.date_takens" :key="date.id">
              <div v-for="p in date.plans" :key="p.id" class="entry">
                <div class="title">
                  <h4>{{p.plan_time | timeFormat}} - {{p.plan_time | dateFormat}}</h4>
                  <p>{{p.place}}</p>
                </div>
                <div class="body">
                  <el-row class="m-b-10">
                    <el-col :span="7">
                      <div>Nội dung</div>
                    </el-col>
                    <el-col :span="1">
                      <div>:</div>
                    </el-col>
                    <el-col :span="16">
                      <div>{{p.content || '####' }}</div>
                    </el-col>
                  </el-row>
                  <el-row class="m-b-10">
                    <el-col :span="7">
                      <div>Trang phục</div>
                    </el-col>
                    <el-col :span="1">
                      <div>:</div>
                    </el-col>
                    <el-col :span="16">
                      <div>{{p.costume || '####' }}</div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Thợ chụp">
        <div>
          <div v-if="contract.date_takens && contract.date_takens.length > 0">
            <div class="border-b-dack m-b-10" v-for="d in contract.date_takens" :key="d.id">
              <p class="m-b-10">Ngày chụp {{d.date_taken | dateFormat}}</p>
              <el-row class="m-b-10" v-for="p in d.photographer_date_takens" :key="p.id">
                <el-col :span="7">
                  <div>Thợ</div>
                </el-col>
                <el-col :span="1">
                  <div>:</div>
                </el-col>
                <el-col :span="16">
                  <div>{{ p.photographer.name|| '####' }} - {{p.photographer_role}}</div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <!-- <el-tab-pane label="Xem ảnh">
        <div class="m-b-20 border-bottom">
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Email</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">tranquycap</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">pwp</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">ahgsfdhgasfd</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Driver link</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">
                <a href="#">http://0.0.0.0:8080/viewer/contract</a>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Loại</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">1</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>-->
    </el-tabs>
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
      id: [],
      schools: [],
      packages: [],
      properties: [],
      contract: {
        member: {
          name: null,
          phone_number: null,
          link_facebook: null,
          gender: null,
          address: null
        },
        school: {
          name: null
        }
      },
      schoolName: "",
      activities2: [
        {
          content: "Custom icon",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "Custom color",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87"
        },
        {
          content: "Custom size",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "Default node",
          timestamp: "2018-04-03 20:46"
        }
      ]
    };
  },
  mounted() {
    this.id = this.$router.history.current.params.id;
    api
      .multipeGets([
        END_POINT.schools,
        END_POINT.packages,
        END_POINT.properties,
        [END_POINT.contracts, this.id]
      ])
      .then(data => {
        this.schools = data[0].schools;
        this.packages = data[1].packages;
        this.properties = data[2].properties;
        this.contract = data[3].contract;
      });
  },
  filters: {
    dateFormat: function(value) {
      if (!value) return "";
      return format(new Date(value), "DD/MM");
    },
    timeFormat: function(value) {
      if (!value) return "";
      return format(new Date(value), "HH:mm");
    }
  },
  methods: {
    getSchool(id) {
      this.schools.map(v => {
        if (v.id === id) {
          this.schoolName = v.name;
          // return v.name;
        }
      });
    },
    checkRole() {
      const memeber = JSON.parse(localStorage.getItem("MEMBER"));
      return !memeber;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
