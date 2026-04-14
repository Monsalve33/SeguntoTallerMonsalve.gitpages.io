import React from 'react'
import { NavLink } from "react-router-dom";

export const Header = () => {
  const logoSrc = `${import.meta.env.BASE_URL}img/PolloAsado.jpg`;

  return (
    <header className="site-header py-3 mb-4 sticky-top">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="brand-mark">
              <img
                src={logoSrc}
                alt="Logo"
                width="48"
                height="48"
                className="rounded-circle object-fit-cover"
              />
            </div>

            <div>
              <p className="brand-eyebrow mb-1">Sabor casero</p>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <h1 className="fw-bold fs-4 mb-0 text-white">Pollo Asado</h1>
                <NavLink to="/props" className="nav-pill text-decoration-none">
                  Props
                </NavLink>
              </div>
            </div>
          </div>

          <form className="header-search" role="search" id="searchForm">
            <div className="input-group search-shell">
              <span className="input-group-text border-0 bg-transparent text-secondary">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="search"
                id="searchInput"
                className="form-control border-0 shadow-none"
                placeholder="Buscar productos..."
                aria-label="Buscar productos"
              />

              <button type="submit" className="btn btn-warning fw-semibold">
                <i className="bi bi-filter"></i> Buscar
              </button>

              <button
                className="btn cart-button position-relative ms-2 d-flex align-items-center justify-content-center"
                type="button"
                aria-label="Carrito"
              >
                <i className="bi bi-cart3 fs-4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}
