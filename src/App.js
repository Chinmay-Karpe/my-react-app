import { useState } from "react";

function App() {
  let [list, setList] = useState([
    { message: "Hi", messageTime: new Date() },
    { message: "How r u", messageTime: new Date() },
    { message: "Good", messageTime: new Date() },
    { message: "fine bro", messageTime: new Date() },
  ]);

  // Member fn
  let addMessage = () => {
    let newMessage = { message: "Chill bro...!", messageTime: new Date() };
    list = [newMessage, ...list];
    setList(list);
  };

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Map Demo</h1>

      <input
        className="btn btn-primary"
        type="button"
        value="Add Message"
        onClick={addMessage}
      />

      {list.map((item, index) => (
        <div key={index} className="d-flex my-1">
          <div className="badge text-bg-primary">
            {item.message}
            <span className="ms-4">
              {item.messageTime.getHours()}:{item.messageTime.getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
