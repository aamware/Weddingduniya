import './App.scss';
import Background from './components/background/Background';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Background />
      </header>
    </div>
  );
}

export default App;
