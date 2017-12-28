<template>
  <section id="proudct-reviews" class="block-product-reviews">    
    <div class="row score-overall">
      <div>
        <img src="/assets/img/overall-rating.png">overall 
        <a href="#" class="right">view all 14 reviews</a>
      </div>
    </div>

    <div class="most-helpful-reviews row">
      <div class="left">
        <div class="heading">
          <h4>PRO</h4>
          <p class="subhead">most helpful 4-5 star review</p>
        </div>

        <article>
          <img src="/assets/img/five-star.png">
          <h3>Fantastic Blender</h3>
          <p>This blender works amazingly, and blends within seconds.  The single serve cups also work really well for smoothies or protein shakes!</p>
          <cite>
            <a href="">Eric</a> April 18, 2013
          </cite>
        </article>
      </div>
      
      <div class="right">
        <div class="heading">
          <h4>CON</h4>
          <p class="subhead">most helpful 1-2 star review</p>
        </div>

        <article>
          <img src="/assets/img/one-star.png">
          <h3>Very unhappy</h3>
          <p>Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup.</p>
          <cite>
            <a href="">New York</a>  March 11, 2013
          </cite>
        </article>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'product-reviews',
  data () {
    return {}
  }
}
</script>