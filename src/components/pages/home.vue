<template>
<div>
  <section class="header">
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">Bạn là</span>
        <span class="heading-primary-sub">Chọn để biết thêm chi tiết</span>
      </h1>
      <a href="#section-tour" class="btn btn-white btn-hs">Học Sinh</a>
      <a href="#section-tour" class="btn btn-white btn-sv">Sinh viên</a>
    </div>
  </section>
  <section class="section-tour" id="section-tour">
      <div class="heading-tour">
        <h2 class="heading-secondary">Heading secondary</h2>
      </div>
      <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture-1">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span-1">Explore the world</span>
              </h4>
              <div class="card__detail">
                <ul>
                  <li>Gói rẻ</li>
                  <li>$100</li>
                  <li>4h</li>
                  <li>Phone: 0368555874</li>
                  <li>Fb: /hi.i.am.si</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$199</p>
                </div>
                <a href="#popup" class="btn btn-white">Book now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture-2">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span-2">Explore the world</span>
              </h4>
              <div class="card__detail">
                <ul>
                  <li>Gói trung bình</li>
                  <li>$200</li>
                  <li>6h</li>
                  <li>Phone: 0368555874</li>
                  <li>Fb: /hi.i.am.si</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$199</p>
                </div>
                <a href="#popup" class="btn btn-white">Book now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture-3">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span-3">Explore the world</span>
              </h4>
              <div class="card__detail">
                <ul>
                  <li>Gói cao</li>
                  <li>$300</li>
                  <li>8h</li>
                  <li>Phone: 0368555874</li>
                  <li>Fb: /hi.i.am.si</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$199</p>
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
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
</style>
