import "./App.css";
import Testimonio from "./components/Testimonio";

const TESTIMONIOS = require("./data/testimonios.json");
console.log(TESTIMONIOS)
const testimonios = TESTIMONIOS.testimonios;

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {testimonios.map((testimonio, index) => {
          return (
            <Testimonio
              key={index}
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
