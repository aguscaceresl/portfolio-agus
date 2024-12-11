export default function Contacto(){
    return(
        <div id="contacto" className="container formulario col-12 col-md-9 card mb-5 py-5 px-3 text-center" data-aos="zoom-in">
            <div className="row px-3">
                <div className="col-12">
                    <h2 className="title text-light position-relative pb-2 mb-4 display-6 text-center">Contáctame</h2>
                </div>
        
                <button className="btn btn-primary mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#formulario" aria-expanded="false" aria-controls="formulario">
                    Rellenar Formulario
                </button>
        
                <div className="collapse collapsing-custom" id="formulario">
                    <form name="EnviarMensaje" id="contactForm">
                        <div className="row">
                            <div className="control-group mb-3 col-sm-6">
                                <input type="text" className="form-control p-4" id="name" placeholder="Nombre" required />
                            </div>
                            <div className="control-group mb-3 col-sm-6">
                                <input type="text" className="form-control p-4" id="apellidos" placeholder="Apellidos" required />
                            </div>
                            <div className="control-group mb-3 col-sm-6">
                                <input type="email" className="form-control p-4" id="email" placeholder="Email" required />
                            </div>
                            <div className="control-group mb-3 col-sm-6">
                                <input type="text" className="form-control p-4" id="phone" placeholder="Teléfono" required />
                            </div>
                        </div>
                        <div className="control-group mb-3">
                            <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Mensaje" required></textarea>
                        </div>
                        <div>
                            <button className="btn btn-primary py-3 px-4" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}