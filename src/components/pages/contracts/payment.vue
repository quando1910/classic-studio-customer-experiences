<template>
  <div class="container">
    <div class="pay-box">
      <div class="header__logo"><a href="/home"><img src="../../../assets/images/logo-main-black.png" style="width: 150px;" alt=""/></a></div>
      <h2 class="pay-header"><b>THANH TOÁN HỢP ĐỒNG</b></h2>
    </div>
      <el-table
      :data="budgets"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="content"
        label="Nội dung"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Chú thích"
        width="180">
        <template slot-scope="scope">
          <input v-model="scope.row.note">
        </template>
      </el-table-column>
      <el-table-column
        prop="quantity"
        label="Số lượng">
        <template slot-scope="scope">
          <p v-if="scope.row.type === 0">{{scope.row.quantity}}</p>
          <input v-if="scope.row.type === 1" v-model="scope.row.quantity">
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="Đơn giá">
      </el-table-column>
      <el-table-column
        prop="total"
        label="Thành tiền">
        <template slot-scope="scope">
          <p>{{scope.row.price * scope.row.quantity}}</p>
        </template>
      </el-table-column>
    </el-table>
    <div class="pay-meta" v-if="deposit && budgets.length > 0">
      <div class="grid-content label-contract">Tổng cộng: <b>{{budgets.reduce((x,y) => { return x.price * x.quantity + y.price * y.quantity}) | dateMoney}}</b></div>
      <div class="grid-content label-contract">Đặt cọc: <b>{{deposit | dateMoney}}</b></div>
      <div class="grid-content label-contract">Số tiền còn lại phải trả: <b>{{(budgets.reduce((x,y) => { return x.price * x.quantity + y.price * y.quantity}) - deposit) | dateMoney}}</b></div>
      <el-tag type="success" v-if="payment == 2">Đã hoàn tất thanh toán</el-tag>
    </div>
    <el-row class="alige-center">
      <el-col :span="7">
        <el-button
        class="w-100"
        type="warning"
        @click="goBack"
        plain
        :disabled="loading"
      > Quay lại</el-button>
      </el-col>
      <el-col :span="1">
      </el-col>
      <el-col :span="16"   v-if="payment == 0">
        <el-button
          class="w-100"
          type="primary"
          @click="verifyContract"
          plain
          :disabled="loading"
        > Xác thực thông tin thanh toán
        </el-button>
      </el-col>
      <el-col :span="7"  v-if="payment == 1">
        <el-button
          v-if="payment == 1"
          class="w-100"
          type="primary"
          @click="lockContract"
          plain
          :disabled="loading"> 
          Khóa thanh toán
        </el-button>
      </el-col>
      <el-col :span="1" v-if="payment == 1">
      </el-col>
      <el-col :span="8"  v-if="payment == 1">
        <el-button
          @click="open7"  
          class="w-100"
          type="success"
          plain>
          Thanh toán hợp đồng
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { APIService } from "../../../service/apiService.js";
import { API_URL_DEV, END_POINT } from "../../../service/apiRegister.js";
import { format } from "date-fns";

const api = new APIService()

export default {
  name: 'Payment',
  data() {
    return {
      budgets:  [],
      deposit: null,
      payment: null
    }
  }, 
  filters: {
    dateMoney: function(value) {
      return parseInt(value).toLocaleString();
    }
  },
  created() {
    api.get([END_POINT.contracts, this.$route.params.id]).then(data => {
      this.deposit = data.contract.deposit;
      this.payment = data.contract.payment_status;
      data.contract.budgets.forEach(x => {
        let obj = {};
        if (x.budgetable_type === 'Package') {
          obj.content = data.contract.packages.filter(x => x.id === x.id)[0].name;
          obj.type = 0;
        } else {
          obj.content = data.contract.properties.filter(x => x.id === x.id)[0].name;
          obj.type = 1;
        }
        obj.quantity = x.quantity;
        obj.id = x.id;
        obj.price = x.price;
        obj.note = x.note;
        obj.total = obj.quantity * obj.price;
        this.budgets.push(obj);
      })
    });
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    lockContract() {
      let payment = {};
      payment.payment_status = 0;
      api.put([END_POINT.contracts, this.$route.params.id], payment).then(
        data => {
          this.payment = 0;
          this.$message({
            message: 'Đã khóa thanh toán!',
            type: 'message'
          });
        },
        err => {
        }
      );
    },
    open7() {
      this.$confirm('Bạn có chắc muốn thanh toán hợp đồng này không?', 'Success', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'success',
        center: true
      }).then(() => {
        this.paymentContract();
      }).catch(() => {
      });
    },
    paymentContract() {
      let payment = {};
      payment.budgets_attributes = this.budgets;
      payment.paid_at = new Date();
      payment.payment_status = 2;
      api.put([END_POINT.contracts, this.$route.params.id], payment).then(
        data => {
          this.$message({
            message: 'Thanh toán hợp đồng thành công!',
            type: 'success'
          });
          this.$router.push(`/viewer/contract/${this.$route.params.id}`);
        },
        err => {
          this.$router.push(`/viewer/contract/${this.$route.params.id}`);
        }
      );
    },
    verifyContract() {
      let payment = {};
      payment.budgets_attributes = this.budgets;
      payment.payment_status = 1;
      api.put([END_POINT.contracts, this.$route.params.id], payment).then(
        data => {
          this.payment = 1;
          this.$message({
            message: 'Đã xác nhận thông tin thanh toán!',
            type: 'message'
          });
        },
        err => {
          this.$message({
            message: 'Lỗi xác nhận!',
            type: 'error'
          });
        }
      );
    },
    goBack() {
      this.$router.push(`/viewer/contract/${this.$route.params.id}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pay-box {
  display: flex;
}
.pay-header {
  padding-left: 100px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.pay-meta {
  direction: rtl;
  .label-contract {
    padding-top: 10px;
  }
}
b {
  font-weight: 700;
}
.alige-center {
  padding-top: 20px; 
}
</style>
