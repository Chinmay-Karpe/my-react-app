import { useState } from "react";

function App() {
  //let counter = 10;
  let [counter, setCounter] = useState(10);

  let increment = () => {
    counter = counter + 1;

    //RE-RENDER
    setCounter(counter);
  };

  return (
    <div>
      <h1>Counter Application</h1>

      <h1>{counter}</h1>

      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}

export default App;
