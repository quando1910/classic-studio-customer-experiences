<template>
  <section id="contract">
    <h2 class="title-form">Thông tin hợp đồng</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="Nội Dung" class="p-20">
        <el-row v-bind:key="field.key" v-for="field in constract" class="m-b-20 border-bottom">
          <el-col :span="7">
            <div class="grid-content label-contract">{{field.label}}</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">:</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content field-contract">{{field.field}}</div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="Lịch trình">
        <div>
          <div class="timeline">
            <div class="entry">
              <div class="title">
                <h3>8h sáng - 2018</h3>
                <p>Công viên 29/3</p>
              </div>
              <div class="body">
                <p>Trang phục</p>
                <ul>
                  <li>Đồ học sinh</li>
                </ul>
              </div>
            </div>
            <div class="entry">
              <div class="title">
                <h3>13h sáng - 2018</h3>
                <p>Bến xe</p>
              </div>
              <div class="body">
                <p>Trang phục</p>
                <ul>
                  <li>Đồ lao động</li>
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
export default {
  data() {
    return {
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
      ],
      constract: [
        {
          key: 1,
          label: "Họ tên",
          field: "Nguyen Le Hoang"
        },
        {
          key: 2,
          label: "Số điên thoại",
          field: "0905.700.194"
        },
        {
          key: 3,
          label: "Trường",
          field: "Thái Phiên"
        },
        {
          key: 4,
          label: "Niên khoá",
          field: "2009-2012"
        },
        {
          key: 1,
          label: "Họ tên",
          field: "Nguyen Le Hoang"
        },
        {
          key: 2,
          label: "Số điên thoại",
          field: "0905.700.194"
        },
        {
          key: 3,
          label: "Trường",
          field: "Thái Phiên"
        },
        {
          key: 4,
          label: "Niên khoá",
          field: "2009-2012"
        },
        {
          key: 3,
          label: "Trường",
          field: "Thái Phiên"
        },
        {
          key: 4,
          label: "Niên khoá",
          field: "2009-2012"
        },
        {
          key: 3,
          label: "Trường",
          field: "Thái Phiên"
        },
        {
          key: 4,
          label: "Niên khoá",
          field: "2009-2012"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.label-contract {
  font-style: italic;
  font-size: 1.1em;
  color: #cf8a05;
}
.field-contract {
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 20px;
  color: #444;
}
.border-bottom {
  border-bottom: 1px solid #dedede;
}
$container-shadow: 0.5rem 0.5rem 2rem 0 rgba(black, 0.2);

$gutter: 30px;
$border-width: 4px;
$dot-diameter: 8px;

.timeline {
  width: 100%;
  padding: 50px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: calc(33% + 15px); //$gutter/2
    bottom: 0px;
    width: $border-width;
    background: #ddd;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.entry {
  clear: both;
  text-align: left;
  position: relative;
  .title {
    margin-bottom: 0.5em;
    float: left;
    width: 33%;
    padding-right: $gutter;
    text-align: right;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: $dot-diameter;
      height: $dot-diameter;
      border: $border-width solid salmon;
      background-color: #fff;
      border-radius: 100%;
      top: 15%;
      right: -$dot-diameter;
      z-index: 99;
    }
    h3 {
      margin: 0;
      font-size: 120%;
    }
    p {
      margin: 0;
      font-size: 100%;
    }
  }
  .body {
    margin: 0 0 3em;
    float: right;
    width: 66%;
    padding-left: $gutter;
    p {
      line-height: 1.4em;
      &:first-child {
        margin-top: 0;
        font-weight: 400;
      }
    }
    ul {
      color: #aaa;
      padding-left: 0;
      list-style-type: none;
      li:before {
        content: "–";
        margin-right: 0.5em;
      }
    }
  }
}
</style>
