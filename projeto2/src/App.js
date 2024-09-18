import { useState } from 'react';
import './App.css';
import Destructing from './components/Destructing';
import Events from './components/Events';
import ListRender from './components/ListRender';
import NewStates from './components/NewStates';
import PropsTeste from './components/PropsTeste';
import Singers from './components/Singers';

function App() {
  const nome = "Geovane"

  const [cantores] = useState([
    {id:1, name:"Michael Jackson", gender:"Pop", winner:true, position:1},
    {id:2, name:"Taylor Swift", gender:"Country", winner:false, position:2},
    {id:3, name:"Alceu Valença", gender:"[]", winner:true, position:5},
  ])

  return (
    <div className="App">
      {/* Trabalhando com Eventos */}
      {/* <Events /> */}

      {/* Mudando valores com useState */}
      {/* <NewStates /> */}

      {/* Gerando listas dinâmicas com useState */}
      {/* <ListRender /> */}

      {/* Trabalhando com Props */}
      {/* <PropsTeste name={nome} /> */}

      {/* Destructing */}
      {/* <Destructing time="São Paulo" estado="SP" posicao={5} campeao={false} /> */}

      {/* Reutilizando o componente Destructing */}
      {/* <Destructing time="Porto" estado="ES" posicao={2} campeao={true} /> */}
      {/* <Destructing time="Vasco" estado="RJ" posicao={20} campeao={false} /> */}

      {cantores.map( (cantor) => (
        <Singers key={cantor.id} name={cantor.name} gender={cantor.gender} winner={cantor.winner} position={cantor.position} />
      ))}
    </div>
  );
}

export default App;