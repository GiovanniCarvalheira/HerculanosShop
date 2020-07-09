import React, { Fragment } from 'react'
import '../../sass/style.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export default function Footer () {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <Fragment>
      <footer className="py-3 bg-tertiary-custom">
        <div className="row m-0">
          <div className="col-md-5 d-lg-block d-none">
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center d-lg-block">
            <span className="text-gold-link"><a href="https://github.com/GiovanniCarvalheira">Giovanni Carvalheira - {year}</a>
            </span>
          </div>
          <div className="col-md-3 col-12 d-flex justify-content-center mt-3 mt-lg-0">
            <a href="https://api.whatsapp.com/send?phone=5511932107092&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20a%20partir%20da%20Loja%20Jane%20Jeans%2C%20gostaria%20de%20uma%20ajuda%20por%20gentileza!">
              <button className="btn btn-sm mr-2 footer-button" type="button"><FontAwesomeIcon icon={faPhoneAlt} /> Contato</button>
            </a>
            <span className="d-flex align-self-center text-silver">11 93210-7092</span>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}
