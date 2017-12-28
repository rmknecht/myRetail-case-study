import { mount } from 'vue-test-utils';
import ProductSummary from '../../src/app/components/ProductSummary.vue';
import store from '../../src/app/store';


describe('ProductSummary Component', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = mount(ProductSummary, {
      store
    });
  });

  // Inspect the raw component options
  it('Increments and decrements product quanity by one', () => {
  	const inc = wrapper.find('.quantity-inc');
  	const dec = wrapper.find('.quantity-dec');

  	inc.trigger('click');

  	const label = wrapper.find('span.product-quantity-value');

    expect(label.text()).toBe('2');

    dec.trigger('click');

    expect(label.text()).toBe('1');
  });
});
