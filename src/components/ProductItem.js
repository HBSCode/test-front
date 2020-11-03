import React from 'react'

import '../styles/ProductItem.scss'

const convertToBRL = (value) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const ProductItem = ({ name, image, price, isASmallVersion }) => {
  return (
    <div className={`product-item ${isASmallVersion ? 'small' : 'regular'}`}>
      <img
        src={image}
        alt="Imagem Produto"
        className={`image ${isASmallVersion ? 'small' : 'regular'}`}
      />

      <div className="item-wrapper">
        <p className="name">{name}</p>
        <span className={`price ${isASmallVersion ? 'small' : 'regular'}`}>
          {convertToBRL(price)}
        </span>
      </div>
    </div>
  )
}

export default ProductItem
