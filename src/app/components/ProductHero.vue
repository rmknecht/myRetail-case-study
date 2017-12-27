<template>
  <section id="product-hero" class="block-product-hero row">
      <h1>{{ this.productData.title }}</h1>

      <div class="hero-carousel row">

        <div class="row">
          <img src="http://via.placeholder.com/400x400" class="product-hero">
        </div>

          <div class="thumbnail-list">
            <a href="#" class="hero-carousel-control back">
              <img src="/assets/img/hero-left-arrow.svg" width="10">
            </a>
            <div class="thumbnail-list-container">
              <div class="thumbnail"><img src="http://via.placeholder.com/60x60"></div>
              <div class="thumbnail"><img src="http://via.placeholder.com/60x60"></div>
              <div class="thumbnail"><img src="http://via.placeholder.com/60x60"></div>
            </div>
            <a href="#" class="hero-carousel-control forward">
              <img src="/assets/img/hero-right-arrow.svg" width="10">
            </a>
          </div>

      </div>
    </section>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'product-hero',
  data () {
    return {}
  },

  computed: {
    ...mapState([
      'productData', // map this.productData to store.state.productData
    ])
  },
}
</script>

<style scoped>
</style>