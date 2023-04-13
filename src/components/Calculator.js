import { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [result, setResult] = useState({});
  const handleClick = (e) => {
    setResult(calculate(result, e.target.textContent));
  };

  return (
    <section>
      <h2>Calculator</h2>
      <p style={{ padding: '10px', marginTop: '3%', textAlign: 'center' }}>Let' do some math : </p>
      <div className="tableau">{result.next === null ? result.total : result.next}</div>
      <div className="ligne">
        <Span classons="aucun" valeur="AC" cliquons={handleClick} />
        <Span classons="aucun" valeur="+/-" cliquons={handleClick} />
        <Span classons="aucun" valeur="%" cliquons={handleClick} />
        <Span classons="orange" valeur="÷" cliquons={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="aucun" valeur="7" cliquons={handleClick} />
        <Span classons="aucun" valeur="8" cliquons={handleClick} />
        <Span classons="aucun" valeur="9" cliquons={handleClick} />
        <Span classons="orange" valeur="x" cliquons={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="aucun" valeur="4" cliquons={handleClick} />
        <Span classons="aucun" valeur="5" cliquons={handleClick} />
        <Span classons="aucun" valeur="6" cliquons={handleClick} />
        <Span classons="orange" valeur="-" cliquons={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="aucun" valeur="1" cliquons={handleClick} />
        <Span classons="aucun" valeur="2" cliquons={handleClick} />
        <Span classons="aucun" valeur="3" cliquons={handleClick} />
        <Span classons="orange" valeur="+" cliquons={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="deux" valeur="0" cliquons={handleClick} />
        <Span classons="dernier" valeur="." cliquons={handleClick} />
        <Span classons="dernier orange" valeur="=" cliquons={handleClick} />
      </div>
    </section>
  );
}

const Span = (props) => (
  <span className={props.classons} onClick={props.cliquons}>
    {props.valeur}
  </span>
);

export default Calculator;
