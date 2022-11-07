import React from 'react';
import styles from '../styles/styles.module.css';

import useProduct from '../hooks/useProduct';
import { createContext, CSSProperties } from 'react';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandles,
  ProductContextProps,
} from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandles) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className = '',
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          reset,
          increaseBy,
        })}
      </div>
    </Provider>
  );
};
