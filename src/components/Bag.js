import React from 'react'

import Button from './Button'

const Bag = (props) => {
  return (
    <div className="bag">
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
