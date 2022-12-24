import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  // Data Member
  let inputRef = useRef();
  let [title] = useState("API DEMO");
  let [message, setMessage] = useState("");
  let [messageList, setMessageList] = useState([]);

  // Spl Funcn :: Hook :: Like Constructor ::  Called while the Compoent is Initialized.
  useEffect(() => {
    // console.log("I AM GETTING CALLED");
    getAllMessages();
  }, []);

  // Member Funcns
  let handleOnChangeMessage = (e) => {
    message = e.target.value;
    setMessage(message);
    // setMessage(e.target.value)
  };

  let getAllMessages = async () => {
    let url = `http://localhost:3001/messages`;
    let response = await axios.get(url);
    // console.log(response);

    // Getting the Message From Server :: And re-rendering
    messageList = [...response.data];
    setMessageList(messageList);
  };

  let createNewMessage = async () => {
    let url = `http://localhost:3001/message`;
    // console.log(inputRef.current);
    if (!inputRef.current.checkValidity()) {
      alert("Invalid");
      return;
    }

    let data = {
      message: message,
      messageTime: new Date(),
      reply: true,
    };

    await axios.post(url, data);

    setMessage("");

    // To Refresh the content
    getAllMessages();
  };

  let checkEnterCode = (e) => {
    if (e.keyCode === 13) {
      createNewMessage();
    }
  };

  return (
    <div>
      <h1>{title}</h1>

      <input
        type="text"
        placeholder="Hi...whatsapp...!!"
        value={message}
        onChange={handleOnChangeMessage}
        onKeyUp={checkEnterCode}
        ref={inputRef} // document.querySelector()
        required
        minLength={2}
      />
      <input
        type="button"
        value="Make Ajax/API POST Call"
        onClick={createNewMessage}
      />

      {messageList.map((item, index) => (
        <div key={index}>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
