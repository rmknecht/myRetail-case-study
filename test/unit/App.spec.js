import { shallow, createLocalVue } from 'vue-test-utils';
import App from '../../src/app/App.vue';
import store from '../../src/app/store';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(App, {
      store
    });
  });

   // Inspect the raw component options
  it('Has a beforeMount hook', () => {
    expect(typeof App.beforeMount).toBe('function');
  });
});
