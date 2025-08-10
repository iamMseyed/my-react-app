import React, { useState, useEffect } from 'react';

function UseEffectBasics() {
  const [countInc, setCountInc] = useState(0);
  const [countDec, setCountDec] = useState(0);

  const incrementLabel = countInc > 1 ? 'times' : 'time';
  const decrementLabel = countDec > 1 ? 'times' : 'time';

  const fullCheck = (countInc+countDec) > 1? 'times' :'time'; 
  useEffect(() => {
    
    document.title = `Up ${countInc}  ${incrementLabel}, Down ${countDec} ${decrementLabel}`;
    
  //  console.warn(countInc, countDec, incrementLabel, decrementLabel);

    // Optional cleanup function
    // return () => {
    //   console.log('Cleanup code can run here, before the effect runs next time');
    // };

  }, [countInc, countDec,decrementLabel,incrementLabel]); 
  // Dependencies array ensures the effect runs when counts change

  return (
    <>
      <h3>Click to check the count</h3>

      <p>Increased {countInc} {incrementLabel}</p>
      <button onClick={() => setCountInc(countInc + 1)}>+</button>

      <p>Decreased {countDec} {decrementLabel}</p>
      <button onClick={() => setCountDec(countDec + 1)}>-</button>

      <h3>Buttons pressed {countInc + countDec} {fullCheck}</h3>
    </>
  );
}

export default UseEffectBasics;