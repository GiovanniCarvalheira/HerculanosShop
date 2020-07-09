import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/header'
import Footer from '../Footer/footer'

export default function Layout ({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
