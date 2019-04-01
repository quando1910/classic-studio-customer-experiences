<template>
<div id="main">
  <full-page :options="options" id="fullpage" ref="fullpage">
  <section class="section-about section" id="section-about">
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">Bạn là</span>
        <span class="heading-primary-sub">Chọn để biết thêm chi tiết</span>
      </h1>
      <a href="#heading-mock" class="btn-float btn-float-white btn-hs">Học Sinh</a>
      <a href="#heading-mock" class="btn-float btn-float-white btn-sv">Sinh viên</a>
    </div>
    <a class="arrow-down" href="#heading-mock"></a>
  </section>
  <section class="section-package section" id="section-package">
    <h1 id="heading-mock" class="mock-heading">mock</h1>
      <div class="package-container">
        <div class="col-6 image-container">
          <div class="composition">
            <img src="../../assets/images/wall2.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
            <img src="../../assets/images/wall1.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
          </div>
        </div>
        <div class="col-6 description-container">
          <h3 class="heading">{{priority0[0].name}}</h3>
          <p class="paragraph">Suspendisse eu ligula. Vivamus aliquet elit ac nisl. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis!
          </p>
          <a href="#popup" class="btn-text package-button">Learn more &rAarr;</a>
        </div>
      </div>
      <a class="arrow-down" href="#section-option"></a>
    </section>
  <section class="section-option section" id="section-option">
      <div class="container">
        <div class="option-wrapper">
          <div class="option-container">
            <div class="option">
              <div class="option__side option__side--front">
                <div class="option__picture option__picture-1">
                  &nbsp;
                </div>
                <h4 class="option__heading">
                  <span class="option__heading-span option__heading-span-1">Low option</span>
                </h4>
                <div class="option__detail">
                  <ul>
                    <li>Gói rẻ</li>
                    <li>4h</li>
                    <li>Phone: 0368555874</li>
                    <li>Fb: /hi.i.am.si</li>
                  </ul>
                </div>
              </div>
              <div class="option__side option__side--back option__side--back-1">
                <div class="option__cta">
                  <div class="option__price-box">
                    <p class="option__price-only">Only</p>
                    <p class="option__price-value">$199</p>
                  </div>
                  <a href="#popup" class="btn-float btn-float-white">Book now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="option-container">
            <div class="option">
              <div class="option__side option__side--front">
                <div class="option__picture option__picture-2">
                  &nbsp;
                </div>
                <h4 class="option__heading">
                  <span class="option__heading-span option__heading-span-2">Normal option</span>
                </h4>
                <div class="option__detail">
                  <ul>
                    <li>Gói trung bình</li>
                    <li>6h</li>
                    <li>Phone: 0368555874</li>
                    <li>Fb: /hi.i.am.si</li>
                  </ul>
                </div>
              </div>
              <div class="option__side option__side--back option__side--back-2">
                <div class="option__cta">
                  <div class="option__price-box">
                    <p class="option__price-only">Only</p>
                    <p class="option__price-value">$299</p>
                  </div>
                  <a href="#popup" class="btn-float btn-float-white">Book now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="option-container">
            <div class="option">
              <div class="option__side option__side--front">
                <div class="option__picture option__picture-3">
                  &nbsp;
                </div>
                <h4 class="option__heading">
                  <span class="option__heading-span option__heading-span-3">Best option</span>
                </h4>
                <div class="option__detail">
                  <ul>
                    <li>Gói cao</li>
                    <li>8h</li>
                    <li>Phone: 0368555874</li>
                    <li>Fb: /hi.i.am.si</li>
                  </ul>
                </div>
              </div>
              <div class="option__side option__side--back option__side--back-3">
                <div class="option__cta">
                  <div class="option__price-box">
                    <p class="option__price-only">Only</p>
                    <p class="option__price-value">$399</p>
                  </div>
                  <a href="#popup" class="btn-float btn-float-white">Book now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="arrow-down" href="#section-night"></a>
    </section>
    <section class="section-booking">
      <div class="popup" id="popup">
        <div class="popup__content">
            <div class="popup__left">
              <img src="../../assets/images/package1.jpg" alt="booking1" class="popup__image">
              <img src="../../assets/images/package2.jpg" alt="booking2" class="popup__image">
            </div>
            <div class="popup__right">
              <a href="#option-heading" class="popup__close">&times;</a>
              <h2 class="heading-secondary">Start booking</h2>
              <h3 class="heading-tertiary">Details</h3>
              <p class="popup__text u-m-b-medium">Aenean imperdiet. Curabitur vestibulum aliquam leo. 
                Aenean commodo ligula eget dolor. Aenean vulputate eleifend tellus.
                Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Phasellus accumsan cursus velit. Sed a libero. Suspendisse feugiat.
                Maecenas malesuada. Phasellus tempus. Cras id dui. Praesent adipiscing.
                Nulla sit amet est. Nullam dictum felis eu pede mollis pretium. Nunc nulla. In hac habitasse platea dictumst.
              </p>
              <a @click="moreDetail" href="#section-night" class="btn-float btn-green">Book now</a>
            </div>
        </div>
      </div>
    </section>
    <section class="section-night section" id="section-night">
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Bạn có muốn chụp đêm không?</span>
          <span class="heading-primary-sub">Chọn "Có" để biết thêm chi tiết</span>
        </h1>
        <a href="#heading-mock" class="btn-float btn-float-white btn-hs">Có, tôi muốn!</a>
        <a href="#heading-mock" class="btn-float btn-float-white btn-sv">Không, cám ơn!</a>
      </div>
      <a class="arrow-down" href="#section-decorate"></a>
    </section>
    <section class="section-decorate section" id="section-decorate">
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Bạn có muốn trang trí không?</span>
          <span class="heading-primary-sub">Chọn "Có" để biết thêm chi tiết</span>
        </h1>
        <a href="#heading-mock" class="btn-float btn-float-white btn-hs">Có, tôi muốn!</a>
        <a href="#heading-mock" class="btn-float btn-float-white btn-sv">Không, cám ơn!</a>
      </div>
        <a class="arrow-down" href="#section-vehicle"></a>
    </section>
    <section class="section-vehicle section" id="section-vehicle">
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Bạn có muốn thuê xe không?</span>
          <span class="heading-primary-sub">Chọn "Có" để biết thêm chi tiết</span>
        </h1>
        <a href="#heading-mock" class="btn-float btn-float-white btn-hs">Có, tôi muốn!</a>
        <a href="#heading-mock" class="btn-float btn-float-white btn-sv">Không, cám ơn!</a>
      </div>
      <a class="arrow-down" href="#section-invoice"></a>
    </section>
    <section class="section-invoice section" id="section-invoice">
      <div class="invoice-container">
        <table>
          <tr>
            <th>Dịch Vụ</th>
            <th>Đơn Giá</th>
            <th>Số Lượng (Gói)</th>
            <th>Options</th>
            <th>Thành Tiền</th>
          </tr>
          <tr>
            <td>Chụp Sinh Viên</td>
            <td>$299</td>
            <td>1</td>
            <td>Gói chụp đêm</td>
            <td class="total">$299</td>
          </tr>
          <tr>
            <td>Chụp Sinh Viên</td>
            <td>$299</td>
            <td>1</td>
            <td>Gói chụp đêm</td>
            <td class="total">$299</td>
          </tr>
          <tr>
            <td>Chụp Sinh Viên</td>
            <td>$299</td>
            <td>1</td>
            <td>Gói chụp đêm</td>
            <td class="total">$299</td>
          </tr>
          <tr>
            <td>Chụp Sinh Viên</td>
            <td>$299</td>
            <td>1</td>
            <td>Gói chụp đêm</td>
            <td class="total">$299</td>
          </tr>
          <tr class="total" rowspan=5>
            <td colspan="4">Tổng cộng</td>
            <td>$299</td>
          </tr>
        </table>
      </div>
    </section>
    </full-page>
    
    <a class="view-github" href="https://github.com/alvarotrigo/vue-fullpage.js" target="_blank">View on Github</a>
    
    <ul class="actions">
        <li @click="$refs.fullpage.api.moveSectionDown()" class="actions-button">Down</li>
        <li @click="$refs.fullpage.api.moveSectionUp()" class="actions-button">Up</li>
        <li @click="$refs.fullpage.api.moveTo(2,2)" class="actions-button">MoveTo</li>
        <li @click="$refs.fullpage.api.silentMoveTo(2,2)" class="actions-button">Silent Move</li>
        <li @click="$refs.fullpage.api.moveSlideRight()" class="actions-button">Move right</li>
        <li @click="$refs.fullpage.api.moveSlideLeft()" class="actions-button">Move lef</li>
        <li @click="$refs.fullpage.api.setAutoScrolling(false)" class="actions-button">Set autoScroll</li>
        <li @click="$refs.fullpage.api.setFitToSection(false)" class="actions-button">Set fitTo</li>
        <li @click="$refs.fullpage.api.setAllowScrolling(false)" class="actions-button">Set allowScroll</li>
        <li @click="$refs.fullpage.api.setKeyboardScrolling(false)" class="actions-button">Set keyboardScroll</li>
        <li @click="$refs.fullpage.api.setScrollingSpeed(4000)" class="actions-button">setScrollingSpeed</li>
        <li @click="$refs.fullpage.api.destroy('all')" class="actions-button">Destroy</li>
        <li @click="addSection()" class="actions-button">Add section</li>
        <li @click="removeSection()" class="actions-button">Remove section</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);
