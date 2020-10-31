import React from 'react'

import '../styles/Bag.scss'
import Header from './Header'
import Button from './Button'
import mocky from '../apis/mocky'

const Bag = (props) => {
  const getData = async () => {
    const response = await mocky.get()
    sessionStorage.setItem('data', JSON.stringify(response.data))
  }

  getData()

  return (
    <div className="bag">
      <Header />

      <h1 className="page-title">produtos</h1>

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
