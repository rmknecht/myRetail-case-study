<template>
  <div id="app">

    <main class="container">
    	<product-hero></product-hero>
		<product-summary></product-summary>
		<product-reviews></product-reviews>
	</main>

  </div>
</template>

<script>
import ProductHero from './components/ProductHero.vue'
import ProductSummary from './components/ProductSummary.vue'
import ProductReviews from './components/ProductReviews.vue'

export default {
  name: 'app',
  components: {
    ProductHero,
    ProductSummary,
    ProductReviews
  }
}
</script>