import { APIService } from "../../service/apiService.js";
const apiService = new APIService();

export default {
  data() {
    return {
      viewerPage: "/home",
      options: {
          afterLoad: this.afterLoad,
          navigation: true,
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      },
      packages: [],
      priority0: [],
      priority1: [],
      priority2: [],
      priority3: [],
      priority4: [],
      priority5: [],
      isSectionPackage: false,
      isSectionOption: false,
      isSectionBooking: false,
      isSectionNight: false,
      isSectionDecorate: false,
      isSectionVehicle: false,
      isSectionInvoice: false
    };
  },
  mounted() {
      apiService.getPackages().then(res => {
        this.packages = res.data.packages;
        console.log(this.packages);
        this.packages.forEach(el => {
          if (el.priority === 0) {
            this.priority0.push(el);
          } else if (el.priority === 1) {
            this.priority1.push(el);
          } else if (el.priority === 2) {
            this.priority2.push(el);
          } else if (el.priority === 3) {
            this.priority3.push(el);
          } else if (el.priority === 4) {
            this.priority4.push(el);
          } else {
            this.priority5.push(el);
          }
        })
        console.log(this.priority0);
      });
  },
  methods: {
    choosePrStudent() {
      this.isSectionPackage = true;
    },
    // chooseOption() {
    //   this.isSectionOption = true;
    // }
    chooseBooking() {
      this.isSectionBooking = true;
    },
    moreDetail() {
      if (!this.isSectionOption) {
        this.isSectionOption = true;
      } else if (this.isSectionOption && !this.isSectionNight) {
        this.isSectionNight = true;
      } else if (this.isSectionNight && !this.isSectionDecorate) {
        this.isSectionDecorate = true;
      } else if (this.isSectionDecorate && !this.isSectionVehicle) {
        this.isSectionVehicle = true;
      } else {
        this.isSectionInvoice = true;
      }
    },
     afterLoad: function(origin, destination, direction){
            console.log("After load....");
            console.log(destination);
        },
        addSection: function(e) {
            var newSectionNumber = document.querySelectorAll('.fp-section').length + 1

            // creating the section div
            var section = document.createElement('div')
            section.className = 'section'
            section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`

            // adding section
            document.querySelector('#fullpage').appendChild(section)

            // creating the section menu element
            var sectionMenuItem = document.createElement('li')
            sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber)
            sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`

            // adding anchor for the section
            this.options.anchors.push(`page${newSectionNumber}`)

            // we have to call `update` manually as DOM changes won't fire updates
            // requires the use of the attribute ref="fullpage" on the
            // component element, in this case, <full-page>
            // ideally, use an ID element for that element too
            this.$refs.fullpage.build()
        },

        removeSection: function(){
            var sections = document.querySelector('#fullpage').querySelectorAll('.fp-section')
            var lastSection = sections[sections.length - 1]

            // removing the last section
            lastSection.parentNode.removeChild(lastSection)

            // removing the last anchor
            this.options.anchors.pop()

            // removing the last item on the sections menu
            var sectionsMenuItems = document.querySelectorAll('#menu li')
            var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
            lastItem.parentNode.removeChild(lastItem)
        },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
</style>
