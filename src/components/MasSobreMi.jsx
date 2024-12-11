export default function MasSobreMi(){
    return(
        <>
        <h1 className="mb-5 display-3 text-light text-center">Sobre mí</h1>

        <div className="mt-5 text-center card">
            <h1 className="mb-4 mt-5 display-6 text-light">Descripción</h1>
            <p className="lead text-light px-4">Soy un desarrollador web con pasión por crear aplicaciones atractivas, funcionales y bien estructuradas. Tengo experiencia trabajando en proyectos personales, donde he aprendido a combinar creatividad y lógica para resolver problemas.</p>
        </div>

        <div className="mt-5 text-center card">
            <h1 className="mb-4 mt-5 display-6 text-light">Estudios</h1>
            <ul className="lead text-light px-4">
                <li className="lead text-light mx-5">GS-DAW 2023 - 2025</li>
                <li className="lead text-light mx-5">Bachiller 2020 - 2022</li>
            </ul>
        </div>

        <div className="mt-5 text-center card">
            <h1 className="mb-4 mt-5 display-6 text-light">Metas</h1>
            <p className="lead text-light px-4">Mis principal objetivo a corto/medio plazo es ganar experiencia en el mundo del desarrollo web, aprendiendo tecnologías y metodologías del sector a la vez de ir adquiriendo más responsabilidades con el paso del tiempo.</p>
        </div>

        </>
    );
}
