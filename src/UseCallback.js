/*
The useCallback Hook accepts two arguments.

useCallback(callback, dependencies)

callback: The function that you want to memoize.
dependencies: An array of dependencies for the callback function. 
The memoized callback will only change if one of these dependencies has changed.
*/
import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, text }) => { // React.memo() prevents re-renders if props are unchanged.
  console.log(`${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

function UseCallback(){ 
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => { // prevents function recreation unless dependencies change
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => { // prevents function recreation unless dependencies change
    setCount2(count2 + 1); 
  }, [count2]);

  console.warn("Parent rendered");
  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}
export default UseCallback;