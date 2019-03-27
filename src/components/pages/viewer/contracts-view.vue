<template>
  <section id="contract" class="show-out">
    <div class="title-button m-b-10">
      <h2>Nội dung hợp đồng</h2>
      <el-button type="warning" icon="el-icon-edit-outline" round></el-button>
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
            <div class="grid-content label-contract">Chủ hợp đồng</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.owner || '####' }}</div>
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
            <div class="grid-content field-contract">{{contract.phone || '####' }}</div>
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
            <div class="grid-content field-contract">{{contract.phone || '####' }}</div>
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
            <div class="grid-content field-contract">{{schoolName}} {{getSchool(contract.id)}}</div>
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
            <div class="grid-content field-contract">{{contract.school_year || '####' }}</div>
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
            <div class="grid-content field-contract">{{contract.address || '####' }}</div>
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
            <div class="grid-content field-contract">{{contract.school_year || '####' }}</div>
          </el-col>
        </el-row>
        <el-row class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">Loại hợp đồng</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{contract.type_contract || '####' }}</div>
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
          <div class="timeline">
            <div v-for="p in contract.plans" :key="p.id" class="entry">
              <div class="title">
                <h4>{{p.plan_time | timeFormat}} - {{p.plan_time | dateFormat}}</h4>
                <p>{{p.place}}</p>
              </div>
              <div class="body">
                <p>{{p.content}}</p>
                <p>Trang phục</p>
                <ul>
                  <li>{{p.costume}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Thơ chụp">
        <div class="m-b-20 border-bottom">
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Người chụp</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">Phan Văn Việt</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Vai trò</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">Lead</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Số điện thoại</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">09231231232</div>
            </el-col>
          </el-row>
        </div>
        <div class="m-b-20 border-bottom">
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Người chụp</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">Phan Văn Huy</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Vai trò</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">Support</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div class="grid-content label-contract">Số điện thoại</div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content">:</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content field-contract">09231231232</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Xem ảnh">
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
      </el-tab-pane>
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
      schools: [],
      packages: [],
      properties: [],
      contract: {},
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
    console.log();
    const id = this.$router.history.current.params.id;
    api
      .multipeGets([
        END_POINT.schools,
        END_POINT.packages,
        END_POINT.properties,
        [END_POINT.contracts, id]
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
      console.log(typeof value);
      return format(new Date(value), "DD/MM");
    },
    timeFormat: function(value) {
      if (!value) return "";
      console.log(typeof value);
      return format(new Date(value), "hh:mm");
    }
  },
  methods: {
    getSchool(id) {
      this.schools.map(v => {
        if (v.id === id) {
          console.log("hehe", v.name);
          this.schoolName = v.name;
          // return v.name;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
