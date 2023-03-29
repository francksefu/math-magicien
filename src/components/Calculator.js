import '../App.css';

function Calculator() {
  return (
      <section>
        <div className="tableau">0</div>
        <div className="ligne">
          <span>AC</span>
          <span>+/-</span>
          <span>%</span>
          <span className="orange">+</span>
        </div>
        <div className="ligne">
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span className="orange">X</span>
        </div>
        <div className="ligne">
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span className="orange">-</span>
        </div>
        <div className="ligne">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span className="orange">+</span>
        </div>
        <div className="ligne">
          <span className="deux">0</span>
          <span className="dernier">.</span>
          <span className="orange dernier">=</span>
        </div>
      </section>
  );
}

export default Calculator;
