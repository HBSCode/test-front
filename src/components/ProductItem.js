import React from 'react'

import '../styles/ProductItem.scss'

const ProductItem = ({ name, image, price }) => {
  return (
    <div className="product-item">
      <img src={image} alt="Imagem Produto" className="image" />

      <div className="item-wrapper">
        <p className="name">{name}</p>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default ProductItem
