import './App.css';
import FirstComponent from './componets/FirstComponent.jsx';
import MyComponets from './componets/MyComponets.jsx';
import TemplateExpressions from './componets/TemplateExpressions.jsx';
import messiDois from './imagessssssssssssssss.jpg'
import NovoComponete from './componets/NovoComponete.jsx';
import ComponenteRemake from './componets/ComponenteRemeke.jsx';

function App() {
  const n = 11
  const classTitle = false

  return (
    <div className="App-header">
      {/* <FirstComponent />
      <TemplateExpressions />
      <MyComponets />

      <img src="./messium.jpg" alt="" />

      <MyComponets />

      <img src={messiDois} alt="" />

      <MyComponets /> */}

      <NovoComponete />

      <p 
        style={{
          color: "white",
          backgroundColor: "gray",
          margin: "25px",
          borderRadius: "8px",
          padding: "5px 10px"
        }}
      >
        Banana de pijama
      </p>

      <h3
        style={
          n > 10 ? ({color: "red"}) : ({color: "green"})
        } 
      >
        Aqui te um texto com o primeiro estilo
      </h3>
      <h2
        className={classTitle ? 'redTitle' : 'greenTitle'}
      >
        Gays são como pessoas normais
      </h2>
      <ComponenteRemake />
    </div>
  )
}

export default App;
