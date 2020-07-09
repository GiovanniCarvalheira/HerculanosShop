import React, { Fragment } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import '../../sass/style.sass'

export default function CarouselDesktop () {
  const data = useStaticQuery(
    graphql`
    query {
      ImagemDesktop1: file(
        relativePath: { eq: "images/Carousel/roupas.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 500 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImagemDesktop2: file(
        relativePath: { eq: "images/Carousel/roupas2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 500 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImagemDesktop3: file(
        relativePath: { eq: "images/Carousel/roupas3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 500 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImagemMobile1: file(
        relativePath: { eq: "images/Carousel/roupas.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 1000 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImagemMobile2: file(
        relativePath: { eq: "images/Carousel/roupas2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 1000 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImagemMobile3: file(
        relativePath: { eq: "images/Carousel/roupas3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 1000 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  )
  return (
    <Fragment>
      <div className="d-md-block d-none">
        <Carousel showArrows={true} showThumbs={false} showIndicators={true} showStatus={false} infiniteLoop={true} autoPlay={true} stopOnHover={true} useKeyboardArrows={true}>
          <div>
            <Img fluid={data.ImagemDesktop1.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 1" />
            <p className="legend bg-tertiary-custom text-secundary-custom d-lg-block d-none" style={{ fontSize: '20px' }}>Camisas</p>
          </div>
          <div>
            <Img fluid={data.ImagemDesktop2.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 2" />
            <p className="legend bg-tertiary-custom text-secundary-custom d-lg-block d-none" style={{ fontSize: '20px' }}>Calças</p>
          </div>
          <div>
            <Img fluid={data.ImagemDesktop3.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 3" />
            <p className="legend bg-tertiary-custom text-secundary-custom d-lg-block d-none" style={{ fontSize: '20px' }}>Tênis</p>
          </div>
        </Carousel>
      </div>
      <div className="d-block d-md-none">
        <Carousel showArrows={true} showThumbs={false} showIndicators={true} showStatus={false} infiniteLoop={true} autoPlay={true} stopOnHover={true}>
          <div>
            <Img fluid={data.ImagemMobile1.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 1" />
            <p className="legend bg-tertiary-custom text-secundary-custom d-lg-block d-none" style={{ fontSize: '20px' }}>Camisas</p>
          </div>
          <div>
            <Img fluid={data.ImagemMobile2.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 2" />
            <p className="legend bg-tertiary-custom text-secundary-custom d-lg-block d-none" style={{ fontSize: '20px' }}>Calças</p>
          </div>
          <div>
            <Img fluid={data.ImagemMobile3.childImageSharp.fluid} draggable={false} alt="Imagem de roupas no carousel 3" />
            <p className="legend bg-tertiary-custom text-secundary-custom d-lg-block d-none" style={{ fontSize: '20px' }}>Tênis</p>
          </div>
        </Carousel>
      </div>
    </Fragment>
  )
}
