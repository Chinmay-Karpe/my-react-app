import { useState } from "react";

function App() {
  let [message, setMessage] = useState("Hello");
  let [list, setList] = useState([
    { message: "Hi", messageTime: new Date() },
    { message: "How r u", messageTime: new Date() },
    { message: "Good", messageTime: new Date() },
    { message: "fine bro", messageTime: new Date() },
  ]);

  // Member fn
  let updateInputMessage = (e) => {
    message = e.target.value;
    setMessage(message);
  };

  let addMessage = () => {
    //let newMessage = { message: "Chill bro...!", messageTime: new Date() };
    let newMessage = { message: message, messageTime: new Date() };
    list = [newMessage, ...list];
    setList(list);
    setMessage("");
  };

  let checkEnterEvent = (e) => {
    if (e.keyCode === 13) {
      addMessage();
    }
  };

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Map Demo</h1>
      <div className="d-flex">
        <input
          className="form-control"
          value={message}
          onChange={updateInputMessage}
          type="text"
          placeholder="Enter Message"
          onKeyUp={checkEnterEvent}
        />
        <input
          className="btn btn-primary"
          type="button"
          value="Add Message"
          onClick={addMessage}
        />
      </div>
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
