import { useState, useMemo } from 'react';

const expensiveCalculation = (num) => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const memoizedCalculation = useMemo(() => { 
    /* The React useMemo Hook returns a memoized value.
    The useMemo Hook only runs when one of its dependencies update.
    */
    return expensiveCalculation(count);
  }, [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((todo) => [...todo, `New Todo ${todos.length + 1}`]);
  };

  return (
    <div>
      <div><hr/>
        <h2>With useMemo: </h2>
        <h2>My Todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <h2>Expensive Calculation</h2>
        <p>{memoizedCalculation}</p>
      </div>
    </div>
  );
};
 
export default UseMemo;