import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = ({ product, onTakeProduct, onDetailProduct }) => {
  const {
    invoiceId,
    productImage,
    productName,
    productDetail,
    totalPrice
  } = product

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={productImage} alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base">{invoiceId}</p>
        <p className="text-gray-700 text-base">{productDetail}</p>
        <p className="text-gray-500 text-base pt-1">
          {`Rp ${totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-around border-t border-gray-300">
        <button
          type="button"
          className="text-base text-gray-800 hover:text-gray-600 font-bold py-2 px-4"
          onClick={onTakeProduct}
        >
          Ambil Barang
        </button>
        <button
          type="button"
          className="text-base text-gray-800 hover:text-gray-600 font-bold py-2 px-4"
          onClick={onDetailProduct}
        >
          Detail Product
        </button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    invoiceId: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDetail: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired
  }),
  onTakeProduct: PropTypes.func,
  onDetailProduct: PropTypes.func
}

export default ProductCard
