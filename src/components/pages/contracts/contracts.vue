<template>
  <div class="container">
      <div class="col-md-9">
        <div class="contract" v-if="contract">
          <div class="center-head">
            <h2>HỢP ĐỒNG ĐIỆN TỬ</h2>
            <h5>eBillings</h5>
            <div class="header__logo"><a href="/home"><img src="../../../assets/images/logo-main-black.png" style="width: 150px;" alt=""/></a></div>
            <h5>Mã code hoá đơn:  <b style="text-transform: uppercase"> {{contract.code}} </b></h5>
            <el-tag type="success">Đã thanh toán</el-tag>
            <el-tag type="success">Trả hết trang phục</el-tag>
            <el-tag type="success">Đã có Full ảnh</el-tag>
            <el-tag type="success">Đã có Video</el-tag>
            <h5>Sử dụng hệ thống chăm sóc khách hàng:
            </h5>
          </div>
          <hr>
          <el-row>
            <h3 class="center-head">Thông tin hợp đồng</h3>
            <el-col :span="12">
              <h4 >Bên A</h4>
              <label>Họ và Tên: </label><b>Đỗ Hồng Quân</b><br>
              <label>Đơn vị: </label><b>The Classic Studio</b><br>
              <label>Địa chỉ: </label><b>43 Tống Phước Phổ, Đà Nẵng</b><br>
              <label>SĐT: </label><b><a :href="`tel: ${`0773420210`}`">{{`0773420210`}}</a></b><br>
            </el-col>
            <el-col :span="12">
                <h4>Bên B</h4>
              <label>Họ và Tên: </label><b>{{contract.name}}</b><br>
              <label>Đại diện của: </label><b>{{contract.group}} - {{contract.school.name}}</b><br>
              <label>SĐT: </label>
              <b><a :href="`tel: ${contract.member.phone_number}`">{{contract.member.phone_number}}</a></b><br>
              <!-- <b><a :href="`tel: ${contract.phone1}`">{{contract.phone1}}</a></b> -
              <b><a :href="`tel: ${contract.phone2}`">{{contract.phone2}}</a></b><br> -->
              <!-- <label>Số lượng thành viên: </label><b> {{ contract.numerator }}</b><br> -->
            </el-col>
          </el-row>
          <hr>
          <div id="contract">
            <h3 class="center-head">Lịch trình</h3>
            <div class="timeline" v-if="contract.date_takens && contract.date_takens.length > 0">
              <div v-for="date in contract.date_takens" :key="date.id">
                <div v-for="p in date.plans" :key="p.id" class="entry">
                  <div class="title">
                    <h4>{{p.plan_time | timeFormat}} - {{p.plan_time | dateFormat}}</h4>
                    <p>{{p.place}}</p>
                  </div>
                  <div class="body">
                    <el-row class="m-b-10">
                      <el-col :span="4">
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
                      <el-col :span="4">
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
          <hr>
          <div id="contract">
            <h3 class="center-head">Thợ chụp / quay</h3>
          </div>
          <hr>
          <el-collapse>
            <h3 class="center-head">Các điều khoản</h3>
            <el-collapse-item title="Các điều khoản của hợp đồng" name="4">
              <div>Điều khoản về thanh toán</div>
              <div>Điều khoản về việc thuê trang phục</div>
              <div>Điều khoản về sửa ảnh, video</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
  </div>
</template>

<script>
import { APIService } from "../../../service/apiService.js";
import { format } from "date-fns";

const apiService = new APIService()

export default {
  name: 'Contract',
  data() {
    return {
      activeNames: 1,
      contract: null,
      messageWhenNoItems: 'There are not items',
      dataTimeline: [
        {
          from: new Date(2018, 7),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        },
        {
          from: new Date(2016, 1),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        },
        {
          from: new Date(2016, 6),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        },
        {
          from: new Date(2012, 1),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        }
      ]
    }
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
  created () {
    apiService.get(['contracts', this.$route.params.id]).then(data => {
      this.contract = data.contract;
      console.log(this.contract);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  padding-top: 80px;
}
.center-head {
  text-align: center;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
  padding-bottom: 20px;
}
h4 {
  font-size: 1rem;
}
b {
  font-weight: 700;
}
hr {
  margin: 20px 0;
}
</style>
