import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Historia from './pages/Historia';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Forms name="Marcos" email="marcos@gmail.com" tipo="client" /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/cadastro' element={ <Cadastro />} />
          <Route path='/historia' element={ <Historia />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;