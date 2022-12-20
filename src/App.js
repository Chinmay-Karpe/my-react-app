import { useState } from "react";

function App() {
  let [message, setMessage] = useState("Typing..");

  let updateMessage = (e) => {
    //e.target == document.querySelector("input");
    message = e.target.value;
    setMessage(message);
  };

  return (
    <div>
      <h1>Working with Input</h1>

      <input
        type="text"
        placeholder="Enter Message"
        value={message}
        onChange={updateMessage}
      />
      <h1>{message}</h1>
    </div>
  );
}
export default App;
