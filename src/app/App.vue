<template>
  <div id="app">

    <main class="container">
      <product-hero>
        
      </product-hero>
  		<product-summary></product-summary>
  		<product-reviews></product-reviews>
  	</main>

  </div>
</template>

<script>

import { mapMutations } from 'vuex';
import ItemData from './json/item-data.json';
import ProductHero from './components/ProductHero.vue';
import ProductSummary from './components/ProductSummary.vue';
import ProductReviews from './components/ProductReviews.vue';

export default {
  name: 'app',

  data() {
    return {}
  },

  components: {
    ProductHero,
    ProductSummary,
    ProductReviews
  },

  methods: {
    ...mapMutations([ 
      'setProductData' // map `this.setProductData()` to `this.$store.commit('setProductData')`
    ])
  },

  beforeMount(){
    this.setProductData(ItemData.CatalogEntryView[0]);
  }
}
</script>