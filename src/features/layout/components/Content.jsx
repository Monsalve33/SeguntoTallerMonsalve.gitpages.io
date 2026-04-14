import React from 'react'

export const Content = () => {
  const assetBase = `${import.meta.env.BASE_URL}img/`;
  const productos = [
    {
      id: 1,
      nombre: "Pollo Asado",
      precio: 1249,
      img: `${assetBase}pollo1.jpg`,
    },
    {
      id: 2,
      nombre: "Pollo Asado con papas",
      precio: 999,
      img: `${assetBase}pollo2.jpg`,
    },
    {
      id: 3,
      nombre: "pollo frito",
      precio: 1899,
      img: `${assetBase}pollo3.jpg`,
    },
    {
      id: 4,
      nombre: "pollo para comer",
      precio: 59,
      img: `${assetBase}pollo4.jpg`,
    },
    {
      id: 5,
      nombre: "Pollo rico",
      precio: 299,
      img: `${assetBase}pollo5.jpg`,
    },
    {
      id: 6,
      nombre: "Pollo de Minecraft",
      precio: 59,
      img: `${assetBase}pollo6.jpg`,
    },
  ];

  return (
    <main className="page-shell container py-2 pb-5">
      <section className="hero-banner rounded-4 p-4 p-md-5 mb-4">
        <div className="row align-items-center g-3">
          <div className="col-lg-7">
            <p className="section-kicker mb-2">Seleccion del dia</p>
            <h2 className="display-6 fw-bold mb-2">Polleria</h2>
            <p className="text-secondary mb-0">
              Nuestros productos, los mejores pollos de la ciudad, unicos y con un sabor increible.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="hero-stats">
              <div>
                <strong>{productos.length}</strong>
                <span>productos</span>
              </div>
              <div>
                <strong>Envio</strong>
                <span>rapido</span>
              </div>
              <div>
                <strong>Compra</strong>
                <span>segura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="section-title mb-0">Productos destacados</h4>
            <span className="section-badge">Especial del dia</span>
          </div>

          <div className="row g-4">
            {productos.map((p) => (
              <div className="col-sm-6 col-md-4" key={p.id}>
                <div className="card product-card h-100 border-0 shadow-sm">
                  <img
                    src={p.img}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                    alt={p.nombre}
                  />
                  <div className="card-body d-flex flex-column">
                    <span className="product-tag mb-2">Recomendado</span>
                    <h6 className="mb-1">{p.nombre}</h6>
                    <p className="fw-bold product-price mb-3">
                      ${p.precio} USD
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <button type="button" className="btn btn-outline-dark btn-sm flex-fill">
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger btn-sm flex-fill">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="checkout-card p-4">
            <p className="section-kicker mb-2">Registro</p>
            <h5 className="mb-3">Completa tu compra</h5>

            <input className="form-control form-soft mb-2" placeholder="Nombre completo" />
            <input className="form-control form-soft mb-2" placeholder="Correo electronico" />
            <input className="form-control form-soft mb-3" placeholder="Direccion" />

            <hr />

            <h6>Pago digital</h6>
            <input className="form-control form-soft mb-2" placeholder="Numero de tarjeta" />

            <div className="row">
              <div className="col-6">
                <input className="form-control form-soft mb-2" placeholder="MM/AA" />
              </div>
              <div className="col-6">
                <input className="form-control form-soft mb-2" placeholder="CVV" />
              </div>
            </div>

            <button className="btn btn-success w-100 mt-2 fw-semibold">
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
