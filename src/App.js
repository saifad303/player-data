import './App.css';
import Header from './components/header/Header'
import TradePlayer from './components/trade/TradePlayer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="container">
          <Header />
          <TradePlayer />
      </div>
    </>
  );
}

export default App;