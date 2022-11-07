import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductTitle, ProductImg, ProductBtns } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card ',
};
const App = () => {
  return (
    <div>
      <ProductCard product={product} initialValues={{ count: 4 }}>
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImg />
            <ProductTitle />
            <ProductBtns />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
