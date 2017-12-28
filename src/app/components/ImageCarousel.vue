<template>
  <div id="image-carousel">

    <div class="row">
      <img :src="getCurrentImage" class="hero">
    </div>

    <div class="thumbnail-list-wrap">
      <a href="#" class="thumbnail-list-control back" v-on:click.stop.prevent="decCurrentThumb()">
        <img src="/assets/img/hero-left-arrow.svg" width="10">
      </a>

      <div class="thumbnail-list" v-bind:style="{ width: listWidth+'px' }" >
        <div class="thumbnail-list-track" v-bind:style="{ transform: 'translate3d('+thumbOffset+'px, 0px, 0px', width: trackWidth+'px' }">
          <div class="thumbnail" v-for="(image,  index) in this.images">
            <img width="60" height="60" 
              v-bind:src="image" 
              v-on:click.stop.prevent="setImage(index)" 
              v-bind:class="{ 'active': isActiveThumb(index) }"
            > 
          </div>
        </div>
      </div>

      <a href="#" class="thumbnail-list-control forward" v-on:click.stop.prevent="incCurrentThumb()">
        <img src="/assets/img/hero-right-arrow.svg" width="10">
      </a>
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'image-carousel',

  props: {
    images: {
      type: Array,
      required: true
    },

    heroWidth: {
      type: Number,
      default: 400
    },

    thumbVisible: {
      type: Number,
      default: 3
    },

    thumbWidth: {
      type: Number,
      default: 60
    },

    thumbMargin: {
      type: Number,
      default: 8
    },
  },
  
  data () {
    return {
      currentThumb: 1,
      imageIndex: 0,
    }
  },

  computed: {
    ...mapState([
      'productData', // map this.productData to store.state.productData
    ]),

    getCurrentImage() {
      return this.images[this.imageIndex];
    },

    totalThumbWidth() {
      return (this.thumbMargin*2) + this.thumbWidth;
    },

    trackWidth(){
      return this.images.length * this.totalThumbWidth;
    },

    listWidth(){
      return this.totalThumbWidth * this.thumbVisible;
    },

    thumbOffset(){
      if (this.currentThumb > this.thumbVisible)
      {   
        return this.totalThumbWidth * (this.currentThumb - this.thumbVisible) * -1;
      } else {
        return 0;
      }
    },
  },

  methods: {
    incCurrentThumb() {
      if(this.currentThumb < this.images.length) this.currentThumb++;
    },

    decCurrentThumb() {
      if(this.currentThumb > 3) this.currentThumb--;
    },

    setImage(int) {
      this.imageIndex = int;
    },

    isActiveThumb(int){
      return this.imageIndex === int;
    }
  },

  beforeMount(){
    this.currentThumb = this.thumbVisible;
  },
}
</script>

<style lang="scss" scoped>

  .thumbnail-list-wrap {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    &:after {
        clear: both;
        content: "";
        display: block;
      }
  }

  .hero {
    display: block;
    margin: 0 auto;
  }

  .thumbnail-list {
    display: block;
    float: left;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;

    .thumbnail-list-track {
      position: relative;
      top: 0;
      left: 0;
      display: block;
      transition: transform 0.35s ease-in-out;

      &:after {
        clear: both;
        content: "";
        display: block;
      }
    }
    
    .thumbnail {
      width: 60px;
      float: left;
      margin: 0 8px;
      float: left;
      height: 100%;
      min-height: 1px;

      img { border-radius: 3px; }

      .active { border: 1px solid #999999; }
    }
  }

  .thumbnail-list-control  {
    float: left;
    width: 10px;
    height: 20px;
    text-align: center;
    margin: 20px 25px;
  }
</style>