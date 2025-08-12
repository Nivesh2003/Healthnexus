import React, { useState } from 'react';
import './BMI.css';
import Navbar from '../Elements/Navbar';

function BMIcalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState();
  const [desc, setDesc] = useState('');
  const [message, setMessage] = useState(''); 
  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please enter height and weight');
      return;
    }
    const heightInM = height / 100;
    const bmiValue = (weight / (heightInM * heightInM)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {setDesc('Underweight'); setMessage('You are underweight. Consider consulting a healthcare provider about achieving a healthy weight.');}
    else if (bmiValue >= 18.5 && bmiValue < 25) {setDesc('Normal'); setMessage('Great shape! By maintaining a healthy weight, you lower your risk of developing serious health problems.');}
    else if (bmiValue >= 25 && bmiValue < 30) { setDesc('Overweight'); setMessage('Being overweight can lead to health issues. Consider a balanced diet and regular exercise.')}
    else {setDesc('Obese'); setMessage('Obesity increases your risk of health problems. Please consult a healthcare provider for guidance.') }
  };
const resetForm = () => { setHeight('');setWeight('');setBmi('');setDesc('');setMessage('');};

return (
  <>
  <div className="container border">
    <div className="row">
    <img className='col-3' src='https://www.iciciprulife.com/content/icici-prudential-life-insurance/tools-and-calculators/bmi_assets/images/Component21.svg'></img>
    <h1 className='col-9 py-3'>BMI CALCULATOR</h1>
    </div>
    <div className="bmi-content">
      <div className="form-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <p>
            <label htmlFor='height'>Enter the Height(cm) </label>
            <input type="number" id="height" className="form-control" placeholder='height in cm' value={height} onChange={(e) => setHeight(e.target.value)} />
          </p>
          <p>
            <label htmlFor="weight">Enter the Weight(kg) </label>
            <input type="number" id="weight" className="form-control" placeholder='weight in kg' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </p>
          <div className="button-group">
          <input type='button' value={'Calculate'} className="form-control" onClick={calculateBMI}/>
          <input type='button' value={'reset'} className="reset" onClick={resetForm}/>
          </div>
        </form>
      </div>

      <div className="results-section">
        <section className="output">
          <h3>Your BMI is </h3>
          <p id="bmi">{bmi}</p>
          <p id="desc">{desc}</p>
          <p id="message">{message}</p>
        </section>

       
      </div>
    </div>
  </div>

      <section className="bmi-scale">
        <div style={{ '--color': 'var(--underweight)' }}>
          <h4>UnderWeight</h4>
          <p>&lt;18.5</p>
        </div>
        <div style={{ '--color': 'var(--normal)' }}>
          <h4>Normal</h4>
          <p>18.5 - 25</p>
        </div>
        <div style={{ '--color': 'var(--overweight)' }}>
          <h4>Overweight</h4>
          <p>25 - 30</p>
        </div>
        <div style={{ '--color': 'var(--obese)' }}>
          <h4>Obese</h4>
          <p>&gt;35</p>
        </div>
      </section>
    
    </>
  );
}

export default BMIcalculator;
