import logo from '../assets/image/posters/chiriro-poster.jpeg';
import '../App.css';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div className="App">
        <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          agdagdaf <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Layout;
