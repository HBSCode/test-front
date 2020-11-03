import React from 'react'

import '../styles/Confirm.scss'

import Header from './Header'
import ProductItem from './ProductItem'

const Confirm = (props) => {
  const data = JSON.parse(sessionStorage.getItem('data'))

  let ProductItems = []

  if (data && data.items && data.items.length > 0) {
    ProductItems = data.items.map((item) => {
      return (
        <ProductItem
          key={item.product.sku}
          isASmallVersion={true}
          name={item.product.name}
          image={item.product.imageObjects[0].small}
          price={item.product.priceSpecification.price}
        />
      )
    })
  } else {
    props.history.push('/')
  }

  return (
    <div className="confirm">
      <Header />

      <h1 className="page-title">produtos</h1>

      <div className="white-box">{ProductItems.length > 0 ? ProductItems : 'No Data'}</div>
    </div>
  )
}

export default Confirm
