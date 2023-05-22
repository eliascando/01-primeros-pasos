import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';

function App() {
  const ficha_medica = {
    altura: "187cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de React
        </p>       
        {/*Cargar mi primer componente*/}
        <div className='componentes'>
          <EventosComponentes></EventosComponentes>
          <hr/>
          <MiComponente></MiComponente>
          <hr/>
          <SegundoComponente></SegundoComponente>
          <hr/>
          <TercerComponente 
            nombre="Victor" 
            apellido="Robles"
            ficha={ficha_medica}
          ></TercerComponente>
          <hr/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
