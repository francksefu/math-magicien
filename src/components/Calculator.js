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
      <div className="tableau">{result.next === null ? result.total : result.next}</div>
      <div className="ligne">
        <Span classons="aucun" name="AC" cliquons={handleClick} />
        <Span classons="aucun" name="+/-" cliquons={handleClick} />
        <Span classons="aucun" name="%" cliquons={handleClick} />
        <Span classons="orange" name="+" cliquons={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="aucun" name="7" cliquons={handleClick} />
        <Span classons="aucun" name="8" cliquons={handleClick} />
        <Span classons="aucun" name="9" cliquons={handleClick} />
        <Span classons="orange" name="x" cliquons={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="aucun" name="4" cliquons={handleClick} />
        <Span classons="aucun" name="5" cliquons={handleClick} />
        <Span classons="aucun" name="6" cliquons={handleClick} />
        <Span classons="orange" name="-" cliquons={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="aucun" name="1" cliquons={handleClick} />
        <Span classons="aucun" name="2" cliquons={handleClick} />
        <Span classons="aucun" name="3" cliquons={handleClick} />
        <Span classons="orange" name="+" cliquons={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="deux" name="0" cliquons={handleClick} />
        <Span classons="dernier" name="." cliquons={handleClick} />
        <Span classons="dernier orange" name="=" cliquons={handleClick} />
      </div>
    </section>
  );
}

const Span = (props) => <span className={props.classons} onClick={props.cliquons}>{props.name}</span>;

export default Calculator;
