export default function Experiencia(){
    return(
        <section id="experiencia" className="col-12 col-md-5 card mb-5 py-5 px-3 text-center" data-aos="zoom-in">
      <h2 className="text-light display-6 mb-4">Experiencia</h2>
      <div className="accordion">

          <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#experience1">
                      Encargado - McDonald's
                  </button>
              </h2>
              <div id="experience1" className="accordion-collapse collapse">
                  <div className="accordion-body">
                      <p><strong>2023 - Actual</strong></p>
                      <p>Descripción detallada de las labores realizadas, retos enfrentados y conocimientos adquiridos.</p>
                  </div>
              </div>
          </div>

          <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#experience2">
                      Eléctrico - MnStudios
                  </button>
              </h2>
              <div id="experience2" className="accordion-collapse collapse">
                  <div className="accordion-body">
                      <p><strong>2022 - 2023</strong></p>
                      <p>Descripción detallada de las labores realizadas, retos enfrentados y conocimientos adquiridos.</p>
                  </div>
              </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#experience3">
                    Mozo Almacén - Maisones du Monde
                </button>
            </h2>
            <div id="experience3" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <p><strong>2020 - 2021</strong></p>
                    <p>Descripción detallada de las labores realizadas, retos enfrentados y conocimientos adquiridos.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
    );
}