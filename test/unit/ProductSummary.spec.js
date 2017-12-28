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

  it('Should display the price', () => {
    expect(wrapper.contains('.product-price')).toBe(true);
  });

  it('Displays "pickup in store" and "add to cart" buttons', () => {
    const showCart = wrapper.vm.showAddToCart;
    const showInStore = wrapper.vm.showPickupInStore;

    expect(showCart === showInStore).toBe(true);

    expect(wrapper.contains('.store-pick-up')).toBe(true);
    expect(wrapper.contains('.add-to-cart')).toBe(true);
  });
});
