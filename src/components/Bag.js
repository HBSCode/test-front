import React from 'react'

import '../styles/Bag.scss'
import Header from './Header'
import Button from './Button'

const Bag = (props) => {
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
