import React, { useState } from 'react';

const Counter = () => {
  // State setup (done for you)
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // 🚨 LOGIC CHALLENGE 1: Increase count by step amount
  const increment = () => {
    // TODO: Add logic to increase count by the current step value
  };

  // 🚨 LOGIC CHALLENGE 2: Decrease count by step amount
  const decrement = () => {
    // TODO: Add logic to decrease count by the current step value
  };

  // 🚨 LOGIC CHALLENGE 3: Reset count to zero
  const reset = () => {
    // TODO: Add logic to set count back to 0
  };

  // 🚨 LOGIC CHALLENGE 4: Handle step input changes
  const handleStepChange = (e) => {
    // TODO: Add logic to update step from input
    // Hint: Convert string to number and handle invalid inputs
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '40px',
      backgroundColor: '#f0f4f8',
      borderRadius: '16px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Header */}
      <h1 style={{
        color: '#2d3748',
        fontSize: '2.5rem',
        marginBottom: '30px'
      }}>
        Counter Logic Trainer
      </h1>

      {/* Current Count Display */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        marginBottom: '25px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: count >= 0 ? '#48bb78' : '#e53e3e',
          marginBottom: '10px'
        }}>
          {count}
        </div>
        <div style={{
          fontSize: '1.2rem',
          color: '#718096'
        }}>
          Current Count
        </div>
      </div>

      {/* Step Control */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '25px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <label style={{
          display: 'block',
          fontSize: '1.1rem',
          color: '#4a5568',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          Step Size: {step}
        </label>
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          min="1"
          style={{
            width: '100px',
            padding: '8px 12px',
            fontSize: '16px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            textAlign: 'center',
            outline: 'none'
          }}
        />
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={decrement}
          style={{
            padding: '15px 25px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: '#e53e3e',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            minWidth: '120px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c53030'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#e53e3e'}
        >
          - {step}
        </button>
        
        <button
          onClick={reset}
          style={{
            padding: '15px 25px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: '#718096',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            minWidth: '120px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4a5568'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#718096'}
        >
          Reset
        </button>
        
        <button
          onClick={increment}
          style={{
            padding: '15px 25px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: '#48bb78',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            minWidth: '120px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#38a169'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#48bb78'}
        >
          + {step}
        </button>
      </div>

      {/* Info Panel */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#edf2f7',
        borderRadius: '12px',
        fontSize: '14px',
        color: '#4a5568'
      }}>
        <strong>Challenge:</strong> Fill in the 4 empty functions to make the counter work!
        <br />
        <strong>Tip:</strong> The step size determines how much to add/subtract each time.
      </div>
    </div>
  );
};

export default Counter;