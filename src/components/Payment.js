import React, { useState } from 'react'

import '../styles/Payment.scss'
import Input from './Input'
import Button from './Button'

const Payment = (props) => {
  const [cvv, setCvv] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [expirationDate, setExpirationDate] = useState('')

  return (
    <div className="payment">
      <div className="input-box">
        <Input
          id="card-number"
          label="Número do Cartão:"
          maxLength={16}
          placeholder="____.____.____.____"
          invalidMsg="Número do cartão inválido."
          onValueChange={(value) => {
            setCardNumber(value)
            console.log(cardNumber)
          }}
        />

        <Input
          id="card-holder"
          label="Nome do Títular:"
          maxLength={20}
          placeholder="Como no cartão"
          invalidMsg="Número do cartão inválido."
          onValueChange={(value) => {
            setCardHolder(value)
            console.log(cardHolder)
          }}
        />

        <div className="wrapper">
          <Input
            id="expiration-date"
            label="Validade (mês/ano):"
            maxLength={6}
            placeholder="__/____"
            invalidMsg="Data inválida."
            style={{ minWidth: '160px', width: '44.44%', marginTop: 0 }} //Parent element has 360px width, so: x = (160x100)/360 -> 44.44% proportional width.
            onValueChange={(value) => {
              setExpirationDate(value)
              console.log(expirationDate)
            }}
          />

          <Input
            id="cvv"
            label="CVV:"
            maxLength={3}
            placeholder="___"
            invalidMsg="Código inválido."
            style={{ minWidth: '140px', width: '38.88%', marginTop: 0 }} //Parent element has 360px width, so: x = (140x100)/360 -> 41.18% proportional width.
            onValueChange={(value) => {
              setCvv(value)
              console.log(cvv)
            }}
          />
        </div>
      </div>

      <br />
      <br />

      <Button
        label="finalizar o pedido"
        onClick={() => {
          props.history.push('/confirm')
        }}
      />
    </div>
  )
}

export default Payment
