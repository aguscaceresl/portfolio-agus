export default function Proyectos(){
    return(
        <section id="proyectos" className="col-12 col-md-5 card mb-5 py-4 px-3 text-center" data-aos="zoom-in">
      <h2 className="text-light mb-4 display-6">Proyectos</h2>
      <div id="backgroundCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover" >

        <div className="carousel-inner" >

          <div className="carousel-item active">
            <div className="carousel-slide-bg fondo1 mb-5"></div>
            <h2 className="text-light">Tetris</h2>
          </div>

          <div className="carousel-item">
            <div className="carousel-slide-bg fondo2 mb-5"></div>
            <h2 className="text-light ">Weather app</h2>
          </div>

          <div className="carousel-item">
            <div className="carousel-slide-bg fondo3 mb-5"></div>
            <h2 className="text-light">Calculadora</h2>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#backgroundCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#backgroundCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
    );
}