import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import MyNavBar from './components/MyNavBar';
import MyAlert from './components/MyAlert';
import MyButton from './components/MyButton';
import MyCard from './components/MyCard';
import MyCarousel from './components/MyCarousel';
import MyModal from './components/MyModal';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <div style={({width: '100vw', height: '500px', display: 'flex', justifyContent: 'center'})}>
        <MyCarousel />
      </div>
      <br />
      <MyCard />
      <MyAlert />
      <MyButton />
      <MyModal />
    </div>
  );
}

export default App;