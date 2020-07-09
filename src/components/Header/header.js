/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar, faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import '../../sass/style.sass'

export default function Header () {
  const [ShowMenu, setShowMenu] = useState(false)
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-tertiary-custom pt-1">
        <span className="navbar-brand mr-5 logo mb-2 text-primary-custom"><Link className="text-primary-custom" to="/">Jane Jeans</Link></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShowMenu(!ShowMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={ShowMenu === true ? 'collapse show navbar-collapse' : 'collapse navbar-collapse'} id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="list-unstyled mt-2 mt-lg-0">
              <Link className="navbar-button-text mr-3" to="/masculino">Masculino</Link>
            </li>
            <li className="list-unstyled mt-2 mt-lg-0">
              <Link className="navbar-button-text" to="/feminino">Feminino</Link>
            </li>
          </ul>
          <li className="list-unstyled mt-2 mt-lg-0">
            <Link to="/login">
              <button className="btn btn-sm navbar-button mr-2">
                <FontAwesomeIcon icon={faStar} />
              </button>
            </Link>
          </li>
          <li className="list-unstyled mt-2 mt-lg-0">
            <Link to="/login">
              <button className="btn btn-sm navbar-button mr-2">
                <FontAwesomeIcon icon={faHome} />
              </button>
            </Link>
          </li>
          <li className="list-unstyled mt-2 mt-lg-0">
            <Link to="/login">
              <button className="btn btn-sm navbar-button mr-4">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </Link>
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
