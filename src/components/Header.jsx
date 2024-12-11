import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <section className="responsive-width py-5 mb-4 text-center">
                <div className="foto mb-3" data-aos="fade-down">
                    <img className="w-100 img-fluid retrato" src="/yo-informal.png" alt="retrato" />
                </div>
                <h1 className="text-light">Agustín Cáceres Lucero</h1>
                <p className="text-light mb-5">Desarrollador Web | Innovador y Creativo</p>

                <div className="d-flex flex-column align-items-center mt-4" data-aos="fade-up">
                    <Link to="/" className="btn btn-outline-light btn-lg btn-menu mb-4">Home</Link>
                    <Link to="/sobre-mi" className="btn btn-outline-light btn-lg btn-menu mb-4">Sobre mí</Link>
                    <Link to="/proyectos" className="btn btn-outline-light btn-lg btn-menu mb-4">Proyectos</Link>
                    <Link to="/newsletter" className="btn btn-outline-light btn-lg btn-menu mb-4">News Letter</Link>
                    <Link to="/contacto" className="btn btn-outline-light btn-lg btn-menu mb-4">Contáctame</Link>
                </div>
            </section>
            <a href="#top" className="btn btn-primary position-fixed bottom-0 end-0 m-3 z-5">
                <i className="fas fa-arrow-up"></i>
            </a>
        </>
    );
}
