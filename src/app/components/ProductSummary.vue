<template>
  <section id="product-summary" class="block-product-summary row">
    
    <div class="product-price row" v-if="this.productData.Offers">
      <div v-for="offer of this.productData.Offers">
         <h4 v-for="price of offer.OfferPrice">
          {{ price.formattedPriceValue }} <small>{{ price.priceQualifier }}</small>
        </h4>
      </div>
    </div>

    <div class="product-promo row">
      <ul>
        <li>spend $50, ship free</li>
        <li>$25 gift card with purchase of a select Ninja Blender</li>
      </ul>
    </div>
 
    <div class="product-quantity row">
      <div class="product-quantity-control">
        <span class="quantity-label">quantity:</span>
        <button class="quantity-dec"  v-on:click="decQuantity()">–</button>
        
        <span class="product-quantity-value">{{ this.quantity }}</span>
        <button class="quantity-inc" v-on:click="incQuantity()">+</button>
      </div>
    </div>
    
    <div class="cart-actions row">
      <button class="button btn-large store-pick-up" v-if="showPickupInStore">
        Pick up in store
      </button>
      <button class="button btn-large add-to-cart" v-if="showAddToCart">
        Add to cart
      </button>
    </div>

    <div class="row returns-cta">
      <h4>Returns</h4>
      <p>This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.</p>
    </div>

    <div class="row user-actions">
      <button class="button btn-small">Add to registry</button>
      <button class="button btn-small">Add to list</button>
      <button class="button btn-small">Share</button>
    </div>

    <div class="product-highlights row">
      <h2>product highlights</h2>
      <ul>
        <li>Wattage Output: 1100 Watts</li>
        <li>Number of Speeds: 3</li>
        <li>Capacity (volume): 72.0 Oz.</li>
        <li>Appliance Capabilities: Blends</li>
        <li>Includes: Travel Lid</li>
        <li>Material: Plastic</li>
        <li>Finish: Painted</li>
        <li>Metal Finish: Chrome</li>
        <li>Safety and Security Features: Non-Slip Base</li>
        <li>Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts</li>
      </ul>
    </div>
  </section>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'product-summary',
  
  data () {
    return {}
  },

  methods: {
    ...mapMutations([
      'incQuantity',
      'decQuantity'
    ])
  },

  computed: {
    ...mapState([
      'productData', // map this.productData to store.state.productData
      'quantity'
    ]),

    showAddToCart (purchasingChannelCode){
      return this.productData.purchasingChannelCode == 0 || this.productData.purchasingChannelCode == 1;
    },

    showPickupInStore (purchasingChannelCode){
      return this.productData.purchasingChannelCode == 0 || this.productData.purchasingChannelCode == 2;
    }
  },
}
</script>