import React, { Fragment } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function CarouselDesktop () {
  const data = useStaticQuery(
    graphql`
    query {
      Imagem1: file(
        relativePath: { eq: "images/roupas.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Imagem2: file(
        relativePath: { eq: "images/roupas2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Imagem3: file(
        relativePath: { eq: "images/roupas3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  )
  return (
    <Fragment>
      <Carousel showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
        <div>
          <Img fluid={data.Imagem1.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 1" />
        </div>
        <div>
          <Img fluid={data.Imagem2.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 2" />
        </div>
        <div>
          <Img fluid={data.Imagem3.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 3" />
        </div>
      </Carousel>
    </Fragment>
  )
}
