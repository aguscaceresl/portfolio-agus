import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cards from './components/Cards';
import MasSobreMi from './components/MasSobreMi';  // Asegúrate de que este componente exista
import MasProyectos from './components/MasProyectos';
import NewsLetter from './components/NewsLetter';
import Contacto from './components/Contacto';

export default function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/sobre-mi" element={<MasSobreMi />} />
        <Route path="/proyectos" element={<MasProyectos />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}
