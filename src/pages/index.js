import React, { Fragment } from 'react'
import Layout from '../components/Layout/layout'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from '../components/Carousel/carousel'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <title>Página Inicial | Jane Jeans</title>
      <meta name="description" content="Página Inicial da loja Jane Jeans, as melhores roupas!" />
    </Helmet>
    <Carousel />
    <Layout />
  </Fragment>
)

export default IndexPage
