import Vue from 'vue'

describe('Test example', () => {
  it('Foo is true', () => {
  	let foo = true;

    expect(foo).toBe(true);
  })

  it('Foo is false', () => {
  	let foo = false;
  	
    expect(foo).toBe(false);
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
