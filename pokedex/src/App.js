import logo from './pokeball.png';
import "antd/dist/antd.css";
import './App.css';
import SplitScreen from './components/SplitScreen';

function App() {
  return (
    <SplitScreen>
      <img
        src={require('./assets/who-pokemon.png').default}
        alt="pikachu"
        width={550}
      />
    </SplitScreen>
  );
}

export default App;
