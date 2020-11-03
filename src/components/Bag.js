import React, { useState, useEffect } from 'react'

import '../styles/Bag.scss'
import logo from '../images/logo.svg'

import Header from './Header'
import Button from './Button'
import mocky from '../apis/mocky'
import ProductItem from './ProductItem'

const Bag = (props) => {
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const response = await mocky.get()
      setProducts(response?.data?.items || [])
      sessionStorage.setItem('data', JSON.stringify(response?.data || []))
      setIsLoading(false)
    }

    if (products === null) {
      getData()
    }
  }, [products])

  let ProductItems = []

  if (products && products.length > 0) {
    ProductItems = products.map((item) => {
      return (
        <ProductItem
          key={item.product.sku}
          isASmallVersion={false}
          name={item.product.name}
          image={item.product.imageObjects[0].small}
          price={item.product.priceSpecification.price}
        />
      )
    })
  }

  if (isLoading) {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }

  return (
    <div className="bag">
      <Header />

      <h1 className="page-title">produtos</h1>

      <div className="white-box">{ProductItems.length > 0 ? ProductItems : 'No Data'}</div>

      <Button
        label="seguir para o pagamento"
        onClick={() => {
          props.history.push('/payment')
        }}
      />
    </div>
  )
}

export default Bag
