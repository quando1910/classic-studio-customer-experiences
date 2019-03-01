<template>
<div>
  <section class="header">
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">Bạn là</span>
        <span class="heading-primary-sub">Chọn để biết thêm chi tiết</span>
      </h1>
      <a href="#heading-tour" class="btn btn-white btn-hs">Học Sinh</a>
      <a href="#heading-tour" class="btn btn-white btn-sv">Sinh viên</a>
    </div>
  </section>
  <section class="section-tour" id="section-tour">
      <div class="heading-tour" id="heading-tour">
        <h2 class="heading-secondary">Chọn gói</h2>
      </div>
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
                <a href="#popup" class="btn btn-white">Book now</a>
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
                <a href="#popup" class="btn btn-white">Book now</a>
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
                <a href="#popup" class="btn btn-white">Book now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
</style>