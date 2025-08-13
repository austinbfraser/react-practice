// import React from 'react';

import ProductDescription from "./ProductDescription"
import ProductGallery from "./ProductGallery"

const Product = () => {
  return (
    <div className="productContainer">
      <ProductGallery />
      <ProductDescription />
    </div>
  )
}

export default Product