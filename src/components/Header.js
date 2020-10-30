import React from 'react'
import { withRouter } from 'react-router-dom'

import '../styles/Header.scss'

const Header = (props) => {
  const path = props.history.location.pathname.replace('/', '')
  const titles = [
    { path: '', value: 'SACOLA' },
    { path: 'payment', value: 'PAGAMENTO' },
    { path: 'confirm', value: 'CONFIRMAÇÃO' }
  ]

  const renderedTitles = titles.map((title) => {
    return (
      <p key={title.path} className={`title ${path === title.path ? 'active' : ''}`}>
        {title.value}
      </p>
    )
  })

  return <header className="header">{renderedTitles}</header>
}

export default withRouter(Header)
