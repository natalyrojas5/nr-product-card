## NBRM-Product-Card

- Este es un paquete de despliegues en NPM

### Nataly Rojas

### Ejemplo

```
import { ProductTitle, ProductImg, ProductBtns } from 'nbrm-product-card';
```

```
<ProductCard
  key={product.id}
  product={product}
  initialValues={{
    count: 4,
    // maxCount: 10,
  }}
>
  {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
    <>
      <ProductImg />
      <ProductTitle />
      <ProductBtns />
    </>
  )}
</ProductCard>
```
