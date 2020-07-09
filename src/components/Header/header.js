/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import '../../sass/style.sass'

export default function Header () {
  const [ShowMenu, setShowMenu] = useState(false)
  const [ShowDropdown, setShowDropdown] = useState(false)
  var prevScrollpos = window.pageYOffset

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar-scroll').setAttribute(
          'style', 'top: 0; transition: top 0.5s;')
      } else {
        document.getElementById('navbar-scroll').setAttribute(
          'style', 'top: -100px; transition: top 0.5s;')
      }
      prevScrollpos = currentScrollPos
    })
  })

  return (
    <Fragment>
      <nav id="navbar-scroll" className="navbar navbar-expand-lg navbar-dark fixed-top bg-tertiary-custom pt-1">
        <span className="navbar-brand mr-5 logo mb-2 text-primary-custom"><Link className="text-primary-custom" to="/">Jane Jeans</Link></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="navbar" onClick={() => setShowMenu(!ShowMenu)}>
          <FontAwesomeIcon icon={ShowMenu === false ? faBars : faTimes } />
        </button>
        <div className={ShowMenu === true ? 'collapse show navbar-collapse' : 'collapse navbar-collapse'} id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="list-unstyled mt-1 mt-lg-0">
              <div className="dropdown" onClick={() => setShowDropdown(!ShowDropdown)}>
                <a href="#" className="navbar-button-text mr-3 dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Masculino</a>
                <div className={ShowDropdown === true ? 'dropdown-menu show' : 'dropdown-menu'} aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </li>
            <li className="list-unstyled mt-2 mt-lg-0">
              <Link className="navbar-button-text" to="/feminino">Feminino</Link>
            </li>
          </ul>
          <li className="list-unstyled mt-4 mt-lg-0">
            <Link className="navbar-button-text mr-4" to="/login">Entrar</Link>
          </li>
          <li className="list-unstyled mt-3 mt-lg-0">
            <form className="form-inline my-2 my-lg-0">
              <label></label>
              <input className="form-control form-control-sm search-input mr-1" type="search" placeholder="Search"/>
              <button className="btn btn-sm my-2 my-sm-0 search" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
          </li>
        </div>
      </nav>
    </Fragment>
  )
}
