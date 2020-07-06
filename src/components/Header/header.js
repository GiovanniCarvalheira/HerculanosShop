/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import './header.sass'

export default function Header () {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg fixed-top pt-1">
        <span className="navbar-brand mr-5 logo mb-2">Jane Jeans</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse show navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="list-unstyled mt-2 mt-lg-0">
              <Link className="navbar-button-text mr-3" to="/masculino">Masculino</Link>
            </li>
            <li className="list-unstyled mt-2 mt-lg-0">
              <Link className="navbar-button-text" to="/feminino">Feminino</Link>
            </li>
          </ul>
          <li className="list-unstyled mt-2 mt-lg-0">
            <button className="btn btn-sm navbar-button mr-2">
              <Link to="/login"><FontAwesomeIcon icon={faStar} /></Link>
            </button>
          </li>
          <li className="list-unstyled mt-2 mt-lg-0">
            <button className="btn btn-sm navbar-button mr-2">
              <Link to="/login"><FontAwesomeIcon icon={faHome} /></Link>
            </button>
          </li>
          <li className="list-unstyled mt-2 mt-lg-0">
            <button className="btn btn-sm navbar-button mr-4">
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </button>
          </li>
          <li className="list-unstyled mt-2 mt-lg-0">
            <Link className="navbar-button-text mr-4" to="/login">Entrar</Link>
          </li>
          <li className="list-unstyled mt-2 mt-lg-0">
            <Link className="navbar-button-text mr-4" to="/solicitacoes">Minhas solicitações</Link>
          </li>
          <li className="list-unstyled mt-2 mt-lg-0">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control form-control-sm search-input mr-1" type="search" placeholder="Search"/>
              <button className="btn btn-sm my-2 my-sm-0 search" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
          </li>
        </div>
      </nav>
    </Fragment>
  )
}
