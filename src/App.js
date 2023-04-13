import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <>
      <h1>Math Magicien</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home | </Link>
          </li>
          <li>
            <Link to="/calculator"> Calculator | </Link>
          </li>
          <li>
            <Link to="/quotes"> Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>

  );
}

export default App;
