import React, { Fragment } from 'react'
import Layout from '../components/Layout/layout'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from '../components/Carousel/carousel'
import Index from '../components/Index/index'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <title>Página Inicial | Jane Jeans</title>
      <meta name="description" content="Página Inicial da loja Jane Jeans, as melhores roupas!" />
    </Helmet>
    <Layout>
      <div className="mt-5"></div>
      <Carousel />
      <Index />
    </Layout>
  </Fragment>
)

export default IndexPage
