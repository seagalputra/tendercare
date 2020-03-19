import React from 'react'
import ProductCard from 'components/common/ProductCard'

const ProductList = ({ products, onTakeProduct, onDetailProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-gap-8 col-gap-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onTakeProduct={onTakeProduct}
          onDetailProduct={onDetailProduct}
        />
      ))}
    </div>
  )
}

export default ProductList
