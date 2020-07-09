import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function Index () {
  const data = useStaticQuery(
    graphql`
    query {
      Icon: file(
        relativePath: { eq: "images/Index/Icons/icon.png" }
      ) {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Ilustracao: file(
        relativePath: { eq: "images/Carousel/roupas.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Ilustracao2: file(
        relativePath: { eq: "images/Carousel/roupas.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 300 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  )

  return (
    <Fragment>
      <div className="container my-5 py-4">
        <div className="row">
          <div className="col-lg-5 mx-md-5">
            <li className="list-unstyled text-center">
              <Img fixed={data.Icon.childImageSharp.fixed} draggable={false} alt="Icone do primeiro bloco de texto Loren Ipsum" />
            </li>
            <li className="list-unstyled text-center">
              <h3>Lorem Ipsum</h3>
            </li>
            <span className="text-md-center d-md-flex justify-content-md-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet odio commodo, blandit eros vel, efficitur ipsum. Etiam eu blandit lacus. Vivamus tortor quam, elementum ac posuere quis, congue et enim. Proin viverra, turpis ac condimentum ullamcorper, ligula libero imperdiet ipsum, eget iaculis nulla arcu ut neque. Nam vulputate mollis porta. Donec pellentesque mi consectetur ornare convallis. Sed nec nibh eu est tristique iaculis at vitae mi. Curabitur cursus felis in massa pulvinar, eget dapibus turpis faucibus.</span>
          </div>
          <div className="col-lg-5 my-5 pt-5 py-lg-0 my-lg-0 mx-md-4">
            <li className="list-unstyled text-center">
              <Img fixed={data.Icon.childImageSharp.fixed} draggable={false} alt="Icone do primeiro bloco de texto Loren Ipsum" />
            </li>
            <li className="list-unstyled text-center">
              <h3>Lorem Ipsum</h3>
            </li>
            <span className="text-md-center d-md-flex justify-content-md-center">
            Fusce tempus justo in gravida venenatis. Suspendisse vitae lectus sodales, fringilla orci eu, convallis eros. Nullam luctus venenatis ante. Quisque nec leo et erat facilisis aliquam in eget dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id purus nec nisl tristique lacinia. Suspendisse id venenatis lectus. In gravida risus scelerisque lacus mattis rutrum. Pellentesque luctus sed ligula sed fermentum. Ut nec sodales arcu.
            </span>
          </div>
        </div>
        <div className="col-12 mt-5">
          <li className="list-unstyled text-center">
            <Img fixed={data.Icon.childImageSharp.fixed} draggable={false} alt="Icone do primeiro bloco de texto Loren Ipsum" />
          </li>
          <li className="list-unstyled text-center">
            <h3>Lorem Ipsum</h3>
          </li>
          <span className="text-md-center d-md-flex justify-content-md-center">
          Nulla vitae interdum justo. Aenean nisi ligula, egestas non odio sed, faucibus scelerisque augue. Donec id efficitur enim, eget commodo nunc. Cras pellentesque diam erat. Praesent aliquet dolor sed ligula convallis molestie. Mauris mollis metus ligula, ac hendrerit sapien molestie eu. Sed viverra luctus urna eu laoreet.
          </span>
        </div>
        <div className="card-deck my-5 py-5">
          <div className="card text-center">
            <li className="list-unstyled">
              <Img className="card-img-top" fluid={data.Ilustracao.childImageSharp.fluid} draggable={false} alt="Card image cap"/>
            </li>
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="card text-center">
            <Img className="card-img-top" fluid={data.Ilustracao.childImageSharp.fluid} draggable={false} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card text-center">
            <li className="list-unstyled">
              <Img className="card-img-top" fluid={data.Ilustracao.childImageSharp.fluid} draggable={false} alt="Card image cap"/>
            </li>
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-12 text-center">
            <h5>Lorem Ipsum</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="card text-center">
          <Img className="card-img" fluid={data.Ilustracao2.childImageSharp.fluid} draggable={false} alt="Card image cap" />
        </div>
      </div>
    </Fragment>
  )
}
