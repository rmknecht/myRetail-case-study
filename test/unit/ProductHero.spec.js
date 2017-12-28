import { mount, createLocalVue } from 'vue-test-utils';
import ProductHero from '../../src/app/components/ProductHero.vue';
import store from '../../src/app/store';

describe('ProductHero Component', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = mount(ProductHero, {
      store
    });
  });

   // Inspect the raw component options
  it('Should contain a carousel element', () => {
    expect(wrapper.contains('.hero-carousel')).toBe(true);
  });

  it('imageList Should return an array', () => {
    let output = wrapper.vm.imageList;
    expect(Array.isArray(output)).toBe(true);
  });

  it('ProductHero should display an h1 title element', () => {
    expect(wrapper.contains('h1')).toBe(true);
  });
});
