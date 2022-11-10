import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImg, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImg', () => {
  test('Debe de mostrar el componente correctamente con la imagen personalizado', () => {
    const wrapper = renderer.create(<ProductImg img="https://hola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImg />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
