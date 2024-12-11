export default function Header(){
    return(
        <>
        <section className="responsive-width py-5 mb-4 text-center">
        <div className="foto mb-3" data-aos="fade-down">
          <img className="w-100 img-fluid retrato" src="src/assets/react.svg" alt="retrato"/>
          <img className="w-100 img-fluid retrato" src="public/vite.svg" alt="retrato"/>

        </div>
        <h1 className="text-light">Agustín Cáceres Lucero</h1>
        <p className="text-light mb-5">Desarrollador Web | Innovador y Creativo</p>
      
        <div className="d-flex flex-column align-items-center mt-4" data-aos="fade-up">
          <a href="./html/sobre-mi.html" className="btn btn-outline-light btn-lg btn-menu mb-4">Sobre mí</a>
          <a href="./html/experiencia.html" className="btn btn-outline-light btn-lg btn-menu mb-4">Experiencia</a>
          <a href="./html/proyectos.html" className="btn btn-outline-light btn-lg btn-menu mb-4">Proyectos</a>
          <a href="./html/habilidades.html" className="btn btn-outline-light btn-lg btn-menu mb-4">Habilidades</a>
          <a href="./html/estudios.html" className="btn btn-outline-light btn-lg btn-menu mb-4">Estudios</a>
          <a href="#contacto" className="btn btn-outline-light btn-lg btn-menu mb-4">Contáctame</a>
        </div>
      </section>
      <a href="#top" className="btn btn-primary position-fixed bottom-0 end-0 m-3 z-5">
      </a>
      </>
    );
}