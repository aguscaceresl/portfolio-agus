import SobreMi from "./SobreMi";
import Experiencia from "./Experiencia";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import Habilidades from "./Habilidades";

export default function Cards(){
    return(
    <div class="row g-5">
        <SobreMi/>
        <Experiencia/>
        <Proyectos/>
        <Habilidades/>
        <Contacto/>
    </div>
    );
}