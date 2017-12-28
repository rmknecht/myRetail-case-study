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
});
