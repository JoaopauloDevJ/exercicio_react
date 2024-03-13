import Calculadora from './components/calculadora/index';
import './global.css'

function App() {

  return (
    <div className="container">
      <header>
        <h1>Calculando o IMC</h1>
      </header>
      <Calculadora/>
    </div>
  )
}

export default App
