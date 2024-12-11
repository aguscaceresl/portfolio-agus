export default function MasProyectos(){
    return(
    <div className="container text-center">
        <h1 className="mb-5 display-3 text-light">Proyectos</h1>
        <div className="card mb-5" data-aos="zoom-in">
            <img src="/tetris.png" className="d-block mb-4 w-100" alt="Tetris"/>
            <h2 className="text-light">Tetris</h2>
            <p className="text-light px-4">Este proyecto es una versión sencilla del juego clásico Tetris, hecha con JavaScript, HTML y CSS. El juego te deja mover y girar las piezas con el teclado, tratando de completar filas para sumar puntos. Todo el tablero y las piezas funcionan con lógica de JavaScript, y se actualizan en tiempo real mientras juegas. Tiene niveles que se vuelven más rápidos a medida que avanzas, un contador de puntos para llevar la cuenta y algunos efectos visuales básicos que le dan vida.</p>
        </div>
        
        <div className="card mb-5" data-aos="zoom-in">
            <img src="/calculadora.webp" className="d-block mb-4 w-100" alt="Calculadora"/>
            <h2 className="text-light">Calculadora</h2>
            <p className="text-light px-4">Este proyecto es una calculadora básica hecha con React. Tiene un diseño sencillo y funcional, donde puedes sumar, restar, multiplicar y dividir. Implementé toda la lógica matemática en componentes React y usé el estado para manejar las operaciones y los valores en pantalla. Además, es completamente interactiva: los botones responden al clic y actualizan los resultados al instante. Fue una gran práctica para entender mejor cómo funcionan los estados y los props en React.</p>
        </div>

        <div className="card mb-5" data-aos="zoom-in">
            <img src="/weather-app.jpg" className="d-block mb-4 w-100" alt="Weather App"/>
            <h2 className="text-light">Weather App</h2>
            <p className="text-light px-4">Este proyecto es una aplicación simple pero útil para consultar el clima, conectada a una API de datos meteorológicos. Solo tienes que escribir el nombre de la ciudad, y te muestra información como la temperatura, el estado del clima (soleado, nublado, etc.) y otros detalles como la humedad o el viento. Todo se actualiza en tiempo real gracias a la API. Usé JavaScript para manejar las llamadas a la API y mostrar los datos en pantalla, junto con un diseño limpio hecho con HTML y CSS.</p>
        </div>


    </div>
    );
}
