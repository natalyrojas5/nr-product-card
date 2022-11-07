import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductBtns } from "./ProductBtns";
import { ProductImg } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces";

export { ProductBtns } from "./ProductBtns";
export { ProductImg } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImg,
  Buttons: ProductBtns,
});
