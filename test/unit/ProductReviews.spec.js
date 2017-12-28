import { mount } from 'vue-test-utils';
import ProductReviews from '../../src/app/components/ProductReviews.vue';

describe('ProductReviews Component', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = mount(ProductReviews);
  });

   // Inspect the raw component options
  it('Has a root element with class proudct-reviews', () => {
    expect(wrapper.contains('.block-product-reviews')).toBe(true);
  });
});
