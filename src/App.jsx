import './App.css';
import Hola from './components/Hola'
import Contador from './components/Contador'
import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
    <h1>Titulo de nuestro primer proyecto</h1>
    <Hola></Hola>
    <Contador></Contador>
    <Listado></Listado>
    <Temperatura></Temperatura>
    <Formulario></Formulario>
    </div>
  );
}

export default App;
