import { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [result, setResult] = useState({});
  const handleClick = (e) => {
    setResult(calculate(result, e.target.textContent));
  }
  
  return (
    <section>
      <Affichage classons="tableau" afficheur={result.next == null? result.total:result.next} />
      <div className="ligne">
      <Span classons="aucun" name = "AC" onClick={handleClick} />
      <Span classons="aucun" name = "+/-" onClick={handleClick} />
      <Span classons="aucun" name = "%" onClick={handleClick} />
      <Span classons="orange" name = "+" onClick={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="aucun" name = "7" onClick={handleClick} />
        <Span classons="aucun" name = "8" onClick={handleClick} />
        <Span classons="aucun" name = "9" onClick={handleClick} />
        <Span classons="orange" name = "x" onClick={handleClick} />
      </div>
      <div className="ligne">
      <Span classons="aucun" name = "4" onClick={handleClick} />
      <Span classons="aucun" name = "5" onClick={handleClick} />
        <Span classons="aucun" name = "6" onClick={handleClick} />
        <Span classons="orange" name = "-" onClick={handleClick} />
      </div>
      <div className="ligne">
        <Span classons="aucun" name = "1" onClick={handleClick} />
        <Span classons="aucun" name = "2" onClick={handleClick} />
        <Span classons="aucun" name = "3" onClick={handleClick} />
        <Span classons="orange" name = "+" onClick={handleClick} />
      </div>
      <div className="ligne">
      <Span classons="deux" name ="0" onClick={handleClick} />
      <Span classons="dernier" name ="." onClick={handleClick} />
      <Span classons="dernier orange" name ="=" onClick={handleClick} />
      </div>
    </section>
  );
}

const Span = ({ classons, name, onClick }) => {
  return(
    <span className={classons} onClick={onClick}>{name}</span>
  );
}

const Affichage = (props) => {
  return(
    <div className={props.classons}>{props.afficheur}</div>
  );
}

export default Calculator;
