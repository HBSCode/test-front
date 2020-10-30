import React from 'react'

import Button from './Button'

const Bag = (props) => {
  return (
    <div>
      <Button
        label="seguir para o pagamento"
        onClick={() => {
          props.history.push('/pagamento')
        }}
      />
    </div>
  )
}

export default Bag
