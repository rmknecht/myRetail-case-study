<template>
  <section id="product-hero" class="block-product-hero row">
      <h1>{{ this.productData.title }}</h1>

      <div class="hero-carousel row">
        <image-carousel :images="imageList"></image-carousel>
      </div>
      
    </section>
</template>

<script>

import { mapState } from 'vuex';
import ImageCarousel from './ImageCarousel.vue';

export default {
  name: 'product-hero',
  data () {
    return {}
  },
  
  components: {
    ImageCarousel
  },

  computed: {
    ...mapState([
      'productData', // map this.productData to store.state.productData
    ]),

    // create a simple array from our json data.
    imageList(){
      // create an array
      let alternates = this.productData.Images[0].AlternateImages.map(obj => obj.image)
      
      // return an array composed of the main and alternate images urls
      return [ 
        this.productData.Images[0].PrimaryImage[0].image, 
        ...alternates 
      ];
    }
  },
}
</script>